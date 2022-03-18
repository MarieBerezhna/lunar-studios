import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
    content: []
})

export const mutations = {
    set_content(state, content) {
        console.log(content)
        state.content = content
    }
}
export const actions = {
    get_content ({commit}) {
        this.$axios.get('/content').then(res => {
          commit('set_content', res.data)
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