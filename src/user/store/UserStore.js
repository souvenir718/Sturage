import { observable, computed, action } from "mobx";
import axios from "axios";

export default class UserStore {
  @observable username = "";
  @observable nickname;

  @observable open;
  @observable dimmer;
  @observable progress;
  @observable todo_id;
  @observable userTodos;

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
    const url = "api/users/info";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);

        this.username = res.data.username;
        this.nickname = res.data.nickname;

        console.log(this.username);
      })
      .catch(function (error) {
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
