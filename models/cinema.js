const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getAllTitles = function () {
  const titles = this.films.map(film => film.title);
  return titles;
};

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.find(film => film.title === title);
  return result;
};
