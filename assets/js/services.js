window.addEventListener("DOMContentLoaded", (event) => {
  getOrders();
  getServ();
  getCus();
  getWhat();
  getCar();
});

async function getOrders() {
  const snapshot = await db.collection("servicespage").doc("main").get();

  document.getElementById(
    "mainservicesbg"
  ).style.backgroundImage = `linear-gradient(rgba(11, 45, 27, 0.53), rgba(11, 45, 27, 0.53)),url(${
    snapshot.data().imgurl
  })`;
  document.getElementById("servHead").innerHTML = snapshot.data().heading;
}

async function getServ() {
  const servsnapshot = await db
    .collection("servicespage")
    .doc("postmain")
    .get();

  document.getElementById("servLeft").src = servsnapshot.data().imgurl;
  document.getElementById("serviceheading").innerHTML =
    servsnapshot.data().heading;
  document.getElementById("servpara1").innerHTML = servsnapshot.data().para1;
  document.getElementById("servpara2").innerHTML = servsnapshot.data().para2;
  document.getElementById("servpara3").innerHTML = servsnapshot.data().para3;
}

async function getCus() {
  const cussnapshot = await db.collection("servicespage").doc("customer").get();

  document.getElementById("customerheading").innerHTML =
    cussnapshot.data().heading;
  document.getElementById("customersubheading").innerHTML =
    cussnapshot.data().subheading;
  document.getElementById("strat1").innerHTML = cussnapshot.data().heading1;
  document.getElementById("strat1desc").innerHTML = cussnapshot.data().para1;

  document.getElementById("strat2").innerHTML = cussnapshot.data().heading2;
  document.getElementById("strat2desc").innerHTML = cussnapshot.data().para2;

  document.getElementById("strat3").innerHTML = cussnapshot.data().heading3;
  document.getElementById("strat3desc").innerHTML = cussnapshot.data().para3;
}

async function getWhat() {
  const whatsnapshot = await db
    .collection("servicespage")
    .doc("whatmakes")
    .get();

  document.getElementById("whatheading").innerHTML =
    whatsnapshot.data().heading;
  document.getElementById("whatdesc").innerHTML =
    whatsnapshot.data().subheading;
}

function getCar() {
  db.collection("whatmakescarousel").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      $(".owl-carousel")
        .owlCarousel()
        .trigger("add.owl.carousel", [
          jQuery(
            `<div class="item" style="overflow:hidden">

              <div class="row">
              <div class="col" id="carId1" style="width: 50%; position: absolute;left:0;bottom: 10%;right: 0;">
                <img src='${
                  doc.data().imgurl
                }' style="width:50vw;height:60vh;object-fit: cover;background-position: center;border-radius:6px ;" alt="">
              </div>

            <div id="carId2"  style="background-color: #9BAEA1;width: 80%;height:55vh;margin-left:36% ;margin-top: 10%; ">
               <div class="col" style="margin-left:30%;padding:70px;color: #fff;">
                <h2  style="margin-bottom: 0;color:#fff">${
                  doc.data().heading
                }</h2>
                <p  style="width:50%;color:#fff;font-size:16px">${
                  doc.data().content
                }</p>

               </div>

               </div>
            </div>
          </div>

          `
          ),
        ])
        .trigger("refresh.owl.carousel");
    });
  });
}
