import axios from "axios";

export default {
    state: {
        items: [],
        loadingStatus: false,
    },
    getters: {
        posts (state) {
            return state.items;
        },
        loadingStatus (state) {
            return state.loadingStatus;
        },
        getPostById: (state) => (id) => {
            return state.items.find(post => post.id == id)
        }
    },
    mutations: {
        SET_POSTS: (state, posts) => state.items = posts,
        GET_POSTS: (state, postsData) => state.items = postsData,
        LOADING_STATUS: (state, newLoadingStatus) => state.loadingStatus = newLoadingStatus,

    },
    actions: {
        async getPosts ({ commit }) {
            commit('LOADING_STATUS', true)
            return await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                commit('GET_POSTS', response.data)
                commit('LOADING_STATUS', false)
            })
            .catch(error => console.log(error))
        }
    },
}