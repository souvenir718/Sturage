import { observable, computed, action } from "mobx";
import subjectData from "../data/subjectData";
export default class GroupLeaderStore {
    @observable subjectData = subjectData;
    @observable userList = [];
    @observable tmpTodo = "";
    @observable tmpTitle = "";


    @computed
    get getSubjectData(){
        return this.subjectData;
    }

    @action
    addSubject(id){
        let dataList = this.subjectData;

        let newData = {
            id: id,
            times: id + 1,
            title: this.tmpTitle,
            isTodo: false,
            todoList: [],
        };
        dataList.push(newData);

        this.subjectData = dataList;
        this.tmpTitle = "";
    }

    @action
    deleteSubject(id){
        let dataList = this.subjectData;
        dataList = dataList.filter((data) => data.id !== id);
        this.subjectData = dataList;
    }

    @action
    showTodo(id) {
        let subjectList = this.subjectData.map((data) =>
          data.id === id ? { ...data, isTodo: !data.isTodo } : data
        );
    
        this.subjectData = subjectList;
    }

    @action
    addTodo(id){
    let subject = this.subjectData.find((data) => data.id === id);

    let newTodoList = subject.todoList;
    let newTodo = {
      id: newTodoList.length,
      title: this.tmpTodo,
      userList:[],
    };
    newTodoList.push(newTodo);
    let newSubjectList = this.subjectData.map((data) =>
      data.id === id ? { ...data, todoList: newTodoList } : data
    );
    this.tmpTodo = "";
    this.subjectData = newSubjectList;
    }   

    @action
    addUser(dataId, todoId){

    let subject = this.subjectData.find((data) => data.id === dataId);
    let todoList = subject.todoList;
    let newTodoList = todoList.map((todo)=>
    todo.id === todoId ? {...todo, userList:this.userList } : todo);

    let subjectList = this.subjectData.map((data)=>
    data.id === dataId ? {...data, todoList : newTodoList } : data)
    
    this.subjectData = subjectList;
    this.userList = [];
    }

    @action
    changeUser(event, data){
        this.userList = data.value;
    }

    @action
    changeTodo(todo){
        this.tmpTodo = todo;
    }

    @action
    changeTitle(newTitle){
        this.tmpTitle = newTitle;
    }
}
