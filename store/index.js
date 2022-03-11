import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
    content: []
})

export const mutations = {
    set_content(state, content) {
        const arr = []
        Object.keys(content).map(key => {
            if (!content[key].length) return
            const name = key.replace('-section', '')
            const headers = content[key][0]
            const items = []
            content[key].map((entry, idx) => {
                let item = {}
                if (idx !== 0) {
                    Object.keys(entry).map(key => {
                        Object.assign(item, {[headers[key]] : entry[key]})
                    })
                }
                if (Object.keys(item).length) items.push(item)
            })
            console.log(items)
            arr.push({[name]: items})
        })
        console.log(arr)
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