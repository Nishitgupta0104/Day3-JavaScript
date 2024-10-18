function validateForm(){
    var username = parseInt(document.getElementById("user_name")?.value)
    var password = parseInt(document.getElementById("password")?.value)
    
    if(username !== "" && password !== "")
        {
        if(username.length >= 4 && password.length >= 7)
        {
            alert("Login Successful")
        }else
        {
            alert("Username should have atleast 4 elements and password should have atleast 7 elements")
        }
    }else
    {
        alert("Enter both username and password")
    }
}
