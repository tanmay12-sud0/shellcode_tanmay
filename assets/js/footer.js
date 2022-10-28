window.addEventListener("load", (event) => {
  getFooter();
  getFooterAddress();
});

async function getFooter() {
  const footersnapshot = await db.collection("footer").doc("contact").get();

  document.getElementById("footmail").innerHTML =
    '<i class="fa fa-envelope" style="margin-right: 10px;"></i>' +
    "&nbsp;" +
    footersnapshot.data().mail;
  document.getElementById("footphone").innerHTML =
    '<i class="fa fa-phone" style="margin-right: 10px;"></i>' +
    "&nbsp;" +
    footersnapshot.data().phone;
}

async function getFooterAddress() {
  const footeraddresssnapshot = await db
    .collection("footer")
    .doc("address")
    .get();

  document.getElementById("footaddress").innerHTML =
    '<i class="fa fa-map-marker" style="margin-right: 10px;"></i>' +
    "&nbsp;" +
    footeraddresssnapshot.data().address;
}
