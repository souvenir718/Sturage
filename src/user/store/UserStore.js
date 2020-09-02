import { observable, computed, action } from "mobx";

export default class UserStore {
  @observable
  tag;
  @observable
  username;

  @computed
  get getUsername() {
    return this.username ? this.username : null;
  }
  @computed
  get getTag() {
    return this.tag ? this.tag : null;
  }
}
