    jwt-auth/ # JWT 토큰 획득
    jwt-auth/refresh/  # JWT 토큰 갱신
    jwt-auth/verify/  # JWT 토큰 확인
    users/ # 유저리스트 조회
    signin/ # 회원가입
    login/ #로그인
    out-member/ # 그룹참여 신청
    user/modify/ # 회원 정보 수정
    user/delete/ # 회원 탈퇴

api/users/ # 유저리스트 조회

```
    [
       {
        "id": "e771fb36-32e8-46d1-bdb4-c09f52e69c12", //userId
        "username": "admin",
        "password": "pbkdf2_sha256$180000$oQMiDE2hQ0L7$5/vNkHfl2dh666C7Wzh5ZfSc6ocEsxupYRhRqPRMlBE=",
        "nickname": "",
        "phone": "010-0000-0000",
        "email": "",
        "introduce": "",
        "attendGroups": [ //내그룹들
            {
                "id": "08dfed26-496b-469d-ad51-075d2854eec8", //그룹ID
                "category": "estt",
                "title": "test",
                "discription": "123",
                "leader": {
                    "id": "5805d0f5-2d6c-4959-ab88-1c9ea944a2ac", //리더정보
                    "username": "hoon",
                    "password": "1234",
                    "nickname": "hoon",
                    "phone": "010-0000-0000",
                    "email": "",
                    "introduce": ""
                },
                "time": 1,
                "subjectList":[
                    {
                        subject_id:1000,
                        todoList:[
                            {
                                todo_id:1
                            },
                            {
                                todo_id:2
                            }
                        ]

                    }
                ]
            },
               {
                "id": "08dfed26-496b-469d-ad51-075d2854eec8",
                "category": "estt",
                "title": "test",
                "discription": "123",
                "leader": {
                    "id": "5805d0f5-2d6c-4959-ab88-1c9ea944a2ac",
                    "username": "hoon",
                    "password": "1234",
                    "nickname": "hoon",
                    "phone": "010-0000-0000",
                    "email": "",
                    "introduce": ""
                },
                "time": 1,
            }
        ]
        },
        {
            "id": "5805d0f5-2d6c-4959-ab88-1c9ea944a2ac",
            "username": "hoon",
            "password": "1234",
            "nickname": "hoon",
            "phone": "010-0000-0000",
            "email": "",
            "introduce": "",
            "attendGroups": []
        },
    ]
```

api/login/ # 로그인

> 로그인했을때 로컬스토리지에 저장이 되는..

```
{
    "username": "mmoo",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYzMzZjJhNTItYjA5Zi00MDc4LTkzNzctNTYxZTAzYzgzOWQ5IiwidXNlcm5hbWUiOiJtbW9vIiwiZXhwIjoxNTk5NjY0NDE2LCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNTk5NjY0MTE2fQ.QVvr4V-VJuXdvCFSUfZrryx8XvyzHncgdMLLnMM17L8"
}
```

api/groups/

> 전체 그룹리스트 조회

```
[
    {
        "id": "08dfed26-496b-469d-ad51-075d2854eec8",
        "category": "estt",
        "title": "test",
        "discription": "123",
        "leader": {
            "id": "5805d0f5-2d6c-4959-ab88-1c9ea944a2ac",
            "username": "hoon",
            "password": "1234",
            "nickname": "hoon",
            "phone": "010-0000-0000",
            "email": "",
            "introduce": ""
        },
        "time": 1,
        "members": [
            {
                "id": "7454ef34-455f-45b4-9738-3a97ad9de57b",
                "nickname": "zone"
            },
            {
                "id": "b355e6d1-ca6c-4e43-bf42-63905d40ab27",
                "nickname": "zone"
            }
        ],
        "attends": [
            {
                "id": "395e9107-6a19-4bf9-a887-de6fdb182614",
                "nickname": "zone"
            },
            {
                "id": "c33f2a52-b09f-4078-9377-561e03c839d9",
                "nickname": "gogo2"
            }
        ]
    }
]
```

api/groups/<pk>/

> 그룹 디테일 페이지에서 사용 - 그룹ID 값으로 가져오는

```
{
    "id": "08dfed26-496b-469d-ad51-075d2854eec8",
    "category": "estt",
    "title": "test",
    "discription": "123",
    "leader": "5805d0f5-2d6c-4959-ab88-1c9ea944a2ac",
    "time": 1,
    "members": [
        "7454ef34-455f-45b4-9738-3a97ad9de57b",
        "b355e6d1-ca6c-4e43-bf42-63905d40ab27"
    ],
    "attends": [
        "395e9107-6a19-4bf9-a887-de6fdb182614",
        "c33f2a52-b09f-4078-9377-561e03c839d9"
    ],
    "subjects": [
        {
            "id": "4fa48fe3-d398-49cd-836f-47b131e0d1d2",
            "time": 1,
            "title": "TEST",
            "writer": "5805d0f5-2d6c-4959-ab88-1c9ea944a2ac",
            "todos": [
                {
                    "id": "06cb6d0b-b1f4-4fff-b4bc-33fa327b0d4e",
                    "time": 1,
                    "title": "TEST1",
                    "writer": "5805d0f5-2d6c-4959-ab88-1c9ea944a2ac",
                    "progress": ""
                },
                {
                    "id": "013e9110-0961-47d9-8bc5-67cfd43ae915",
                    "time": 1,
                    "title": "TEST2",
                    "writer": "c33f2a52-b09f-4078-9377-561e03c839d9",
                    "progress": ""
                }
            ]
        },
        {
            "id": "bd1b7b35-180e-4e6f-b628-f1d05d0ef608",
            "time": 1,
            "title": "seresrser",
            "writer": "9e1ccb3c-e13c-4d77-9958-fac91506a405",
            "todos": [
                {
                    "id": "76719c4d-3e9d-4c15-b74a-eaeb138f874c",
                    "time": 1,
                    "title": "TTTT1",
                    "writer": "b355e6d1-ca6c-4e43-bf42-63905d40ab27",
                    "progress": ""
                }
            ]
        }
    ]
}
```

api/groups/<pk>/subjects/

> 해당 그룹안에 subject 만 가져오는 subject List

```
[
    {
        "id": "4fa48fe3-d398-49cd-836f-47b131e0d1d2",
        "time": 1,
        "title": "TEST",
        "writer": "5805d0f5-2d6c-4959-ab88-1c9ea944a2ac",
        "todos": [
            {
                "id": "06cb6d0b-b1f4-4fff-b4bc-33fa327b0d4e",
                "time": 1,
                "title": "TEST1",
                "writer": "5805d0f5-2d6c-4959-ab88-1c9ea944a2ac",
                "progress": ""
            },
            {
                "id": "013e9110-0961-47d9-8bc5-67cfd43ae915",
                "time": 1,
                "title": "TEST2",
                "writer": "c33f2a52-b09f-4078-9377-561e03c839d9",
                "progress": ""
            }
        ]
    },
    {
        "id": "bd1b7b35-180e-4e6f-b628-f1d05d0ef608",
        "time": 1,
        "title": "seresrser",
        "writer": "9e1ccb3c-e13c-4d77-9958-fac91506a405",
        "todos": [
            {
                "id": "76719c4d-3e9d-4c15-b74a-eaeb138f874c",
                "time": 1,
                "title": "TTTT1",
                "writer": "b355e6d1-ca6c-4e43-bf42-63905d40ab27",
                "progress": ""
            }
        ]
    }
]
```
