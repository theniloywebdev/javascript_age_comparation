function myFunction(){
    let age = document.getElementById("age").value;
    if(age<18){
        document.getElementById("demo").innerHTML = "Child"
    }

    else if(age>=18 & age<30){
        document.getElementById("demo").innerHTML = "Adult"
    }

    else if(age>30){
        document.getElementById("demo").innerHTML = "Old"
    }
}