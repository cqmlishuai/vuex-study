<template>
    <div>
        <h3>todos</h3>
        <input type="text" :value="msg" @input="updateMsg">
        <div>{{msg}}</div>
        <div class="todos">
            <div class="todo"  v-for="todo in todos" :key="todo.id" :class="{'is-active':todo.completed}" @dblclick="changeState(todo)">
                <span>{{todo.title}}</span>
                <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'
    export default {
        name: "Todo",

        // computed: {
        //     todos() {
        //         return this.$store.getters.getAllTods
        //     }
        // },
        computed: {
            ...mapGetters({
                todos: 'getAllTodos',
                // msg:'getMsg'

            }),
            ...mapState({
                msg: state => state.todos.obj.msg
            })
        },

        created() {
            //效果一样
            // this.$store.dispatch('getAllTodos')
            this.getAllTodos()
        },
        methods: {
            ...mapActions(['getAllTodos', 'deleteTodo', 'updateTodo']),
            updateMsg (e) {
                this.$store.commit('updateMsg', e.target.value)
                // console.log(e.target.value);
            },
            changeState(todo){
                const data = {
                    title:todo.title,
                    id:todo.id,
                    completed:!todo.completed
                }
                this.updateTodo(data)
            }
        }
    }
</script>

<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;

    }
    .todo{
        position: relative;
        background: #41b883;
        padding: 10px;
        border: 1px solid #41b883;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        color: white;
    }
    .is-active{
        background:#b84c12;
        border: 1px solid #b84c12;
    }
    span{
        display: inline-block;
        text-align: left;
        padding-right: 30px;
    }
    i{
        position: absolute;
        width: 14px;
        height: 14px;
        top: 50%;
        margin-top: -7px;
        right: 15px;
        color: deeppink;

    }
</style>