import dailyList from '../app/daily-list';
import data from './test-data';
const forecast = data.daily;

module('Daily List', () => {
  test('It can add items for a list of daily forecasts', (assert) => {
    const ul = document.createElement('ul');

    dailyList(ul, forecast);

    assert.equal(ul.children.length, forecast.data.length);
  });
});
