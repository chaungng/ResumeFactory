class Resume{
    personalInfo: PersonalInfo;
    workExperiences: WorkExperience[];
    skills: Skill[];
    educations: Education[];
}

class PersonalInfo {
    firstName : String;
    lastName: String;

    getFirstName(){
        return this.firstName;
    }
    setFirstName(firstName: String){
        this.firstName = firstName;
    }
}

class WorkExperience{

}

class Skill{

}

class Education {

}