export default {
  id: "e771fb36-32e8-46d1-bdb4-c09f52e69c12", //userId
  username: "admin",
  password:
    "pbkdf2_sha256$180000$oQMiDE2hQ0L7$5/vNkHfl2dh666C7Wzh5ZfSc6ocEsxupYRhRqPRMlBE=",
  nickname: "",
  phone: "010-0000-0000",
  email: "",
  introduce: "",
  attendGroups: [
    //내그룹들
    {
      id: "08dfed26-496b-469d-ad51-075d2854eec8", //그룹ID
      title: "역삼스터디",
      joinDate: "2020-09-01",
      Description: "프론트엔드모여라",
      subjectList: [
        {
          subject_id: 1000,
          todoList: [
            {
              todo_id: 1,
              title: "reactJS p.101까지 다하기 ",
              dueDate: "2020-09-13",
            },
          ],
        },
        {
          subject_id: 1001,
          todoList: [
            {
              todo_id: 2,
              title: "spring p.23까지 다하기 ",
              dueDate: "2020-09-14",
            },
            {
              todo_id: 3,
              title: "JSP p.223까지 다하기 ",
              dueDate: "2020-09-12",
            },
          ],
        },
      ],
    },
    {
      id: "08dfed26-496b-469d-ad51-075d2854eec8", //그룹ID
      title: "선릉스터디",
      joinDate: "2020-09-01",
      Description: "자격증이 목표입니다.",
      subjectList: [
        {
          subject_id: 2000,
          todoList: [
            {
              todo_id: 1,
              title: "리눅스마스터 p.20까지 ",
              dueDate: "2020-09-13",
            },
          ],
        },
        {
          subject_id: 2001,
          todoList: [
            {
              todo_id: 2,
              title: "Spring AOP 혼자해보기 ",
              dueDate: "2020-09-14",
            },
            {
              todo_id: 3,
              title: " 노드JS 하기 ",
              dueDate: "2020-09-12",
            },
          ],
        },
      ],
    },
    {
      id: "08dfed26-496b-469d-ad51-075d2854eec8", //그룹ID
      title: "사당스터디",
      joinDate: "2020-09-01",
      Description: "리액트마스터가 목표입니다.",
      subjectList: [
        {
          subject_id: 2000,
          todoList: [
            {
              todo_id: 1,
              title: "리눅스마스터 p.20까지 ",
              dueDate: "2020-09-13",
            },
          ],
        },
        {
          subject_id: 3001,
          todoList: [
            {
              todo_id: 2,
              title: "Spring AOP 혼자해보기 ",
              dueDate: "2020-09-14",
            },
            {
              todo_id: 3,
              title: " 노드JS 하기 ",
              dueDate: "2020-09-12",
            },
          ],
        },
      ],
    },
  ],
};
