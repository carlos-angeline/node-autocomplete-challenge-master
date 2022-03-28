const Autocomplete1 = require('./Autocomplete1');
const Suggestions = require('./Suggestions');

describe('Autocomplete1', () => {
  it('should perform a case sensitive contains search', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete1(data);

    const results = autocomplete.performSearch('biology');

    expect(results.length).toEqual(15);
    expect(results[0]).toMatchSnapshot();
  });
});
