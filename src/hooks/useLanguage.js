
const useLanguage = (language) => {
    

    const labels = {

        headerLogin: language ? "ورود" : "Login",
        headerSign: language ? "ثبت نام" : "Sign Up",
        name : language ? "نام" : "Name",
        email: language ? "ایمیل" : "Email",
        password: language ? "رمز عبور" : "Password",
        confirmPassword: language ? "تکرار رمز عبور" : "ConfirmPassword" , 
        textPolicy : language ? "با قوانین سایت موافقم" : "I accept terms of privacy policy" ,
        
    }

    return labels ;


};

export default useLanguage;