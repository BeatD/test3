let passShowed = false;

function showPass() {
    let pass = document.getElementById("passwordInput");
    if (!passShowed) {
        pass.type = "text"; // Show the password
        passShowed = true;  // Update the state
        document.getElementById("passimg").src = "https://cdn-icons-png.flaticon.com/128/709/709612.png"
    } else {
        pass.type = "password"; // Hide the password
        passShowed = false; // Update the state
        document.getElementById("passimg").src = "https://cdn-icons-png.flaticon.com/128/2767/2767146.png"
    }
}

function registerAcc() {
    let passField = document.getElementById("nameInput");
    let nameFiled = document.getElementById("passwordInput")
    if (passField.value === "" || nameFiled === "" || nameFiled === " " || passField.value === "") {
        nameFiled.placeholder = "N'oublie pas ton mot de passe!"
        passField.placeholder = "N'oublie pas ton nom!"
        setTimeout(() => {
            nameFiled.placeholder = "nom"
            passField.placeholder = "mot de passe"
        }, 3000);
    }
    else {
        localStorage.setItem("NameCB", nameFiled.value)
        localStorage.setItem("PasswordCB", passField.value)
        localStorage.setItem("VALIDCB", "TRUE")
        document.getElementById("dialog").showModal()
        setTimeout(() => {
            if (Notification.permission === "granted") {
                new Notification("Hello and welcome to cineBaobab!", {
                    body: "Thanks for letting us use your notifications! Let's hop into the dreamland.",
                    icon: "https://cdn-icons-png.flaticon.com/128/2184/2184561.png"
                });
            }else if(Notification.permission === "denied") {
                Notification.requestPermission()
                (Notification.permission === "granted") {
                    new Notification("Hello and welcome to cineBaobab!", {
                        body: "Thanks for letting us use your notifications! Let's hop into the dreamland.",
                        icon: "https://cdn-icons-png.flaticon.com/128/2184/2184561.png"
                    });
            }
            
        }, 3000);
    }
}

function deleteInfoDev(){
    localStorage.clear()
    console.log("cleared all Information !")
}
