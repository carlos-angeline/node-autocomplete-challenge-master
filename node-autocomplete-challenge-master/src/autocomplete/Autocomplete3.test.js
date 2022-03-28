const Autocomplete3 = require('./Autocomplete3');
const Suggestions = require('./Suggestions');

describe('Autocomplete3', () => {
  it('should perform a case insensitive contains search', () => {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete3(data);

    const results = autocomplete.performSearch('BIOLOGY');

    expect(results.length).toEqual(29);
    expect(results[1]).toMatchSnapshot();
    expect(results[3]).toMatchSnapshot();
  });
});
