import { takeLatest, put } from 'redux-saga/effects';
import {
  GET_ALL_PEOPLE,
  PEOPLE_RECEIVED,
  PEOPLE_REQUEST_FAILED,
} from 'const';
import { v4 } from 'node-uuid';

const _apiBase = 'https://anapioficeandfire.com/api';

const _transformPerson = person => ({
  id: v4(),
  name: { value: person.name || person.aliases[0] },
  characterPicture: { value: '' },
  gender: { value: person.gender },
  born: { value: person.born || 'no' },
  culture: { value: person.culture || 'no' },
  playedBy: { value: person.playedBy[0] || 'no' },
});

function* getResource(url) {
  yield fetch(`${_apiBase}${url}`).then(response => response.json());
}

function* getAllPeople() {
  try {
    const people = yield getResource('/characters/').next().value;
    yield put({
      type: PEOPLE_RECEIVED,
      payload: {
        people: people.map(_transformPerson),
      },
    });
  } catch (error) {
    yield put({ type: PEOPLE_REQUEST_FAILED, error });
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_PEOPLE, getAllPeople);
}
