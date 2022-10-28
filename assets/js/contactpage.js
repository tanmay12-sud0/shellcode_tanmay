window.addEventListener("load", (event) => {
  getFooter1();
  getFooterAddress1();
});

const suBtn = document.querySelector("#suBtn");
suBtn.onclick = () => {
  updateDoc();
};

async function getFooter1() {
  const footersnapshot1 = await db.collection("footer").doc("contact").get();

  document.getElementById("footmail1").innerHTML =
    '<i class="fa fa-envelope" style="margin-right: 10px;"></i>' +
    "&nbsp;" +
    footersnapshot1.data().mail;
  document.getElementById("footphone1").innerHTML =
    '<i class="fa fa-phone" style="margin-right: 10px;"></i>' +
    "&nbsp;" +
    footersnapshot1.data().phone;
}

async function getFooterAddress1() {
  const footeraddresssnapshot1 = await db
    .collection("footer")
    .doc("address")
    .get();

  document.getElementById("footaddress1").innerHTML =
    '<i class="fa fa-map-marker" style="margin-right: 10px;"></i>' +
    "&nbsp;" +
    footeraddresssnapshot1.data().address;
}

function updateDoc() {
  db.collection("contactleads")

    .add({
      name: document.getElementById("name").value,
      contact: document.getElementById("phone").value,
      mail: document.getElementById("mail").value,
      message: document.getElementById("msg").value,
    })
    .then(() => {
      alert("Application Submitted successfully !");
      location.reload();
    });
}
