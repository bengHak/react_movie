import { delay } from 'redux-saga'
import { put, call, all} from 'redux-saga/effects'
import { list_add } from "./actions";
require('dotenv').config()

function* helloSaga() {
    console.log('Hello Sagas!')
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* getMovies() {
    try {
        const test = yield call(fetch, 'https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.REACT_APP_API_KEY + '&language=ko&sort_by=popularity.desc&include_adult=true&include_video=false&page=1')
        const json = yield test.json();
        console.log(json['results']);

        let poster_path = "";
        for(let i=0; i < json['results'].length; i++){
            poster_path = "https://image.tmdb.org/t/p/original" + json['results'][i]['poster_path']
            yield put(list_add(json['results'][i]['id'], json['results'][i]['title'], json['results'][i]['overview'], poster_path))
        }
    }
    catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        getMovies()
    ]);
}