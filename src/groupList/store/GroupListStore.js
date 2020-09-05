import { observable, computed, action, get } from "mobx";
import categoryData from "../data/categoryData.js";
import groupData from "../data/groupData";
export default class GroupListStore {
  @observable categoryData = categoryData;
  @observable groupData = groupData;

  @computed
  get getCategoryData() {
    return categoryData;
  }

  @computed
  get getGroupData() {
    return groupData;
  }
}
