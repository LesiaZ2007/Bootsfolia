const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');
let regExpName = /^[A-Za-z0-9_]{3,14}/;
let regExpMail = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}\b/i;
let regExpPass = /^[A-Za-z0-9_]{3,14}/;
let password = document.querySelector('#inputPass1');

let passwordConfirm = document.querySelector('#inputConfirmPass1');
const form = document.querySelector('form');
let formElements = document.querySelectorAll('input:not(input[type = checkbox])');
let errorDivs = document.querySelectorAll('.error');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function () {
        let tabId = item.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!item.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            })
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            })

            item.classList.add('active');
            currentTab.classList.add('active');
        }
    })
}

document.querySelector('.tabs__nav-btn:nth-child(2)').click();
//////////////////////////////

function submit() {
    form.alert('Form Submitted')
}
function validateElem(input) {
    if (input.name === 'username') {
        if (!regExpName.test(input.value) && input.value !== '') {
            input.nextElementSibling.textContent = 'Please enter a valid username';

            if ((input.value.length) < 3 || (input.value.length) > 14) {
                input.nextElementSibling.textContent = 'Please enter a username between 3 and 14 characters'
            }

            isValid = false
        } else {
            input.nextElementSibling.textContent = '';
            isValid = true;
        }
    }

    if (input.name === 'inputMail1') {
        if (!regExpMail.test(input.value) && input.value !== '') {
            input.nextElementSibling.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            input.nextElementSibling.textContent = '';
            isValid = true;
        }
    }

    if (input.name === 'inputPass1') {
        if (!regExpPass.test(input.value) && input.value !== '') {
            input.nextElementSibling.textContent = 'Please enter a valid password';
            isValid = false;
        } else {
            input.nextElementSibling.textContent = '';
            isValid = true;
        }
    }

    if (input.name === 'inputConfirmPass1') {
        if (password.value !== passwordConfirm.value && input.value !== '') {
            input.nextElementSibling.textContent = 'Passwords do not match';
            password.nextElementSibling.textContent = 'Passwords do not match';
            isValid = false;
        } else {
            input.nextElementSibling.textContent = '';
            password.nextElementSibling.textContent = '';
            isValid = true;
        }
    }
}

for (let input of formElements) {
    input.addEventListener('blur', () => {
        validateElem(input);
    })
};

form.addEventListener('submit', function(e) {
    e.preventDefault();

    for (let input of formElements) {
        if (input.value === '') {
            let errorDiv = input.nextElementSibling;
            errorDiv.textContent = 'Please enter something';
            isValid = false;
        }
        else {
            input.nextElementSibling.textContent = '';
            isValid = true;
        }
    }

    if (isValid) {
        if (form.querySelector('#check1').checked) {
            // submit();
            form.reset();
        } else {
            alert('Please Agree');
        }
    }
});

function dropdown() {
    document.getElementById("hidden__list").classList.toggle("show");
}