import 'whatwg-fetch';

import getData from './get-data';
import createCurrentWeatherEl from './current-weather';

getData(36.1627, 86.7816)
  .then(({ currently }) => {
    const forecastEl = createCurrentWeatherEl(currently);

    document.body.appendChild(forecastEl);
  })
