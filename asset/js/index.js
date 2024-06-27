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

// event 1

const events = document.getElementsByClassName("event-box");

  Array.from(events).forEach((event) => {
  const eventBox = document.createElement("div");
  eventBox.className = "event-box";
  event.appendChild(eventBox);

  const boxDetail = document.createElement("div");
  boxDetail.className = "box-detail";
  eventBox.appendChild(boxDetail);

  const contentBox = document.createElement("div");
  contentBox.className = "content-box";
  boxDetail.appendChild(contentBox);

  const fillContent = document.createElement("div");
  fillContent.className = "fill-content";
  contentBox.appendChild(fillContent);

  const eventDate = document.createElement("div");
  eventDate.textContent = "Wed, 15 Nov, 4:00 PM";
  fillContent.appendChild(eventDate);

  const letterSpace = document.createElement("div");
  letterSpace.className = "letter-space";
  letterSpace.textContent = "Sights & Sounds Exhibition";
  fillContent.appendChild(letterSpace);

  const profileAvatar = document.createElement("div");
  profileAvatar.className = "profile-avatar";
  contentBox.appendChild(profileAvatar);

  const pictAvatar = [
    "./asset/img/avatar1.png",
    "./asset/img/avatar2.png",
    "./asset/img/avatar3.png",
    "./asset/img/avatar4.png",
  ];

  pictAvatar.forEach((link) => {
    const picture = document.createElement("div");
    const pict = document.createElement("img");
    pict.setAttribute("src", link);
    pict.setAttribute("alt", "Attendant");
    picture.appendChild(pict);
    profileAvatar.appendChild(picture);
  });
  
  event.onclick = () => {
    window.location.href = "./event.html"
  }
});

// event 2
const events2 = document.getElementsByClassName("event-box2");

  Array.from(events2).forEach((event2) => {
  const eventBox2 = document.createElement("div");
  eventBox2.className = "event-box2";
  event2.appendChild(eventBox2);

  const boxDetail2 = document.createElement("div");
  boxDetail2.className = "box-detail2";
  eventBox2.appendChild(boxDetail2);

  const contentBox2 = document.createElement("div");
  contentBox2.className = "content-box2";
  boxDetail2.appendChild(contentBox2);

  const fillContent2 = document.createElement("div");
  fillContent2.className = "fill-content2";
  contentBox2.appendChild(fillContent2);

  const eventDate2 = document.createElement("div");
  eventDate2.textContent = "Wed, 15 Nov, 4:00 PM";
  fillContent2.appendChild(eventDate2);

  const letterSpace2 = document.createElement("div");
  letterSpace2.className = "letter-space";
  letterSpace2.textContent = "Sights & Sounds Exhibition";
  fillContent2.appendChild(letterSpace2);

  const profileAvatar2 = document.createElement("div");
  profileAvatar2.className = "profile-avatar2";
  contentBox2.appendChild(profileAvatar2);

  const pictAvatar2 = [
    "./asset/img/avatar1.png",
    "./asset/img/avatar2.png",
    "./asset/img/avatar3.png",
    "./asset/img/avatar4.png",
  ];

  pictAvatar2.forEach((link2) => {
    const picture2 = document.createElement("div");
    const pict2 = document.createElement("img");
    pict2.setAttribute("src", link2);
    pict2.setAttribute("alt", "Attendant");
    picture2.appendChild(pict2);
    profileAvatar2.appendChild(picture2);
  });

  event2.onclick = () => {
    window.location.href = "./event.html"
  }
});
