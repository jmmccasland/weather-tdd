import 'whatwg-fetch';

import getData from './get-data';
import createCurrentWeatherEl from './current-weather';
import dailyList from './daily-list'

getData(36.1627, 86.7816)
  .then(({ currently, daily }) => {
    const forecastEl = createCurrentWeatherEl(currently);

    document.body.appendChild(forecastEl);

    dailyList(document.body, daily);
  });
