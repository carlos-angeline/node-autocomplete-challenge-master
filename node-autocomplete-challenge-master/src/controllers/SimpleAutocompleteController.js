const Autocomplete = require('../autocomplete/Autocomplete3');
const Suggestions = require('../autocomplete/Suggestions');

class SimpleAutocompleteController {
  /**
   * Performs a case insensitive contains search on book titles.
   *
   * Example:
   *   http://localhost:9000/index?searchTerm=biology
   *
   * @param searchTerm the term to search for.
   */
  static index(searchTerm) {
    const data = Suggestions.load();
    const autocomplete = new Autocomplete(data);

    const results = autocomplete.performSearch(searchTerm);

    return {
      result: results,
    };
  }
}

module.exports = SimpleAutocompleteController;
