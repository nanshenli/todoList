export default {
    yizuo : function(state){
        return state.todos.filter(function (item) {
            return item.done == true
        })
    },
    weizuo : function(state){
        return state.todos.filter(function (item) {
            return item.done == false
        })
    }
}