export default class ThroneService {
  _apiBase = 'https://anapioficeandfire.com/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const result = await res.json();
    return result;
  }
  getAllBooks = async () => {
    const res = await this.getResource('/books/');
    return res.map(this._transformPerson);
  }

  getBook = async (id) => {
    const res = await this.getResource(`/books/${id}/`);
    return res.map(this._transformBook);
  }

  getAllPeople = async () => {
    const res = await this.getResource('/characters/');
    return res.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/characters/${id}/`);
    return this._transformPerson(person);
  }

   getAllHouses = async () => {
     const res = await this.getResource('/houses/');
     return res.map(house => this._transformHouse(house));
   }

  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}/`);
    return this._transformHouse(house);
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  }

  _transformBook = book => ({
    name: book.name,
    isbn: book.isbn,
    id: this._extractId(book),
    authors: book.authors[0],
    numberOfPages: book.numberOfPages,
    publisher: book.publisher,
    country: book.country,
    mediaType: book.mediaType,
    released: book.released,
  })

  _transformHouse = house => ({
    id: this._extractId(house),
    name: house.name,
    region: house.region,
    coatOfArms: house.coatOfArms === '' ? 'no' : house.coatOfArms,
    seats: house.seats[0] === '' ? 'no' : house.seats,
  })

  _transformPerson = person => ({
    id: this._extractId(person),
    name: person.name,
    aliases: person.aliases,
    gender: person.gender,
    born: person.born,
    culture: person.culture,
    playedBy: person.playedBy,
  })
}
