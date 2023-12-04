function sendInn() {
    console.log("Hello world!")
    let email;
    let password;

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    console.log(email, password);

    let lse = localStorage.getItem("email")
    let lsp = localStorage.getItem("password1")
    if(email===lse&&password===lsp) {
        window.location.href = "http://127.0.0.1:5500/html/welcome.html"
    }
}

function createUser() {
    let email=document.getElementById("email").value; 
    let password1=document.getElementById("password").value; 
    let password2=document.getElementById("repeatpassword").value; 
    console.log (email, password1, password2)
    if(password1===password2) {
        localStorage.setItem("email", email)
        localStorage.setItem("password1", password1)
        localStorage.setItem("password2", password2)
    }

}