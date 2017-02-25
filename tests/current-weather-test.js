import createCurrentWeatherEl from '../app/current-weather';
import testData from './test-data';

const currentWeather = testData.currently;

module('Current Weather', () => {
  test('It Exists', (assert) => {
    assert.ok(createCurrentWeatherEl);
    assert.equal(typeof createCurrentWeatherEl, 'function');
  });


  test('It Creates an Element', (assert) => {
    const resultingElement = createCurrentWeatherEl(currentWeather);

    assert.ok(resultingElement, 'It Should Return Something Please');
    assert.equal(resultingElement.tagName, 'DIV', 'It should return');
    assert.ok(resultingElement.classList.contains('forecast'), 'The element should have a class of .forecast');
  });

  test('It Has the Right Child Elements', (assert) => {
    const resultingElement = createCurrentWeatherEl(currentWeather);
    assert.ok(resultingElement.querySelector('p.forecast__summary'),
  'There should be a child element for summary');
    assert.ok(resultingElement.querySelector('p.forecast__summary').innerText, 'Drizzle');

    assert.ok(resultingElement.querySelector('p.forecast__humidity'),
  'There should be a child element for humidity');
    assert.ok(resultingElement.querySelector('p.forecast__humidity').innerText, '90%',
  'The humidity should be rounded and in percent not decimals');

    assert.ok(resultingElement.querySelector('p.forecast__temp'),
  'There should be a child element for temp');
    assert.ok(resultingElement.querySelector('p.forecast__temp').innerText, '54');
  });
});
