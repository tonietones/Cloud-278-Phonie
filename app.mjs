const mtn = ['0803', '0806', '0703', '0706', '0813', '0816', '0810', '0814', '0903', '0906']
const etisalat = ['0909', '0809', '0818', '0817', '0908']
const glo = ['0805', '0807', '0705', '0815', '0811', '0905']
const airtel = ['0701', '0708', '0802', '0808', '0812', '0902','0901', '0704', '0904']

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

    var prefix = String(phone).slice(0, 4)
    
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
    }else if (phoneValue.length < 11) {
        setError(phone, 'Phone number not valid!!!')
        document.getElementById('carrier').style.display = "none"
    }
    else if (!checkPrefix(phoneValue)) {
        setError(phone, 'Phone number not valid!!!')
    } else {
        setSuccess(phone);
    }

        }
// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //