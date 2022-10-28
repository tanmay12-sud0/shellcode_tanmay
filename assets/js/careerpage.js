window.addEventListener("DOMContentLoaded", (event) => {
  getOrders();
  getPost();
  getCar();
});

var ismodal = null;
function editCoupon(id) {
  console.log(id);
  if (ismodal !== null) {
    ismodal.remove();
  }
  ismodal = document.createElement("div");

  ismodal.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Please Enter the following details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div>
  
          
                            <form>
                    <div class="form-group row">
                        <label for="name" class="col-md-6 col-form-label">Your Name:</label>
                        <div class="col-md-6">
                       
                        <input type="text" class="form-control" id="name" placeholder="Enter Your Name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="contact" class="col-md-6 col-form-label">Contact Number:</label>
                        <div class="col-md-6">
                        <input type="text" class="form-control" id="contactNo" placeholder="+91**********">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="contact" class="col-md-6 col-form-label">Email:</label>
                        <div class="col-md-6">
                        <input type="text" class="form-control" id="email" placeholder="Enter Email Id">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="contact" class="col-md-6 col-form-label">Location:</label>
                        <div class="col-md-6">
                        <input type="text" class="form-control" id="location" placeholder="Enter Location">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="contact" class="col-md-6 col-form-label">Current CTC:</label>
                        <div class="col-md-6">
                        <input type="text" class="form-control" id="curctc" placeholder="Enter Current CTC">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="contact" class="col-md-6 col-form-label">Expected CTC:</label>
                        <div class="col-md-6">
                        <input type="text" class="form-control" id="expectctc" placeholder="Enter Expected CTC">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="contact" class="col-md-6 col-form-label">Notice Period(Days):</label>
                        <div class="col-md-6">
                        <input type="text" class="form-control" id="notice" placeholder="Enter Notice Period">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="contact" class="col-md-6 col-form-label">Upload Resume/Cv:</label>
                        <div class="col-md-6">
                        <input type="file" class="form-control" id="resume">
                        </div>
                    </div>
                    </form>
                    <div class="row" style="display:flex;justify-content:center">
                    <button type="button w-10" class="btn btn-success btn-icon-text" id="editcbtn"  style="background-color:#0b2d1c" >
                                                                     
                      Apply
                    </button>
                    </div>
                    
                 
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             
          </div>
        </div>
      </div>
    </div>`;

  //function to update the existing data
  ismodal.querySelector("#editcbtn").onclick = (e) => {
    e.preventDefault();

    let editName = ismodal.querySelector("#name").value;
    let editContact = ismodal.querySelector("#contactNo").value;

    let editEmail = ismodal.querySelector("#email").value;
    let editLocation = ismodal.querySelector("#location").value;

    let editCurctc = ismodal.querySelector("#curctc").value;
    let editExpectctc = ismodal.querySelector("#expectctc").value;

    let editNotice = ismodal.querySelector("#notice").value;
    let resumeFile = ismodal.querySelector("#resume").files[0];
    const date = new Date().getTime();

    let fiename = date.toString();

    if (resumeFile != null) {
      const storage = firebase
        .storage()
        .ref("resumes/" + resumeFile.name + fiename);
      const task = storage.put(resumeFile);
      // const ref = firebase.storage().ref(imageUrl.name);
      task.on(
        "state_change",
        function progress(snap) {
          console.log((snap.bytesTransferred / snap.totalBytes) * 100);
        },
        function error(err) {
          console.log(err);
        },
        function completed() {
          storage.getDownloadURL().then((url) => {
            updateDoc(url);
          });
        }
      );
    } else {
      alert("Please Fill all the required fields/Upload your resume ");
    }

    function updateDoc(url) {
      db.collection("applicants")

        .add({
          name: editName,
          contact: editContact,
          mail: editEmail,
          location: editLocation,
          currentctc: editCurctc,
          expectedctc: editExpectctc,
          notice: editNotice,
          file: url,
        })
        .then(() => {
          alert("Application Submitted successfully !");
        });
    }
  };

  //ismodal.querySelector("#deletedoc").onclick = (e) => {
  // db.collection("Coupons")
  //   .doc(doc.id)
  //   .delete()
  //   .then(() => {
  //     alert("Coupon Deleted Successfully");
  //   })
  //   .catch((err) => {
  //     alert(err);
  //     console.log(err);
  //   });
  //   };

  document.body.append(ismodal);
  var modalshow = new bootstrap.Modal(ismodal.querySelector(".modal"));
  modalshow.show();
}

async function getOrders() {
  const ordsnapshot = await db.collection("careerpage").doc("main").get();

  document.getElementById(
    "careersMain"
  ).style.backgroundImage = `linear-gradient(rgba(11, 45, 27, 0.53), rgba(11, 45, 27, 0.53)),url(${
    ordsnapshot.data().imgurl
  })`;
  document.getElementById("mainheading").innerHTML = ordsnapshot.data().heading;
  document.getElementById("mainsubheading").innerHTML =
    ordsnapshot.data().subheading;
}
// background-image: linear-gradient(rgba(11, 45, 27, 0.53), rgba(11, 45, 27, 0.53)),url(/assets/images/careermain.png);

async function getPost() {
  const postsnapshot = await db.collection("careerpage").doc("postmain").get();
  document.getElementById("postcareermain").innerHTML =
    postsnapshot.data().content;
}

function getCar() {
  db.collection("careerjobs").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      document.getElementById("jobopens").insertAdjacentHTML(
        "afterend",
        `<div class="col" itemid=${doc.id} id="openings">
        <div class="row">
          <p style="font-weight:bold">Designation: &nbsp;</p>
          <p id="designation" style="color:#808080">${
            doc.data().designation
          } </p>
        </div>
        <div class="row">
          <p style="font-weight:bold">Department: &nbsp;</p>
          <p id="department" >${doc.data().department}</p>
        </div>
        <div class="row">
          <p style="font-weight:bold">Location: &nbsp;</p>
          <p id="location" >${doc.data().location}</p>
        </div>
        <div class="row">
          <p style="font-weight:bold">Shift: &nbsp;</p>
          <p id="shift" >${doc.data().shift}</p>
        </div>
        <div class="row">
          <p style="font-weight:bold">Qualification: &nbsp;</p>
          <p id="qualification" >${doc.data().qualification}</p>
        </div>
        <div class="row">
          <p style="font-weight:bold">Experience: &nbsp;</p>
          <p id="experience" >${doc.data().experience}
          </p>
        </div>
        <div class="row">
          <p style="font-weight:bold">Salary: &nbsp;</p>
          <p id="salary" >${doc.data().salary}
          </p>
        </div>

  
      <div class="row">
        <button id="apply" itemid=${doc.id} onClick="editCoupon()"
          
         class="btn btn-primary" style="background-color:#0b2d1c;margin-top: 20px;" >Apply Now</buttton>
      </div>
      
      
     
    
    </div>`
      );
    });
  });
}
