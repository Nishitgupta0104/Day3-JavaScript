//prompt which will take input (ok, cancel)
//confirm are you sure you want to confirm (yes or no)
//asking the user their name we willl welcome them to our application
/*
function welcomeMsg(){
    //taking prompt
    let user_name = prompt("Enter user's name :")
    console.log(`Enter user's name is ${user_name}`)
    //taking confirmation
    let confirmation = confirm(`Do you agree ${user_name} to our terms and conditions`)
    //1st way
    if(confirmation==true){
        alert(`Welcome to our app ${user_name}`)
    }
    else{
        alert(`You did not agree to our terms and conditions ${user_name}`)
    }
}

welcomeMsg()
*/
//advanced lab - addition of two numbers

function sum(){
    var FirstNum = Number(prompt("Enter 1st Number: "))
    var SecondNum = Number(prompt("Enter 2nd Number: "))
    var Sum = Number(FirstNum + SecondNum) 
    alert(`Sum of two numbers is ${Sum}`)
}
sum()