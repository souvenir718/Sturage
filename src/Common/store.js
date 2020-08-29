import GroupDetailStore from "../groupDetail/store/GroupDetailStore";
import GroupListStore from "../groupList/store/GroupListStore";
import UserStore from "../user/store/UserStore";

// 공통 스토어
export default class Store {
  constructor() {
    this.detail = new GroupDetailStore(this);
    this.list = new GroupListStore(this);
    this.user = new UserStore(this);
    // 이후 스토어 추가가 필요할 경우 추가
  }
}
