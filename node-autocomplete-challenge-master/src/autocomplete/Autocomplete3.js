class Autocomplete3 {
  constructor(suggestions) {
    this.suggestions = suggestions;
  }

  /**
   * Searches through the possible suggestions, creating an array
   * of matches for any books whose title matches the specified search term.
   *
   * This should perform a case insensitive contains search and sort the
   * results by title.
   */
  performSearch(searchTerm) {
    // All terms to lowercase in order to get insensitive search.
    searchTerm = searchTerm.toLowerCase();

    return this.suggestions
    .filter((book) => {
      const bookTitle = book.title.toLowerCase();

      return bookTitle.includes(searchTerm);
    })
    .sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
  }
}

module.exports = Autocomplete3;
