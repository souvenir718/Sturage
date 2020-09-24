import { observable, computed, action } from "mobx";

export default class GroupStore {
  @observable groupInfo = {};

  @observable groupSubjects = [];

  @observable groupMembers = [];

  @observable groupAttends = [];

  @computed
  get getGroupInfo() {
    return this.groupInfo ? { ...this.groupInfo } : {};
  }

  @computed
  get getGroupSubjects() {
    if (this.groupInfo.subjectList !== undefined) {
      return this.groupInfo.subjectList.slice("").length > 0
        ? this.groupInfo.subjectList.slice("").map((subject) => {
            return { ...subject };
          })
        : [];
    }
    return [];
  }

  @action
  setGroupSubjects(groupDataApi) {
    this.groupSubjects = groupDataApi;
  }

  @action
  setGroupInfo(groupObj) {
    this.groupInfo = groupObj;
  }
}
