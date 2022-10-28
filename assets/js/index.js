window.addEventListener("load", (event) => {
  getOrders();
  getAbout();
  getPostAbout();
  getOurCore();
  getOurFoot();
  getMarket();
  getHiring();
  getWhat();
  getFooter();
  getFooterAddress();
});

async function getOrders() {
  const snapshot = await db.collection("homepage").doc("main").get();

  document.getElementById("mainImgurl").src = snapshot.data().imgurl;
  document.getElementById("mainHeading").innerHTML = snapshot.data().heading;
  document.getElementById("mainSubheading").innerHTML =
    snapshot.data().subheading;
  document.getElementById("mainDescription").innerHTML =
    snapshot.data().description;
}

async function getAbout() {
  const aboutsnapshot = await db.collection("homepage").doc("aboutus").get();

  document.getElementById("aboutHeading").innerHTML =
    aboutsnapshot.data().heading;
  document.getElementById("aboutSubheading").innerHTML =
    aboutsnapshot.data().subheading;
  document.getElementById("aboutDescription").innerHTML =
    aboutsnapshot.data().description;
}

async function getPostAbout() {
  const postaboutsnapshot = await db
    .collection("homepage")
    .doc("postaboutus")
    .get();

  document.getElementById("postaboutheading1").innerHTML =
    postaboutsnapshot.data().heading1;
  document.getElementById("postaboutheading2").innerHTML =
    postaboutsnapshot.data().heading2;
  document.getElementById("postaboutheading3").innerHTML =
    postaboutsnapshot.data().heading3;
  document.getElementById("postaboutheading4").innerHTML =
    postaboutsnapshot.data().heading4;
  document.getElementById("postaboutsubheading1").innerHTML =
    postaboutsnapshot.data().subheading1;
  document.getElementById("postaboutsubheading2").innerHTML =
    postaboutsnapshot.data().subheading2;
  document.getElementById("postaboutsubheading3").innerHTML =
    postaboutsnapshot.data().subheading3;
  document.getElementById("postaboutsubheading4").innerHTML =
    postaboutsnapshot.data().subheading4;
}

async function getOurCore() {
  const ourcoresnapshot = await db.collection("homepage").doc("ourcore").get();

  document.getElementById("ourcoreheading").innerHTML =
    ourcoresnapshot.data().heading;
  document.getElementById("ourcoresubheading").innerHTML =
    ourcoresnapshot.data().subheading;
  document.getElementById("step1").innerHTML = ourcoresnapshot.data().step1;
  document.getElementById("step2").innerHTML = ourcoresnapshot.data().step2;
  document.getElementById("step3").innerHTML = ourcoresnapshot.data().step3;
  document.getElementById("step4").innerHTML = ourcoresnapshot.data().step4;
  document.getElementById("step5").innerHTML = ourcoresnapshot.data().step5;
}

async function getOurFoot() {
  const ourfootsnapshot = await db
    .collection("homepage")
    .doc("ourfootprint")
    .get();

  document.getElementById("countryimgurl1").src =
    ourfootsnapshot.data().imgurl1;
  document.getElementById("countryimgurl2").src =
    ourfootsnapshot.data().imgurl2;
  document.getElementById("countryimgurl3").src =
    ourfootsnapshot.data().imgurl3;
  document.getElementById("countryimgurl4").src =
    ourfootsnapshot.data().imgurl4;
  document.getElementById("countryimgurl5").src =
    ourfootsnapshot.data().imgurl5;

  document.getElementById("country1").innerHTML =
    ourfootsnapshot.data().country1;
  document.getElementById("country2").innerHTML =
    ourfootsnapshot.data().country2;

  document.getElementById("country3").innerHTML =
    ourfootsnapshot.data().country3;
  document.getElementById("country4").innerHTML =
    ourfootsnapshot.data().country4;

  document.getElementById("country5").innerHTML =
    ourfootsnapshot.data().country5;

  document.getElementById("ourfoothead").innerHTML =
    ourfootsnapshot.data().heading;
}

async function getMarket() {
  const marketsnapshot = await db.collection("homepage").doc("ourmarket").get();

  document.getElementById("marketimgurl").src = marketsnapshot.data().imgurl;
  document.getElementById("marketheading").innerHTML =
    marketsnapshot.data().heading;
}

async function getHiring() {
  const hiringsnapshot = await db.collection("homepage").doc("wehiring").get();

  document.getElementById("wearehiring").src = hiringsnapshot.data().imgurl;
  document.getElementById("hiringheading").innerHTML =
    hiringsnapshot.data().heading;
  document.getElementById("hiringdescription").innerHTML =
    hiringsnapshot.data().description;
}

async function getWhat() {
  const whatsnapshot = await db.collection("homepage").doc("whatwedo").get();

  document.getElementById("whatwedoimgurl1").src = whatsnapshot.data().imgurl1;
  document.getElementById("whatwedoimgurl2").src = whatsnapshot.data().imgurl2;
  document.getElementById("whatwedoimgurl3").src = whatsnapshot.data().imgurl3;
  document.getElementById("whatwedoimgurl4").src = whatsnapshot.data().imgurl4;

  document.getElementById("whatwedoheading").innerHTML =
    whatsnapshot.data().heading;
  document.getElementById("whatwedoheading1").innerHTML =
    whatsnapshot.data().heading1;
  document.getElementById("whatwedoheading2").innerHTML =
    whatsnapshot.data().heading2;
  document.getElementById("whatwedoheading3").innerHTML =
    whatsnapshot.data().heading3;
  document.getElementById("whatwedoheading4").innerHTML =
    whatsnapshot.data().heading4;

  document.getElementById("whatwedosubheading").innerHTML =
    whatsnapshot.data().subheading;
  document.getElementById("whatwedosubheading1").innerHTML =
    whatsnapshot.data().subheading1;
  document.getElementById("whatwedosubheading2").innerHTML =
    whatsnapshot.data().subheading2;
  document.getElementById("whatwedosubheading3").innerHTML =
    whatsnapshot.data().subheading3;
  document.getElementById("whatwedosubheading4").innerHTML =
    whatsnapshot.data().subheading4;
}
