import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
    content: [],
    contactFormResult: null
})

export const mutations = {
    set_content(state, content) {
        state.content = content
    },
    contact_answer(state, answer) {
         state.contactFormResult = answer
    }
}
export const actions = {
    get_content ({commit}) {
        this.$axios.get('/content').then(res => {
          commit('set_content', res.data)
        })
    },
    contact ({commit}, data) {
        this.$axios.post('/contact', data).then(res => {
            commit('contact_answer', res.data)
        })
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default function () {
    return store
}