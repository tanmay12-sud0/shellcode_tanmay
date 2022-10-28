window.addEventListener("load", (event) => {
  getOrders();
  getAbout();
  getPostAbout();
  getMission();
  getLeader();
  getCar();
  getlifeat();
  // getWhat();
  // getFooter();
  // getFooterAddress();
});

async function getOrders() {
  const snapshot = await db.collection("aboutpage").doc("main").get();

  document.getElementById("mainImgurl").src = snapshot.data().imgurl;
  document.getElementById("mainHeading").innerHTML = snapshot.data().heading;

  document.getElementById("mainDescription").innerHTML =
    snapshot.data().description;
}

async function getAbout() {
  const aboutsnapshot = await db.collection("aboutpage").doc("postmain").get();

  document.getElementById("aboutDescription").innerHTML =
    aboutsnapshot.data().description;
}

async function getPostAbout() {
  const postaboutsnapshot = await db
    .collection("aboutpage")
    .doc("ourculture")
    .get();

  document.getElementById("ourcultureheading").innerHTML =
    postaboutsnapshot.data().heading;
  document.getElementById("ourculturedescription").innerHTML =
    postaboutsnapshot.data().description;
  document.getElementById("cultimg").src = postaboutsnapshot.data().imgurl;
}

async function getMission() {
  const footersnapshot = await db
    .collection("aboutpage")
    .doc("missonandvission")
    .get();

  document.getElementById("missionheading").innerHTML =
    footersnapshot.data().missionheading +
    "&nbsp;" +
    '<img src="assets/images/mission.png" width="41" height="41" alt="">';

  document.getElementById("missiondescription").innerHTML =
    footersnapshot.data().missiondescription;

  document.getElementById("visionheading").innerHTML =
    footersnapshot.data().vissionheading +
    "&nbsp;" +
    '<img src="assets/images/vision.png" width="41" height="41" alt="">';

  document.getElementById("visiondescription").innerHTML =
    footersnapshot.data().vissiondescription;
}

async function getLeader() {
  const leadersnapshot = await db
    .collection("aboutpage")
    .doc("ourleadership")
    .get();

  document.getElementById("ourleadershipheading").innerHTML =
    leadersnapshot.data().heading;

  document.getElementById("ourleadershipname").innerHTML =
    leadersnapshot.data().name;

  document.getElementById("ourleadershipdesignation").innerHTML =
    leadersnapshot.data().designation;

  document.getElementById("ourleadershipimg").src =
    leadersnapshot.data().imgurl;
}

async function getlifeat() {
  const lifeatsnapshot = await db.collection("aboutpage").doc("lifeat").get();

  document.getElementById("lifeat").innerHTML = lifeatsnapshot.data().heading;

  document.getElementById("paragaph").innerHTML =
    lifeatsnapshot.data().descrption;
}

async function getCar() {
  await db.collection("aboutslider").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      swiper.appendSlide(`<div class="swiper-slide"><div class="item__third" style="display: flex;justify-content:center">
     <img class="swipsliimg" src="${
       doc.data().imgurl
     }" style="width:423px; height:267px;text-align: center;object-fit: cover;"  alt=""/>
   </div>
 </div>`);
    });
  });
}
