const Autocomplete2 = require('./Autocomplete2');
const Suggestions = require('./Suggestions');

describe('Autocomplete2', () => {
  it('should perform a case sensitive prefix search', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete2(data);

    const results = autocomplete.performSearch('Biology');

    expect(results.length).toEqual(6);
    expect(results[0]).toMatchSnapshot();
    expect(results[4]).toMatchSnapshot();
  });
});
