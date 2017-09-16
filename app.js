import random from './fair-random.js';

const print = text =>
  (document.getElementById('output').innerText = text);

const button = document.getElementById('generator');
const min = document.getElementById('min');
const max = document.getElementById('max');

button.addEventListener('click', () => {
  print('calculating…');
  setTimeout(
    () => print(random(min.value, max.value)),
    500
  );
});
