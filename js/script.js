function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

/* === меню === */ 
let menuBurger = document.querySelector('.menu__burger'),
    menuClose = document.querySelector('.menu__close');

function menuClick() {
    menuBurger.classList.toggle("active");
    menuClose.classList.toggle("active");
}

menuBurger.addEventListener('click', menuClick, false);
menuClose.addEventListener('click', menuClick, false);

/* === навигация, чтобы с меню переходило по ссылкам === */
let navLink = document.querySelectorAll('.menu__link');

navLink.forEach(function(node) {
    node.addEventListener('click', menuClick, false);
});

// var elem = $('body > header');
// var doc = $(document);
// function scrolled() {
//    var threshold = doc.scrollTop() > 650;
//    elem.toggleClass('scrolled', threshold);
//    }
// $(window).on({ scroll: scrolled });;
let btnForm = document.querySelectorAll('.form__button, .popup__close'),
    openForm = document.querySelector('.popup');

let handleClick = function() {
    openForm && openForm.classList.toggle('active')
};

btnForm.forEach(function(node) {
    node.addEventListener('click', handleClick, false)
});
;
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});;

/* fixed menu */
var elem = $('body > header');
var doc = $(document);
function scrolled() {
   var threshold = doc.scrollTop() > 100;
   elem.toggleClass('scrolled', threshold);
   }
$(window).on({ scroll: scrolled });



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

