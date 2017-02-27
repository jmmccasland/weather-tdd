import dailyForecastElCreator from  './daily-weather';

export default function (parentEl, forecast) {
  const arr = forecast.data;

  arr.forEach((daily) => {
    const childEl = dailyForecastElCreator(daily);

    parentEl.appendChild(childEl);
  });
}
