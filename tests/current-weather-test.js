import createCurrentWeatherEl from '../app/current-weather';
import testData from './test-data';

const currentWeather = testData.currently;

module('Current Weather', () => {
  test('It exists', (assert) => {
    assert.ok(createCurrentWeatherEl);
    assert.equal(typeof createCurrentWeatherEl, 'function');
  });

  test('It Creates an Element', (assert) => {
    const resultingElement = createCurrentWeatherEl(currentWeather);

    // assert.ok(resultingElement, 'It should return something please!');
    assert.equal(resultingElement.tagName, 'DIV', 'It should return a div element');
    assert.ok(resultingElement.classList.contains('forecast'),
      'The element should have a class "forecast"');
  });

  test('it has the right child elements', (assert) => {
    const resultingElement = createCurrentWeatherEl(currentWeather);

    assert.ok(resultingElement.querySelector('p.forecast__summary'),
      'There should be a child element for summary');
    assert.equal(resultingElement.querySelector('p.forecast__summary').innerText, 'Drizzle');

    assert.ok(resultingElement.querySelector('p.forecast__humidity'),
      'There should be a child element for humidity');
    assert.equal(resultingElement.querySelector('p.forecast__humidity').innerText, '90%',
      'The humidity should be rounded and put in percent not decimals');

    assert.ok(resultingElement.querySelector('p.forecast__temp'),
      'There should be a child element for temp');
    assert.equal(resultingElement.querySelector('p.forecast__temp').innerText, '54ºF');
  });
});
