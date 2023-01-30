(function () {

  const GOREST_PATH = 'https://gorest.co.in/public/v2/users',
    $checkForm = document.querySelector('.section-form__form');



  function validation() {

    function removeError(input) {
      const parent = input.parentNode;

      if (parent.classList.contains('error')) {
        parent.querySelector('.section-form__error-label').remove();
        parent.classList.remove('error');
      }
    }

    function createError(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement('span');

      errorLabel.classList.add('section-form__error-label');
      errorLabel.textContent = text;

      parent.classList.add('error');

      parent.append(errorLabel);
    }

    let result = true;

    const allInputs = document.querySelectorAll('.section-form__input');

    for (const input of allInputs) {

      removeError(input)

      if (input.dataset.minLength) {
        if (input.value.length < input.dataset.minLength) {
          removeError(input);
          createError(input, `Minimum aantal tekens': ${input.dataset.minLength}`);
          result = false;
        }
      }

      if (input.dataset.maxLength) {
        if (input.value.length > input.dataset.maxLength) {
          removeError(input);
          createError(input, `Maximum aantal karakters': ${input.dataset.maxLength}`);
          result = false;
        }
      }

      if (input.dataset.required == "true") {
        if (input.value == "") {
          removeError(input);
          createError(input, 'Het veld is niet ingevuld!');
          result = false;
        }
      }
    }
    return result;
  }

  function checkValidate() {

    $checkForm.addEventListener('submit', function (event) {
      event.preventDefault();

      if (validation(this) === true) {
        // alert('Форма проверена успешно!');
        createNewClient(event.target);
      }
    })
  }

  function modalForm() {
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#button-we').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.section-form').classList.add('open');
        checkValidate();
      })

      document.addEventListener('click', e => {
        const target = e.target
        if (target.closest('.section-form') && !target.closest('.section-form__form')) {
          document.querySelector('.section-form').classList.remove('open');
        }
      })
    })

    getClients();
  }

  modalForm();


  async function getClients() {

    // отправляем запрос на список всех клиентов

    const response = await fetch('https://gorest.co.in/public/v2/users', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 6ce9a4ddb5701c006c2c36ae44efee6da462836bbb5cf1d5c01c748eadf37cfc',
        'Content-Type': 'application/json',
      },
    });

    const getClientsList = await response.json();
    console.log(getClientsList);

    return getClientsList;
  }

  // async function delClient() {

  //   // удаляем

  //   const response = await fetch('https://gorest.co.in/public/v2/users/201031', {
  //     method: 'DELETE',
  //     headers: {
  //       Authorization: 'Bearer 6ce9a4ddb5701c006c2c36ae44efee6da462836bbb5cf1d5c01c748eadf37cfc',
  //       'Content-Type': 'application/json',
  //     },

  //   });
  // }



  // delClient();

  async function createNewClient(event) {

    // создание клиента на сервере

    const response = await fetch('https://gorest.co.in/public/v2/users', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer 6ce9a4ddb5701c006c2c36ae44efee6da462836bbb5cf1d5c01c748eadf37cfc',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: document.getElementById('form-name').value.trim(),
        email: document.getElementById('form-email').value.trim(),
        gender: 'male',
        status: 'active'
      }),
    })

    event.reset();
    document.querySelector('.section-form').classList.remove('open');

    const clientNew = await response.json();
    // })

    getClients();

  }

  getClients();

})()
