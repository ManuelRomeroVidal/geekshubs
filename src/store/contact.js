export default {
    state: {
        name: '',
        email: '',
        message: ''
    },
    getters: {
    },
    mutations: {
        SET_CONTACT_NAME: (state, nameData) => state.name = nameData,
        SET_CONTACT_EMAIL: (state, emailData) => state.email = emailData,
        SET_CONTACT_MESAGGE: (state, messageData) => state.message = messageData,
    },
    actions: {
    },
}