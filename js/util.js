const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.zIndex = '100';
  alert.style.position = 'absolute';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '20px 30px';
  alert.style.fontSize = '30px';
  alert.style.fontWeight = 'bold';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = '#fce4e4';
  alert.style.border = '1px solid #fcc2c3';
  alert.style.color = '#cc0033';
  alert.textContent = message;
  document.body.append(alert);
  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};
export{ getRandomInteger, getRandomArrayElement, createIdGenerator, showAlert };
