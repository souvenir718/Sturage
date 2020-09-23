import { observable, computed, action } from "mobx";
// import subjectData from "../data/subjectData";
import attends from "../data/attends";
import leaderData from "../data/leaderData";
import moment from "moment";
import axios from "axios";

export default class GroupLeaderStore {
  @observable leaderGroups = [];
  @observable leaderData = leaderData;
  @observable subjectData = [];
  @observable groupMembers = [];

  @observable attends = attends;
  @observable members = [];

  @observable userList = [];
  @observable tmpTodo = "";
  @observable tmpTitle = "";
  @observable startDate = new Date();
  @observable endDate = new Date();

  @computed
  get getGroupMembers() {
    return this.groupMembers;
  }

  @computed
  get getLeaderGroups() {
    return this.leaderGroups;
  }

  @computed
  get getLeaderData() {
    return this.leaderData;
  }

  @computed
  get getStartDate() {
    return this.startDate;
  }

  @computed
  get getEndDate() {
    return this.endDate;
  }

  @computed
  get getSubjectData() {
    return this.subjectData;
  }
  @computed
  get getAttends() {
    return this.attends;
  }
  @computed
  get getMembers() {
    return this.members;
  }

  @action
  setLeaderGroups() {
    const url = "/api/leader/groups/";
    axios.get(url).then((res) => {
      console.log("setLeaderGroups");
      console.log(res.data);
      console.log(res.data[0].subjectList);
      this.leaderGroups = res.data;
      this.subjectData = res.data[0].subjectList;
      this.groupMembers = res.data[0].members;
    });
  }

  @action
  setSubjectbyGroupTitle(title) {
    const group = this.leaderGroups.find(
      (leaderGroup) => leaderGroup.title === title
    );
    this.subjectData = group.subjectList;
    this.groupMembers = group.members;
  }

  @action
  addSubject(id) {
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
  deleteSubject(id) {
    let dataList = this.subjectData;
    dataList = dataList.filter((data) => data.id !== id);
    this.subjectData = dataList;
  }

  @action
  showTodo(id) {
    let subjectList = this.subjectData.map((data) =>
      data.subject_id === id ? { ...data, isTodo: !data.isTodo } : data
    );

    this.subjectData = subjectList;
  }

  @action
  addTodo(id) {
    let subject = this.subjectData.find((data) => data.id === id);

    let newTodoList = subject.todoList;
    let newTodo = {
      id: newTodoList.length,
      title: this.tmpTodo,
      userList: [],
      startDate: moment(this.startDate).format("YYYY-MM-DD"),
      endDate: moment(this.endDate).format("YYYY-MM-DD"),
    };
    newTodoList.push(newTodo);
    let newSubjectList = this.subjectData.map((data) =>
      data.id === id ? { ...data, todoList: newTodoList } : data
    );
    this.tmpTodo = "";
    this.subjectData = newSubjectList;
    this.startDate = new Date();
    this.endDate = new Date();
  }

  @action
  addUser(subjectId, todoId) {
    let subject = this.subjectData.find(
      (data) => data.subject_id === subjectId
    );
    console.log(subject);

    // console.log(this.subjectData);
    // let todoList = subject.todoGroups;
    // let newTodoList = todoList.map((todo) =>
    //   todo.id === todoId ? { ...todo, members: this.userList } : todo
    // );

    // let subjectList = this.subjectData.map((data) =>
    //   data.id === dataId ? { ...data, todoGroups: newTodoList } : data
    // );

    // this.subjectData = subjectList;
    // this.userList = [];
  }

  @action
  changeUser(event, data) {
    this.userList = data.value;
  }

  @action
  changeTodo(todo) {
    this.tmpTodo = todo;
  }

  @action
  changeTitle(newTitle) {
    this.tmpTitle = newTitle;
  }

  @action
  changeStartDate(newStartDate) {
    this.startDate = newStartDate;
  }

  @action
  changeEndDate(newEndDate) {
    this.endDate = newEndDate;
  }

  //groupuser
  @action
  toggleAttends = (dataId) => {
    let newAttends = this.attends.map((data) =>
      data.id === dataId ? { ...data, isMember: !data.isMember } : data
    );
    this.attends = newAttends;
    // this.setState((prevState) => ({ checked: !prevState.checked }));
  };

  @action
  toggleMembers = (dataId) => {
    let newMembers = this.members.map((data) =>
      data.id === dataId ? { ...data, isMember: !data.isMember } : data
    );
    this.members = newMembers;
  };
  @action
  attendsToMembers = () => {
    let newMembers = this.attends.filter((data) => data.isMember === true);
    let newAttends = this.attends.filter((data) => data.isMember === false);

    this.attends = newAttends;
    this.members = this.members.concat(newMembers);
  };

  @action
  membersToAttends = () => {
    let newMembers = this.members.filter((data) => data.isMember === true);
    let newAttends = this.members.filter((data) => data.isMember === false);

    this.attends = this.attends.concat(newAttends);
    this.members = newMembers;
  };
}
