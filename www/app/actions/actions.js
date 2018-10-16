import * as types from "../types/types.js"

export default {
    [types.GETALL](context, payload) {
        $.get("/getall", function(data) {
            context.commit("GETALL", data)
        })
    },
    [types.ADD](context,payload){
        $.get("/add",{
            id:payload.id,
            title:payload.title
        },function (data) {
            context.commit("ADD",data)
        })
    },
    [types.DEL](context,payload){
        $.get("/del",payload,function (data) {
            context.commit("DEL",data)
        })
    },
    [types.CHANGETITLE](context,payload){
        $.get("/changetitle",payload,function (data) {
            context.commit("CAHNGETITLE",data)
        })
    },
    [types.CHANGEDONE](context,payload){
        $.get("/changedone",{
            id : payload.id,
            done : payload.done ? 1 : -1
        },function (data) {
            context.commit("CHANGEDONE",data)
        })
    }
}
