
export const validation = (data, type) => {

    const errors = {};


    if (type === "signup") {

        if (!data.name.trim()) errors.name = "Name is required";
        else delete errors.name;


        if (!data.confirmPassword) errors.confirmPassword = "ConfirmPassword is required";
        else if (data.confirmPassword !== data.password) errors.confirmPassword = "Your password is not match";
        else delete errors.password;
    
        if (!data.isAccepted) errors.isAccepted = "Please accept the our policies";
        else delete errors.isAccepted;
    }
    

    if (!data.email) errors.email = "Email is required";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) errors.email = "Email is invalid";
    else delete errors.email;

    if (!data.password) errors.password = "Password required";
    else if (data.password.length < 8 && type === "signup") errors.password = "Your password should be 8 character or more";
    else delete errors.password;


   
        return errors ;

}