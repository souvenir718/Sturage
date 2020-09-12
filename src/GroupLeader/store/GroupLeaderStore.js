import { observable, computed, action } from "mobx";
import subjectData from "../data/subjectData";
export default class GroupLeaderStore {
    @observable subjectData = subjectData;


    @computed
    get getSubjectData(){
        return this.subjectData;
    }

    @action
    addSubject(newTitle, id){
        let dataList = this.subjectData;

        let newData = {
            id: id,
            times: id + 1,
            title: newTitle,
            isTodo: false,
            todoList: [],
        };
        dataList.push(newData);

        this.subjectData = dataList;
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
    addTodo(id, todo){
    let subject = this.subjectData.find((data) => data.id === id);

    let newTodoList = subject.todoList;
    let newTodo = {
      id: newTodoList.length,
      title: todo,
      userList:[],
    };
    newTodoList.push(newTodo);
    let newSubjectList = this.subjectData.map((data) =>
      data.id === id ? { ...data, todoList: newTodoList } : data
    );
   
    this.subjectData = newSubjectList;
    }   

    @action
    addUser(dataId, todoId, userList){

    let subject = this.subjectData.find((data) => data.id === dataId);
    let todoList = subject.todoList;
    let newTodoList = todoList.map((todo)=>
    todo.id === todoId ? {...todo, userList:userList } : todo);

    let subjectList = this.subjectData.map((data)=>
    data.id === dataId ? {...data, todoList : newTodoList } : data)
    
    this.subjectData = subjectList;
    }
}
