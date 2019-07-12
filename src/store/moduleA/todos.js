import axios from 'axios'

const state = {
    todos: [],
    obj:{
        msg:'hello word'
    }
};

const getters = {
    getAllTodos(state){
        return state.todos
    },
    // getMsg(state){
    //     return state.obj.msg
    // }
};

const mutations = {
    //
    setTodos(state, todos){
        state.todos = todos;
    },
    //
    addTodo(state, data){
        state.todos.unshift(data)
    },
    updateMsg (state, msg) {
        state.obj.msg = msg
    }
};


const actions = {
    async getAllTodos({ commit }){
        const res = await axios.get('http://jsonplaceholder.typicode.com/todos');
        commit('setTodos',res.data)
    },
    async addTodo({ commit }, data){
        const res = await axios.post('http://jsonplaceholder.typicode.com/todos',data);
        commit('addTodo', res.data)
    }
};

export default {
    state, getters, mutations, actions
}