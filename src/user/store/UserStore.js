import { observable, computed, action } from "mobx";

export default class UserStore {
  @observable
  tag;
  @observable
  username;
  @observable
  open;
  @observable
  dimmer;
  @observable
  progress;
  @observable
  todo_id;

  @computed
  get getUsername() {
    return this.username ? this.username : null;
  }
  @computed
  get getTag() {
    return this.tag ? this.tag : null;
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
  setModal(open, dimmer) {
    this.open = open;
    this.dimmer = dimmer;
  }

  @action
  setprogress(todo_id, changedProgress) {
    this.todo_id = todo_id;
    this.progress = changedProgress;
  }
}
