class GeneralAutocompleteController {
  /**
   * Performs a case insensitive contains search on the given fields, optionally returning a
   * subset of the suggestion objects in pages.
   *
   * Example:
   *   http://localhost:9000/generalindex?q=title:biology,attribution:raven&fields=title,subtitle,edition&count=20&pageStart=<pageKey>
   *
   * @param query the search query.
   * @param fields the fields that should be returned.
   * @param count the max number of results to return.
   * @param pageStart parameter to indicate where to start the page.
   */
  static index(query, fields, count, pageStart) {
    // TODO: Implement this.
    return {
      status: {},
      result: [],
    };
  }
}

module.exports = GeneralAutocompleteController;
