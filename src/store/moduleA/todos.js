import axios from 'axios'

const state = {
    todos: [],
    lastId:'',
    obj:{
        msg:'hello word'
    }
};

const getters = {
    //活动todo列表
    getAllTodos(state){
        return state.todos
    },
    //获取ID
    getLastId(state){
        return state.lastId
    }
    // getMsg(state){
    //     return state.obj.msg
    // }
};

const mutations = {
    //
    setTodos(state, todos){
        state.todos = todos;
        state.lastId = todos.pop().id;
    },
    //添加
    addTodo(state, data){
        state.todos.unshift(data)
    },
    //删除
    delete(state, id){
        state.todos = state.todos.filter(todo => todo.id !== id);
    },
    //更新状态
    updateTodo(state, data){
        let index = state.todos.findIndex(todo => todo.id === data.id);
        state.todos.splice(index, 1, data);
    },
    //改变input
    updateMsg (state, msg) {
        state.obj.msg = msg
    }
};


const actions = {
    //获取列表数据
    async getAllTodos({ commit }){
        const res = await axios.get('http://jsonplaceholder.typicode.com/todos');
        commit('setTodos',res.data)
    },
    //添加TODO列表项
    async addTodo({ commit }, data){
        const res = await axios.post('http://jsonplaceholder.typicode.com/todos',data);
        commit('addTodo', res.data)
    },
    //删除TODO列表项
    async deleteTodo({ commit }, id){
        await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
        commit('delete', id)
    },
    //过滤TODO列表项条数
    async filterTodo({ commit }, limit){
        const res = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos',res.data)
    },
    //更新TODO列表项状态
    async updateTodo({ commit }, data){
        await axios.put(`http://jsonplaceholder.typicode.com/todos/${data.id}`);
        commit('updateTodo',data)
    }
};

export default {
    state, getters, mutations, actions
}