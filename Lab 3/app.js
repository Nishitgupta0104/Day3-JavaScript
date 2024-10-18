function add(){
    var OneNumber = parseInt(document.getElementById("NumOne")?.value)
    var TwoNumber = parseInt(document.getElementById("NumTwo")?.value)
    
   // console.log(OneNumber+TwoNumber)
    var addition = OneNumber + TwoNumber

    document.getElementById('result1').innerHTML = "The Sum is " +addition
}
    

function subtract(){
    var OneNumber = parseInt(document.getElementById("NumOne")?.value)
    var TwoNumber = parseInt(document.getElementById("NumTwo")?.value)
    var subraction = OneNumber - TwoNumber
    document.getElementById('result2').innerHTML = "After Subtracting " +subraction
}

function multiplication(){
    var OneNumber = parseInt(document.getElementById("NumOne")?.value)
    var TwoNumber = parseInt(document.getElementById("NumTwo")?.value)
    var multiplication = OneNumber * TwoNumber
    document.getElementById('result3').innerHTML = "The Product is " +multiplication
}

function division(){
    var OneNumber = parseInt(document.getElementById("NumOne")?.value)
    var TwoNumber = parseInt(document.getElementById("NumTwo")?.value)
    var division = OneNumber / TwoNumber
    document.getElementById('result4').innerHTML = "After Dividing " +division
}