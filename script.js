const button = document.getElementById("_btnSubmit");

button.addEventListener("click", function(){
    const fullName = document.getElementById("_fullnameInput");
    const username = document.getElementById("_userNameInput");
    const password = document.getElementById("_passwordInput");

    alert("Try these: \nFull Name: wahid\nUername: khan\nPassword: 123");
    if (fullName.value === "" || username.value ==="" || password.value === ""){
        alert("Please fill all the fields!");
    }
    else if (fullName.value === "wahid" && username.value === "khan" && password.value === "123"){
        alert("Most welcome!");
    }
    else{
        alert("Incorrect credentials!");
    }
    fullName.value ="";
    username.value ="";
    password.value ="";
});