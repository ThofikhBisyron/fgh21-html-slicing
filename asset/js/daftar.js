// form
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
// footer
const footer1 = document.getElementById("footer-link-1");
const footer2 = document.getElementById("footer-link-2");
const footer3 = document.getElementById("footer-link-3");

const contentFooter1 = [
  "About Us",
  "Feature",
  "Blog",
  "Payments",
  "Mobile App",
];
for (let i = 0; i < contentFooter1.length; i++) {
  const item = document.createElement("div");
  item.className = "footer-link";
  item.textContent = contentFooter1[i];
  footer1.appendChild(item);
}
const contentFooter2 = ["Booking", "Create event", "Discover", "Register"];
for (let i = 0; i < contentFooter2.length; i++) {
  const item = document.createElement("div");
  item.className = "footer-link";
  item.textContent = contentFooter2[i];
  footer2.appendChild(item);
}
const contentFooter3 = [
  "Partnership",
  "Help",
  "Terms of Service",
  "Privacy Policy",
  "Sitemap",
];
for (let i = 0; i < contentFooter3.length; i++) {
  const item = document.createElement("div");
  item.className = "footer-link";
  item.textContent = contentFooter3[i];
  footer3.appendChild(item);
}