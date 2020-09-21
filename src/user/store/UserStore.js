import { observable, computed, action } from "mobx";
import axios from "axios";

export default class UserStore {
  //기본 유저 정보
  @observable id = "";
  @observable username = "";
  @observable nickname = "";
  @observable email = "";
  @observable introduce = "";
  @observable attendGroups = [];

  //로그인 상태체크
  @observable loginAt = false;

  //modal
  @observable open;
  @observable dimmer;
  @observable progress;
  @observable todo_id;
  @observable userTodos;

  @computed
  get loginConfirm() {
    return this.loginAt;
  }

  @computed
  get getUserName() {
    console.log("get store username오나요?", this.username);
    return this.username ? this.username : null;
  }
  @computed
  get getNickName() {
    console.log("get store nci오나요?", this.nickname);
    return this.nickname ? this.nickname : null;
  }

  @computed
  get getAttendGroups() {
    // 참여중인 그룹리스트 가져오기
    console.log("test");
    console.log(this.attendGroups);
    return this.attendGroups
      ? this.attendGroups.map((group) => {
          return { ...group };
        })
      : [];
  }

  @computed
  get getOpen() {
    return this.open ? this.open : false;
  }
  @computed
  get getDimmer() {
    return this.dimmer ? this.dimmer : undefined;
  }
  @computed
  get getProgress() {
    return this.progress ? this.progress : "할당됨";
  }
  @computed
  get getTodoId() {
    return this.progress ? this.todoId : "";
  }

  @action
  loadAPiUserData() {
    const url = "/api/users/info";
    axios.get(url).then((res) => {
      this.id = res.data.username;
      this.username = res.data.username;
      this.nickname = res.data.nickname;
      this.email = res.data.email;
      this.introduce = res.data.introduce;
      this.attendGroups = res.data.attendGroups;
      this.loginAt = true;
    });
  }

  @action
  getUserTodos() {
    const url = "api/user/todos";
    axios
      .get(url)
      .then((res) => {
        console.log("data 가져왔어~~~", res.data);
        this.userTodos = res.data;
      })
      .catch((error) => {
        console.log("! ! ! 에러 발생 ! ! !");
        this.showError(error);
      });
  }

  @action
  setModal(open, dimmer) {
    this.open = open;
    this.dimmer = dimmer;
  }

  @action
  setprogress(todo_id, changedProgress) {
    this.todo_id = todo_id;
    this.progress = changedProgress;
  }

  @action
  setUserName(username) {
    this.username = username;
    console.log("set  store setUsernmae?", username);
  }

  @action
  setNickName(nickname) {
    this.nickname = nickname;
  }

  showError = (error) => {
    if (error.response) {
      const err = {
        header: error.response.headers,
        code: error.response.status,
        mssage: error.response.data,
      };
      console.log(err);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
  };

 

}
