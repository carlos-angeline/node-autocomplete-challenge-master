const GeneralAutocompleteController = require('./GeneralAutocompleteController');

describe('GeneralAutocompleteController', () => {
  it('should page the simple case', () => {
    const response = GeneralAutocompleteController.index('title:biology', null, 15);

    expect(response.result.length).toEqual(15);
    expect(response.status.moreResults).toEqual(true);

    // TODO: Add more validation for this test case.
  });

  it('should support a complex query', () => {
    const response = GeneralAutocompleteController.index(
      'title:biology,attribution:raven',
      null /* fields */,
      15,
    );

    expect(response.result.length).toEqual(1);
    expect(response.status.moreResults).toEqual(false);

    // TODO: Add more validation for this test case.
  });

  it('should return only the selected fields', () => {
    const response = GeneralAutocompleteController.index(
      'title:biology,attribution:raven',
      'publisher,price',
      15,
    );

    expect(response.result.length).toEqual(1);

    // TODO: Add more validation for this test case.
  });
});
