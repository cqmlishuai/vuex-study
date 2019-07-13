<template>
    <div>
        <select v-model="limit" @change="filterTodo(limit)">
            <option value="">——请选择条数——</option>
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "FilterTodo",
        data(){
            return {
                limit: ""
            }
        },
        methods: {
            ...mapActions(['filterTodo'])
        }
    }
</script>

<style scoped>
    select{
        display: inline-block;
        left: 0;
        border: 1px solid #41b883;
        height: 30px;
        margin-top: 20px;
    }
</style>