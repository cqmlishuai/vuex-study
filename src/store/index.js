
import Vuex from 'vuex'
import Vue from 'vue'
import todos from './moduleA/todos'

Vue.use(Vuex);

const store = new Vuex.Store({
        modules: {
            todos
        }
})

export default store