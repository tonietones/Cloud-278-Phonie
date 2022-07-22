let mtn = ['0803', '0806', '0703', '0706', '0813', '0816', '0810', '0814', '0903']
let etisalat = ['0909', '0809', '0818', '0817', '0908']
let glo = ['0805', '0807', '0705', '0815', '0811', '0905']
let airtel = ['0701', '0708', '0802', '0808', '0812', '0902', '0901']

let phone = document.getElementById('phone');
let submit = document.getElementById('submit');



function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  phone.addEventListener("change", (event) => {
    console.log(event.target.value);
    checkPrefix()
  })
};

function checkPrefix() {
  var prefix = String(phone.value).slice(0, 4)
  console.log({ prefix });

  var imageSrc = ""
  // console.log( document.getElementById('carrier'));
  if (mtn.includes(prefix)) {
    imageSrc = "./mtn.svg"
  } else if (etisalat.includes(prefix)) {
    imageSrc = "./etisalat.svg"
  } else if (glo.includes(prefix)) {
    imageSrc = "./glo.png"
  } else if (airtel.includes(prefix)) {
    imageSrc = "./airtel.svg"
  } else {
    console.log("not a number");
  }

  document.getElementById('carrier').src = imageSrc
  document.getElementById('carrier').style.display = "block"
}


// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //