# Sturage React Project

## 환경 설정

build 실행

> yarn build

이미지 생성

> docker build -t nginx-react:0.1 .

실행

> docker run -d --name sturage -p 8000:80 nginx-react:0.1

## 라이브러리 추가

#### react-loading (로딩 기능)

> https://www.npmjs.com/package/react-loading

#### react-slideshow-image

> https://www.npmjs.com/package/react-slideshow-image

#### href vs as to 차이

- href : page가 새로고침된다. 그래서 state가 다 초기화됨
- as to : page가 새로고침되지않고 component만 바뀌는거라서 state는 유지될수도.....
  (단, 경우에따라 state가 바뀔수도있다...)
