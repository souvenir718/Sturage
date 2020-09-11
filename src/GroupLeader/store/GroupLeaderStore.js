import { observable, computed, action } from "mobx";
import subjectData from "../data/subjectData";
export default class GroupLeaderStore {
    @observable subjectData = subjectData;

    @computed
    get getSubjectData(){
        return subjectData;
    }
}
