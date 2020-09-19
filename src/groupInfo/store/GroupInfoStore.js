import { observable, computed, action } from "mobx";

export default class GroupStore {
  @observable groupInfo = {};

  @observable groupSubjects = [];

  @computed
  get getGroupInfo() {
    return { ...this.groupInfo };
  }

  @computed
  get getGroupSubjects() {
    return this.groupSubjects ? this.groupSubjects.slice("") : [];
  }

  @action
  setGroupInfo(groupInfo) {
    this.groupInfo = groupInfo;
  }

  @action
  setGroupSubjects(groupInfo) {
    this.groupInfo = groupInfo;
  }
}
