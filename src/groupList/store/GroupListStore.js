import { observable, computed, action, get } from "mobx";
import categoryData from "../data/categoryData.js";
// import groupData from "../data/groupData";
export default class GroupListStore {
  @observable categoryData = categoryData;
  @observable groupData = [];

  @computed
  get getCategoryData() {
    return categoryData;
  }

  @computed
  get getGroupData() {
    return this.groupData ? this.groupData.slice("") : [];
  }

  @action
  setGroupData(groupDataApi) {
    this.groupData = groupDataApi;
    console.log(this.groupData);
  }
}
