export default function (weather) {
  const el = document.createElement('div');
  el.classList.add('daily');

  el.innerHTML = `
  <p class='daily__humidity'></p>
  <p class='daily__summary'></p>
  <p class='daily__temp'></p>
  `;

  el.querySelector('.daily__summary').innerHTML = weather.summary;
  el.querySelector('.daily__humidity').innerHTML = Math.round(weather.humidity * 100) + '%';
  el.querySelector('.daily__temp').innerHTML = Math.round(weather.temperature) + '°F';

  return el;
}
