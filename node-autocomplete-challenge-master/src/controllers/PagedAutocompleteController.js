const Autocomplete = require('../autocomplete/Autocomplete3');
const Suggestions = require('../autocomplete/Suggestions');

class PagedAutocompleteController {
  /**
   * Performs a case insensitive contains search on book titles, returning
   * paged results.
   *
   * For the paging technique use any technique you would like. Feel free to use whatever kind of
   * pageStart you think makes sense. The requirements on paging is that:
   * - When there are more results beyond the current page the response contains
   *   "moreResults": true in the status object of the response. If there are no
   *   more results, "moreResults" should be false.
   * - When there are more results beyond the current page the response contains
   *   a paging key in the "pageNext" field of the "status" object of the
   *   response. That paging key can then be passed as the pageStart url
   *   parameter to get the next page of results.
   *
   * Example:
   *   http://localhost:9000/pagedindex?searchTerm=biology&count=20&pageStart=<pageKey>
   *
   * @param searchTerm the term to search for.
   * @param count the max number of results to return.
   * @param pageStart parameter to indicate where to start the page.
   */
  static index(searchTerm, count, pageStart) {
    // Set default values.
    count = Number.isInteger( count ) ? count : 5;
    pageStart = Number.isInteger( pageStart ) ? pageStart : 0;

    // Do the query.
    const data = Suggestions.load();
    const autocomplete = new Autocomplete(data);

    let results = autocomplete.performSearch(searchTerm);

    const numOfResults = results.length;

    // Get where we will cut the array.
    const initialIndex = pageStart * count;

    // Check if we have more results to this query.
    const hasMoreResults = initialIndex + count < numOfResults;

    // Slice results.
    const pagedResults = results.slice(initialIndex, initialIndex + count);

    // Calculate pageNext.
    const pageNext = initialIndex + count < numOfResults ? pageStart + 1 : false;

    return {
      status: {
        moreResults: hasMoreResults,
        pageNext: pageNext,
      },
      result: pagedResults,
    };
  }
}

module.exports = PagedAutocompleteController;
