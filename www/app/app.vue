<style scoped lang="stylus">

</style>

<template>
    <div>
        <div>
            <p>
                <input type="text" v-model="txt">
                <button @click="add">添加</button>
            </p>
        </div>
        <div>
            <ul>
                <li is="todoList" v-for="item in todos" :item="item" >

                </li>
            </ul>
        </div>
        <div>
            <p>
                全部{{todos.length}}---
                已做{{this.$store.getters.yizuo.length}}---
                未做{{this.$store.getters.weizuo.length}}
            </p>
        </div>
        <div>
            <p>
                <button @click="all">查看全部</button>
                <button @click="yizuo">查看已做</button>
                <button @click="weizuo">查看未做</button>
            </p>
        </div>
    </div>
</template>

<script>
    import todoList from "./components/todoList.vue"
    export default {
        data(){
            return{
                state:"all",
                txt:""
            }
        },
        created(){
            this.$store.dispatch("GETALL")
        },
        computed:{
            todos(){
                if(this.state == "all"){
                    return this.$store.state.todos
                } else if(this.state == "yizuo"){
                    return this.$store.getters.yizuo
                } else if(this.state == "weizuo"){
                    return this.$store.getters.weizuo
                }
            }
        },
        methods:{
            all(){
                this.state = "all"
            },
            yizuo(){
                this.state = "yizuo"
            },
            weizuo(){
                this.state = "weizuo"
            },
            add(){
                if(this.txt == "") return;
                var id = "";
                var str = "123456789";
                for(var i = 0; i<8;i++){
                    id+=str[~~(Math.random()*str.length)]
                }
                this.$store.dispatch("ADD",{
                    id:id,
                    title:this.txt
                })
                this.txt = ""
            }
        },
        components:{
            todoList
        }
    }
</script>