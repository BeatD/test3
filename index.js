document.addEventListener("DOMContentLoaded", ()=> {
    let verifyingtext = document.getElementById("textVerifying")
    let icon = document.getElementById("icon")
    let image2 = document.getElementById("image2")
      let x = Math.floor(Math.random()*20000)
    setTimeout(() => {
        verifyingtext.style.opacity = "1"
        verifyingtext.style.transition = "15s"
    }, 1000);
    setTimeout(() => {
        image2.style.animation = "loading linear 2s infinite"
    }, 4500);
    setTimeout(() => {
        image2.style.transition = "4s"
        image2.style.opacity= "1"
    }, 4000);
    setTimeout(() => {
        if (localStorage.getItem("VALID")) {
           window.location.href = "./pages/MainShop.html"
        }
        else {
           window.location.href = "./pages/accountNotValidated.html"
        }
    }, x);
})