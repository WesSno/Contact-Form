const fName = document.getElementById("f-name");
const lName = document.getElementById("l-name");
const textBox = document.getElementById("message");
const radioButns = document.querySelectorAll("input[name='enquiry']");
const consent = document.getElementById("consent");
const submitBtn = document.getElementById("submit");
const errMsg = document.querySelectorAll(".err-message");
const email = document.getElementById("email");

function emptyFields() {
  let isValid = true;

  if (fName.value.trim() === "") {
    fName.classList.add("invalid");
    errMsg[0].classList.add("display");
    isValid = false;
  } else {
    fName.classList.remove("invalid");
    errMsg[0].classList.remove("display");
  }

  if (lName.value.trim() === "") {
    lName.classList.add("invalid");
    errMsg[1].classList.add("display");
    isValid = false;
  } else {
    lName.classList.remove("invalid");
    errMsg[1].classList.remove("display");
  }

  if (textBox.value.trim() === "") {
    textBox.classList.add("invalid");
    errMsg[4].classList.add("display");
    isValid = false;
  } else {
    textBox.classList.remove("invalid");
    errMsg[4].classList.remove("display");
  }

  let isRadioSelected = Array.from(radioButns).some(
    (radioButtton) => radioButtton.checked
  );

  if (!isRadioSelected) {
    document.querySelector(".query-type .err-message").style.display = "block";
    isValid = false;
  } else {
    document.querySelector(".query-type .err-message").style.display = "none";
  }

  if (!consent.checked) {
    errMsg[5].classList.add("invalid");
    errMsg[5].classList.add("display");
  } else {
    errMsg[5].classList.remove("invalid");
    errMsg[5].classList.remove("display");
  }

  return isValid;
}

function validateEmail() {
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailRegex.test(email.value.trim())) {
    email.classList.add("invalid");
    errMsg[2].classList.add("display");
    return false;
  } else {
    email.classList.remove("invalid");
    errMsg[2].classList.remove("display");
    return true;
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const isFormValid = emptyFields();
  const isEmailValid = validateEmail();

  if (isFormValid && isEmailValid) {
    document.getElementById("successMessage").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("successMessage").classList.add("hidden");
      document.getElementById("contact-form").reset();
    }, 3000);
  }
});
