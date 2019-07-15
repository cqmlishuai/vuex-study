<template>
    <div>
        <h3>Add Todo</h3>
        <form @submit="submit">
            <input type="text" placeholder="Add Todo" v-model="title">
            <input type="submit" value="Submit">
        </form>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "AddTodo",
        data(){
            return{
                title:'',
                lastId:'',
            }
        },
        computed:{
          ...mapGetters({
              lastId:'getLastId'
          })
        },
        methods:{
            ...mapActions(['addTodo']),
            submit(e){
                e.preventDefault();
                const todo = {
                    title:this.title,
                    id:this.lastId+1,
                    completed:false
                }
                this.addTodo(todo)
            }
        }
    }
</script>

<style scoped>

    form{
        display: flex;
    }
    input{
        flex: 10;
        border: 1px solid #41b883;
        padding: 10px;
    }
    input[type=submit]{
        background: #41b883;
        color: white;
        border: 1px solid #41b883;
        flex: 2;
        cursor: pointer;
    }

</style>