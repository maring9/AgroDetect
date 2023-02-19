import { createStore } from "vuex";

export default createStore({
    state: {
        user: null,
        api_key: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setApiKey(state, key) {
            state.api_key = key;
        }
    },
    getters: {
        isSignedIn: (state) => {
            return state.user !== null;
        }
    },
    actions: {

    },
    modules: {

    }
})