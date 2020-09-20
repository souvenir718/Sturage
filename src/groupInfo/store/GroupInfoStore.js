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
    return this.groupSubjects
      ? this.groupSubjects.slice("").map((subject) => {
          return { ...subject };
        })
      : [];
  }

  @action
  setGroupSubjects(groupDataApi) {
    this.groupSubjects = groupDataApi;
  }

  @action
  setGroupInfo(groupObj) {
    this.groupSubjects = groupObj.subjectList;
    this.groupMembers = groupObj.members;
    this.groupAttends = groupObj.attends;

    delete groupObj.subjectList;
    delete groupObj.members;
    delete groupObj.attends;
    this.groupInfo = groupObj;
  }
}
