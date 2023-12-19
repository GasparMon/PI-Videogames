export default function validation(input) {

    console.log(input)

    const errors = {}

    const regexPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/;

    if(!input.password.length) errors.password = "Password must include at least one uppercase letter & one digit"
    else{
        if(!regexPassword.test(input.password)) errors.password = "You must enter a valid password."
        if(input.password.length < 8) errors.password = "You must enter a valid password."
        if(input.password.length > 18) errors.password = "You must enter a valid password."
    }

    return errors;
}
