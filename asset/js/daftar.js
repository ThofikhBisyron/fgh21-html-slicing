const circle = document.getElementById("circle")
const button = document.getElementById("button-signup")

button.onclick = ()  => {
    const fullname =  document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value
    const cek = document.getElementById("cek").checked
    
    if (fullname === "" || email === "" || password === "" || confirmpassword === "") {
        window.alert("Form must be filled out");
    } else if (password !== confirmpassword){
        window.alert("password do not match")
    } else if (!cek) {
        window.alert("You must accept the term and conditions bro")
    } else {
        window.location.href = "index.html"
    }

}