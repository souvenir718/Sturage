import GroupInfoStore from "../groupInfo/store/GroupInfoStore";
import GroupListStore from "../groupList/store/GroupListStore";
import UserStore from "../user/store/UserStore";
import GroupLeaderStore from "../GroupLeader/store/GroupLeaderStore";

// 공통 스토어
export default class Store {
  constructor() {
    this.detail = new GroupInfoStore(this);
    this.list = new GroupListStore(this);
    this.user = new UserStore(this);
    this.leader = new GroupLeaderStore(this);
    // 이후 스토어 추가가 필요할 경우 추가
  }
}
