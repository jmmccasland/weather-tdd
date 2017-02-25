import 'whatwg-fetch';

import getData from './get-data';
import createCurrentWeatherEl from './current-weather';

getData(36.1627, 86.7618)
  .then(({ currently }) => {
    const forcastEl = createCurrentWeatherEl(currently);

    document.body.appendChild(forecastEl);
  });
