import * as types from './ActionTypes'

export const list_add = (id, title, overview, poster) => ({
    type: types.LIST_ADD,
    id,
    poster,
    title,
    overview,
});
