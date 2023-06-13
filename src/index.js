import './styles.css';
import _ from 'lodash';

const passwordInputs = document.querySelectorAll('#password_container input');
const passwordSpans = document.querySelectorAll('#password_container span');

const valueObject = {
  value1: '',
  value2: '',
};

passwordInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    valueObject[`value${index + 1}`] = input.value;
    console.log(valueObject);
    console.log(checkMatch());
    console.log(passwordSpans);
    if (checkMatch()) {
      passwordSpans[1].classList.remove('error');
      input.classList.remove('error');
    } else {
      passwordSpans[1].classList.add('error');
      input.classList.add('error');
    }

    if (checkLength()) {
      passwordSpans[0].classList.remove('error');
      input.classList.remove('error');
    } else {
      passwordSpans[0].classList.add('error');
      input.classList.add('error');
    }
  });

  const checkMatch = () => valueObject.value1 === valueObject.value2;

  const checkLength = () => valueObject.value1.length >= 8;
});
