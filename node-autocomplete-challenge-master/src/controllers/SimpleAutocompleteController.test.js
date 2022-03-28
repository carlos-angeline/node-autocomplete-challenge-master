const SimpleAutocompleteController = require('./SimpleAutocompleteController');

describe('SimpleAutocompleteController', () => {
  it('should return all results from suggestions', () => {
    const response = SimpleAutocompleteController.index('biology');

    expect(Array.isArray(response.result)).toBe(true);
    expect(response.result.length).toEqual(29);
    expect(response.result).toMatchSnapshot();
  });
});
