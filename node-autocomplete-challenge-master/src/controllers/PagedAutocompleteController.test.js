const PagedAutocompleteController = require('./PagedAutocompleteController');

describe('PagedAutocompleteController', () => {
  it('should return the first page of suggestions', () => {
    const response = PagedAutocompleteController.index('biology', 15);

    expect(response.result.length).toEqual(15);

    expect(response.status.moreResults).toEqual(true);
    expect(response.status.pageNext).toEqual(1);
  });

  it('should indicate the next page of suggestions', () => {
    const response = PagedAutocompleteController.index('biology', 15);

    expect(response.status.moreResults).toEqual(true);
    expect(response.status.pageNext).toEqual(1);
  });

  it('should return the second page of suggestions', () => {
    const response = PagedAutocompleteController.index(
      'biology',
      15,
      1
    );

    expect(response.result.length).toEqual(14);
    expect(response.status.moreResults).toEqual(false);
    expect(response.status.pageNext).toEqual(false);
  });
});
