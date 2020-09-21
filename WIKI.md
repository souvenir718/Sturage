#### href vs as to 차이

- href : page가 새로고침된다. 그래서 state가 다 초기화됨
- as to : page가 새로고침되지않고 component만 바뀌는거라서 state는 유지될수도.....
  (단, 경우에따라 state가 바뀔수도있다...)

#### :star: annotation 순서의 중요성 ! ! ! ! ! ! !

(한시간 걸린 오류.......)

- @inject("Store")
- @observer
- 연결할 Store를 명시해주고 observer를 명시해줘서 감시상태 확인.

#### selection e.target.innerText
