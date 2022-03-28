const server = require('server');

const SimpleAutocompleteController = require('./controllers/SimpleAutocompleteController.js');
const GeneralAutocompleteController = require('./controllers/GeneralAutocompleteController.js');
const PagedAutocompleteController = require('./controllers/PagedAutocompleteController.js');

const { get, post } = server.router;
const { json, render } = server.reply;

server({ port: 9000 }, [
  get('/', () => render('index.html')),
  get('/index', ({ query }) => json(SimpleAutocompleteController.index(query.searchTerm || null))),
  get('/pagedindex', ({ query }) => json(PagedAutocompleteController.index(
    query.searchTerm || null,
    query.count ? parseInt(query.count, 10) : 15,
    query.pageStart || null,
  ))),
  get('/generalindex', ({ query }) => json(GeneralAutocompleteController.index(
    query.q || null,
    query.fields || null,
    query.count ? parseInt(query.count, 10) : 15,
    query.pageStart || null,
  ))),
]);

console.log('Challenge server is listening on http://localhost:9000');
