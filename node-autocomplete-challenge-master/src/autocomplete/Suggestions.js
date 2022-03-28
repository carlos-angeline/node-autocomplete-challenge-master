const fs = require('fs');

class Suggestions {
  static load() {
    return JSON.parse(fs.readFileSync('data/suggestions.json', 'UTF-8')).data;
  }
}

module.exports = Suggestions;
