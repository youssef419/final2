let email=document.getElementById("email")

let icone= document.getElementById("icone")

let password=document.getElementById("password")

let iconp=document.getElementById("iconp")

email.onfocus=function(e) {icone.style.visibility="hidden"}
email.onblur=function(e) {icone.style.visibility="visible"}
password.onfocus=function(e) {iconp.style.visibility="hidden"}
password.onblur=function(e) {iconp.style.visibility="visible"}

let login=document.getElementById("login")
login.onclick=function(x){
    alert("Thank You For Login ")
}



