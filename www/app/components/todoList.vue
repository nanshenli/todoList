<style scoped lang="stylus">
    .active{
        text-decoration: line-through
    }
</style>

<template>
    <li>
        <input type="checkbox" v-model="item.done" ref="box" @click="checkbox(item)">
        <span v-if="!isShowTxt" @dblclick="showInput" :class="{active:item.done}"> {{item.title}}</span>
        <input type="text" v-model="item.title" v-if="isShowTxt" v-focus @blur="hideInput(item)">
        <button @click="del(item)">删除</button>
    </li>
</template>

<script>
    export default {
        props:["item"],

        data(){
            return{
                isShowTxt : false
            }
        },
        methods:{
            showInput(){
                this.isShowTxt = !this.isShowTxt;
            },
            del(item){
                this.$store.dispatch("DEL",{
                    id : item.id
                })
            },
            hideInput(item){
                this.$store.dispatch("CHANGETITLE",{
                    id : item.id,
                    title : item.title
                })
                this.showInput()
            },
            checkbox(item){
                this.$store.dispatch("CHANGEDONE",{
                    id:item.id,
                    done : this.$refs.box.checked
                })
            }
        },
        directives :{
            focus:{
                inserted : function (el) {
                    el.focus()
                }
            }
        }
    }
</script>