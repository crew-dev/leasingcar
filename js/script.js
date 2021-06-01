var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var phoneInput = document.querySelector("#phone");
phoneInput.addEventListener("keydown", function (event) {
  if (
    !(
      event.key == "ArrowLeft" ||
      event.key == "ArrowRight" ||
      event.key == "Backspace" ||
      event.key == "Tab"
    )
  ) {
    event.preventDefault();
  }
  var mask = "+7 (111) 111-11-11"; // Задаем маску
  if (/[0-9\+\ \-\(\)]/.test(event.key)) {
    // Здесь начинаем сравнивать this.value и mask
    // к примеру опять же
    var currentString = this.value;
    var currentLength = currentString.length;
    if (/[0-9]/.test(event.key)) {
      if (mask[currentLength] == "1") {
        this.value = currentString + event.key;
      } else {
        for (var i = currentLength; i < mask.length; i++) {
          if (mask[i] == "1") {
            this.value = currentString + event.key;
            break;
          }
          currentString += mask[i];
        }
      }
    }
  }
});

const cta = document.querySelector(".welcome__button");

const scrollTo = (element) => {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
};
const calculator = document.querySelector("#calculator");

cta.addEventListener("click", (event) => {
  event.preventDefault();
  scrollTo(calculator);
});

const sendRequestModal = document.querySelector(".button__service");
console.log(sendRequestModal);
const modal = document.querySelector(".modal");
sendRequestModal.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "flex";
});

const closeModalImg = document.querySelector(".closeImg");
const closeModalText = document.querySelector("#closeModalButton");
const close = (closeImg, element, closeText) => {
  closeImg.addEventListener("click", (event) => {
    event.preventDefault();
    element.style.display = "none";
  });
  closeText.addEventListener("click", (event) => {
    event.preventDefault();
    element.style.display = "none";
  });
};

const outcomeMoney = document.querySelector("#carprice");
const calculatorInputMoney = document.querySelector("#money");
calculatorInputMoney.addEventListener("input", () => {
  outcomeMoney.value = calculatorInputMoney.value + " P";
});

const outcomeFirstInstallment = document.querySelector("#first_installment");
const calculatorInputInstallment = document.querySelector("#installment");
calculatorInputInstallment.addEventListener("input", () => {
  outcomeFirstInstallment.value = calculatorInputInstallment.value + "%";
});

const outcomeTermContract = document.querySelector("#outcome_term_contract");
const calculatorInputTerm = document.querySelector("#term_contract_input");
calculatorInputTerm.addEventListener("input", () => {
  outcomeTermContract.value = calculatorInputTerm.value + " месяцев";
});

