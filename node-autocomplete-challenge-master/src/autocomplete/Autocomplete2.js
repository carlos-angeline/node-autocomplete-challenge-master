class Autocomplete2 {
  constructor(suggestions) {
    this.suggestions = suggestions;
  }

  /**
   * Searches through the possible suggestions, creating an array
   * of matches for any books whose title matches the specified search term.
   *
   * This should perform a case sensitive prefix search.
   */
  performSearch(searchTerm) {
    return this.suggestions.filter((book) => book.title.startsWith(searchTerm));
  }
}

module.exports = Autocomplete2;
