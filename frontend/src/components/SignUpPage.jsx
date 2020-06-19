import React, {useState} from 'react';
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
import {useHistory} from "react-router-dom";
import UserController from "../controllers/UserController";
import {validateEmptyField} from "../helpers/ViewHelpers";

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
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function SignUpPage() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [password, setPassword] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [firstname, setFirstname] = useState('')
    const [firstnameErrorMessage, setFirstnameErrorMessage] = useState('')
    const [lastname, setLastname] = useState('')
    const [lastnameErrorMessage, setLastnameErrorMessage] = useState('')

    const signup = async function () {
        let valid = true

        validateEmptyField(firstname, valid, setFirstnameErrorMessage, 'First name cannot be empty')
        validateEmptyField(lastname, valid, setLastnameErrorMessage, 'Last name cannot be empty')
        validateEmptyField(email, valid, setEmailErrorMessage, 'Email cannot be empty')
        validateEmptyField(password, valid, setPasswordErrorMessage, 'Password cannot be empty')

        if(!valid) {
            return
        }

        let response = await UserController.signupUser(
            firstname,
            lastname,
            email,
            password
        )

        if(response.success) {
            history.push('/login')
        }
    }

    return (<Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <form className={classes.form} noValidate="noValidate">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname" name="firstName" variant="outlined" required fullWidth
                            id="firstName" label="First Name" autoFocus
                            error={firstname!==''}
                            helperText={firstnameErrorMessage}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName"
                            autoComplete="lname"
                            error={lastname!==''}
                            helperText={lastnameErrorMessage}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined" required fullWidth id="email" label="Email Address" name="email"
                            autoComplete="email"
                            error={email!==''}
                            helperText={emailErrorMessage}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined" required fullWidth name="password" label="Password"
                            type="password" id="password" autoComplete="current-password"
                            error={password!==''}
                            helperText={passwordErrorMessage}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    {/*<Grid item xs={12}>*/}
                    {/*    <FormControlLabel*/}
                    {/*        control={<Checkbox value="allowExtraEmails" color="primary"/>}*/}
                    {/*        label="I want to receive inspiration, marketing promotions and updates via email."*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                </Grid>
                <Button
                    fullWidth variant="contained" color="primary"
                    className={classes.submit}
                    onClick={signup}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
        <Box mt={5}>
            <Copyright/>
        </Box>
    </Container>);
}
