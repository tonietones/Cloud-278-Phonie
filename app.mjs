const mtn = ['803', '806', '703', '706', '813', '816', '810', '814', '903', '906']
const etisalat = ['909', '809', '818', '817', '908']
const glo = ['805', '807', '705', '815', '811', '905']
const airtel = ['701', '708', '802', '808', '812', '902','901', '704', '904']

const phone = document.getElementById('phone');
const username = document.getElementById('Username');
const button = document.getElementById('btn');
const form = document.getElementById('form');


function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
button.addEventListener('click', () => {
    form.reset();
    document.getElementById('carrier').style.display = "none";

})
phone.addEventListener("input", (event) => {
    validateInput()
})
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');}

const checkPrefix = phone => {
    var prefix = "" 
    if (phone.startsWith("+234")) {
        prefix = String(phone).slice(4, 7)
    } else if (phone.startsWith("0")){
        prefix = String(phone).slice(1,4)
    }

    console.log(phone.length);
    console.log({prefix, phone});

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
        document.getElementById('carrier').style.display = "none"
        return false
    }
    document.getElementById('carrier').src = imageSrc
    document.getElementById('carrier').style.display = "block"
    return true
}

const validateInput = () => {
    const phoneValue = phone.value.trim()
    console.log(phone.value);
    const usernameValue = username.value.trim();

    if (phoneValue === ''){
        setError(phone, 'Phone Number is required!!!')
        document.getElementById('carrier').style.display = "none"
    }
    else if (!checkPrefix(phoneValue)) {
        setError(phone, 'Phone number not valid!!!')
    } else {
        setSuccess(phone);
    }
        }



// /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/


// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //