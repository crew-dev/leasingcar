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

/* === изменение при скролле === */
var elem = $('body > header');
var doc = $(document);
function scrolled() {
   var threshold = doc.scrollTop() > 100;
   elem.toggleClass('scrolled', threshold);
   }
$(window).on({ scroll: scrolled });;
let acc = document.getElementsByClassName("qa__current");
let i;

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
};
// форма
let btnForm = document.querySelectorAll('.form__button, .popup__close'),
    openForm = document.querySelector('.popup');

let formClick = function() {
    openForm && openForm.classList.toggle('active')
};

btnForm.forEach(function(node) {
    node.addEventListener('click', formClick, false)
});

// политика
let btnModal = document.querySelectorAll('.modal__button, .modal__close'),
    openModal = document.querySelector('.modal');

let modalClick = function() {
    openModal && openModal.classList.toggle('active')
};

btnModal.forEach(function(node) {
    node.addEventListener('click', modalClick, false)
});
;
/* ========== валидация номера телефона ========== */
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

});

/* ========== валидация ========== */
function validateForms(form, handle) {
    $(form).each(function(){$(this).validate({
            rules: {
                name: "required",
                tel: "required",
                // checkbox: "required"
            },
            messages: {
                name: "Пожалуйста, введите ваше Имя",
                tel: "Пожалуйста, введите ваш номер телефона",
                // checkbox: ""
            },
            submitHandler: handle
        });
    });
}
validateForms('form', function(form) {
    $.ajax({
        // отдаем данные серверу
        type: 'POST',
        // какой обработчик будет обрабатывать операцию
        url: '/mailer/smart.php',
        // данные которые отправляем на сервер
        data: $(form).serialize()
    }).done(function(response) {
        // чистим данные после отправки
        $(form).find('input').val("");
        alert(response.message);
        // обновняем форму
        $(form).trigger('reset');
    });
});
;

