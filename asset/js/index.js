// navbar
const nav = document.getElementById("nav");
      const menu = document.getElementById("btn");
      const menulist = nav.getElementsByClassName("menu").item(0);
      const buttonnav = nav.getElementsByClassName("button-navbar").item(0);
      menu.onclick = () => {
        if (menulist.getAttribute("style")){
          menulist.removeAttribute("style")
        }else {
          menulist.setAttribute("style", "display: unset")
        }
        if (buttonnav.getAttribute("style")){
          buttonnav.removeAttribute("style")
        }else{
          buttonnav.setAttribute("style", "display: unset !important")
        }
      };

//   footer
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

// List Event
const box1 = document.getElementById("fill")

const contentevent = [
    "Wed, 15 Nov, 4:00 PM",
]
const contentevent2 = [
    "Thu, 16 Nov, 7:00 PM",
]

for (let i = 0; i < contentevent.length; i++) {
    const item = document.createElement("div");
    item.textContent = contentevent[i];
    box1.appendChild(item);
}