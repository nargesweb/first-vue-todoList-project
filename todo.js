new Vue({
    el : "#app",
    data : {
        newTodo:"",
        todoList:[
            "do Home Work",
            "do exersize",
            "do project",
            "study English",
            "watch Movie",
        ]
    },
    methods : {
        addItem : function (){
            this.todoList.push(this.newTodo);
            this.newTodo = "";
        },
        removeItem : function (i) {
            this.todoList.splice(i,1)
        }
    }
})