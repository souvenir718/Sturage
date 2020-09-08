// import axios from "axios";
// /*
//   예시 ) User 로그인 요청
//   1. 보낼 경로(로그인 요청)와 경로에 맞는 데이터를 세팅한다.
//   2. 요청을 보낸다.
//   3. 예외처리
// */
// const userLogin = async () => {
//   // 보낼 경로
//   const api = "/api/login/";
//   // 보낼 데이터 이부분은 커스텀하며될듯
//   const data = {
//     username: "test",
//     password: "12345",
//   };

//   // POST요청 (지금은 로그인 요청)
//   return await axios
//     .post(api, data)
//     .then((res) => {
//       //성공
//       // 로그인시 토큰 취득
//       const jwt_token = res.data.token;
//       // localStorage에 accessToken으로 세팅
//       localStorage.accessToken = jwt_token;

//       /*
//       앞으로 axios요청을 보낼때마다 발급받은 토큰을 헤더에 넣어서 보낼 수 있도록 세팅
//       - 페이지가 리로딩되면 초기화 됨
//       */
//       axios.defaults.headers.common["Authorization"] = `JWT ${jwt_token}`;

//       // 이후에 페이지를 이동시키거나, 데이터를 가지고 작업을 진행하면됨
//     })
//     .catch(function (error) {
//       // 기본적인 인증 오류 메세지
//       // mssage: "Signature has expired."                        => 토큰 인증시간 만료 (로그인을 다시하도록 유도)
//       // mssage: "Authentication credentials were not provided." => 토큰 인증에러 (발급받은 토큰이 유효하거나, 토큰을보내지않음)

//       if (error.response) {
//         const err = {
//           header: error.response.headers,
//           code: error.response.status,
//           mssage: error.response.data.detail,
//         };
//         console.log(err);
//       } else if (error.request) {
//         console.log(error.request);
//       } else {
//         console.log("Error", error.message);
//       }
//     });
// };

// // 화면을 갱신할때 이 로컬 스토리지에 저장된 토큰을 axios 헤더에 설정하는 로직도 추가한다.
// const enhanceAccessToeken = () => {
//   const { accessToken } = localStorage;
//   if (!accessToken) return;
//   axios.defaults.headers.common["Authorization"] = `JWT ${accessToken}`;
// };

// // const getUser = () => {
// //   const api = "/api/user/";

// //   if (localStorage.accessToken) {
// //     axios.get(api);
// //   } else {
// //     //login 으로
// //   }
// // };

// const getUsers = () => {
//   const api = "/api/users/";

//   axios
//     .get(api)
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch(function (error) {
//       if (error.response) {
//         // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
//         const err = {
//           header: error.response.headers,
//           code: error.response.status,
//           mssage: error.response.data.detail,
//         };
//         console.log(err);
//       } else if (error.request) {
//         // 요청이 이루어 졌으나 응답을 받지 못했습니다.
//         // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
//         // Node.js의 http.ClientRequest 인스턴스입니다.
//         console.log(error.request);
//       } else {
//         // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
//         console.log("Error", error.message);
//       }
//       // console.log(error.config);
//     });
// };

// const getGroups = () => {
//   const api = "/api/groups/";
//   axios
//     .get(api)
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch(function (error) {
//       if (error.response) {
//         const err = {
//           header: error.response.headers,
//           code: error.response.status,
//           mssage: error.response.data.detail,
//         };
//         console.log(err);
//       } else if (error.request) {
//         console.log(error.request);
//       } else {
//         console.log("Error", error.message);
//       }
//       console.log(error.config.detail);
//     });
// };

// userLogin().then((res) => {
//   // 로그인이 된 후에 실행하도록
//   console.log(res);
//   getUsers();
//   getGroups();
// });

// // enhanceAccessToeken();

// // export { userLogin, enhanceAccessToeken, getUsers, getGroups };
