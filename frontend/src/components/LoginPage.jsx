import React, {useContext, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserController from '../controllers/UserController';
import {useHistory} from "react-router-dom";
import {validateEmptyField} from "../helpers/ViewHelpers";
import localForage from "localforage";
import {DataContext} from "../contenxts/DataContext";
import ResumeController from '../controllers/ResumeController';

function Copyright() {
    return (<Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>);
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function LoginPage() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [password, setPassword] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [otherErrorMessage, setOtherErrorMessage] = useState('')
    const [firstRun, setFirstRun] = useState(true)
    const [rememberMe, setRememberMe] = useState(false)
    const {user} = useContext(DataContext)

    useEffect(() => {
        let func = async () => {
            if (firstRun) {
                setEmail(await localForage.getItem('email'))
                setRememberMe(await localForage.getItem('rememberMe'))
                setFirstRun(false)
            }
        }

        func()
    })

    const loginUser = async function () {
        let valid = true
        validateEmptyField(email, valid, setEmailErrorMessage, 'Email cannot be empty')
        validateEmptyField(password, valid, setPasswordErrorMessage, 'Password cannot be empty')

        if (!valid) {
            return
        }

        let response = await UserController.loginUser(email, password)
        console.log(response);
        if (response.success) {
            try {
                if (rememberMe) {
                    await localForage.setItem('email', email);
                } else {
                    await localForage.setItem('email', '');
                }
                await localForage.setItem('rememberMe', rememberMe);
            } catch {
            }

            user.setLoggedIn(true)
            await localForage.setItem('loggedIn', true);
            user.setUserId(response.data.id);
            await localForage.setItem('userId', response.data.id);
            user.setUsername(response.data.firstName + " " + response.data.lastName);
            await localForage.setItem('username', user.username);

            user.setTitle(response.data.title);
            await localForage.setItem('title', user.title);
            user.setLocation(response.data.location);
            await localForage.setItem('location', user.location);

            let count = await ResumeController.getCountResumeByUserId(user.userId);
            user.setNumOfResume(count);
            await localForage.setItem('numOfResume', user.numOfResume);
            history.push('/')
        } else {
            setOtherErrorMessage('Invalid user')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate="noValidate">
                    <TextField
                        variant="outlined" margin="normal" required fullWidth id="email"
                        label="Email Address" name="email" autoComplete="email" autoFocus
                        error={emailErrorMessage !== ''}
                        value={email}
                        helperText={emailErrorMessage}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined" margin="normal" required fullWidth name="password"
                        label="Password" type="password" id="password" autoComplete="current-password"
                        error={passwordErrorMessage !== ''}
                        helperText={passwordErrorMessage}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="remember"
                                color="primary"
                                checked={rememberMe}
                                onChange={e => setRememberMe(e.target.checked)}
                            />}
                        label="Remember me"
                    />

                    <div>
                        {otherErrorMessage}
                    </div>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={loginUser}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
}
