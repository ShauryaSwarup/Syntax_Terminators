import * as api from "../api/index.js";

const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const FETCH_ALL = "FETCH_ALL";
const FETCH_BY_SEARCH = "FETCH_BY_SEARCH";
const FETCH_POST = "FETCH_POST";
const LIKE = "LIKE";
const END_LOADING = "END_LOADING";
const START_LOADING = "START_LOADING";

const AUTH = "AUTH";
const LOGOUT = "LOGOUT";



export const getPostsBySearch = (searchQuery) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const {
			data: { data },
		} = await api.fetchPostsBySearch(searchQuery);

		dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error);
	}
};
