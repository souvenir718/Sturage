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


  @action
  setModal(open, dimmer){
    this.open = open;
    this.dimmer=dimmer;
   }


}
