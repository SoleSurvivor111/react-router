export default class ThroneService {
  _apiBase = 'https://anapioficeandfire.com/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const result = await res.json();
    return result;
  }

  async getAllPeople() {
    const res = await this.getResource('/characters/');
    console.log(res, 'getAllPeople');
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/characters/${id}/`);
    return this._transformPerson(person);
  }

  async getAllHouses() {
    const res = await this.getResource('/houses/');
    return res.map(house => this._transformHouse(house));
  }

  async getHouse(id) {
    const house = await this.getResource(`/houses/${id}/`);
    return this._transformHouse(house);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  }

  _transformHouse(house) {
    return {
      id: this._extractId(house),
      name: house.name,
      region: house.region,
      coatOfArms: house.coatOfArms === '' ? 'no' : house.coatOfArms,
      seats: house.seats[0] === '' ? 'no' : house.seats,

    };
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      born: person.born,
      culture: person.culture,
    };
  }
}
