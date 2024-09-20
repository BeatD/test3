let passShowed = false;

function showPass() {
    let pass = document.getElementById("passwordInput");
    pass.type = passShowed ? "password" : "text"; // Toggle password visibility
    passShowed = !passShowed; // Update the state
    document.getElementById("passimg").src = passShowed 
        ? "https://cdn-icons-png.flaticon.com/128/2767/2767146.png" 
        : "https://cdn-icons-png.flaticon.com/128/709/709612.png";
}

function registerAcc() {
    let nameField = document.getElementById("nameInput");
    let passField = document.getElementById("passwordInput");

    if (nameField.value.trim() === "" || passField.value.trim() === "") {
        if (nameField.value.trim() === "") {
            nameField.placeholder = "N'oublie pas ton nom!";
        }
        if (passField.value.trim() === "") {
            passField.placeholder = "N'oublie pas ton mot de passe!";
        }
        setTimeout(() => {
            nameField.placeholder = "nom";
            passField.placeholder = "mot de passe";
        }, 3000);
    } else {
        localStorage.setItem("NameCB", nameField.value);
        localStorage.setItem("PasswordCB", passField.value);
        localStorage.setItem("VALIDCB", "TRUE");
        document.getElementById("dialog").showModal();


            if (Notification.perm === "granted") {
                new Notification("Hello and welcome to cineBaobab!", {
                    body: "Thanks for letting us use your notifications! Let's hop into the dreamland.",
                    icon: "https://cdn-icons-png.flaticon.com/128/2184/2184561.png"
                });
            } else if (Notification.perm === "denied") {
                Notification.requestPermission().then(permission => {
                    if (perm === "granted") {
                        new Notification("Hello and welcome to cineBaobab!", {
                            body: "Thanks for letting us use your notifications! Let's hop into the dreamland.",
                            icon: "https://cdn-icons-png.flaticon.com/128/2184/2184561.png"
                        });
                    }
                });
            }
      
    }
}

function deleteInfoDev() {
    localStorage.clear();
    console.log("Cleared all information!");
}
