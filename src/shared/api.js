import axios from 'axios';

const token = localStorage.getItem('login-token');

const api = axios.create({
  baseURL: 'http://3.35.176.155:8080/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
    Authorization: `Bearer ${token}`,
  },
});

export const apis = {
  // user
  login: (email, password) => api.post('/api/users/login', { email, password }),
  signup: (nickname, email, password) =>
    api.post('/api/users/signup', {
      nickname,
      email,
      password,
    }),

  loginCheck: () => api.post('/api/users/me'),

  // articles
  mainAriticles: () => api.get('/api/articles/mainProjects'), // 주목할 만한 프로젝트
  popularAriticles: () => api.get('/api/articles/popularProjects'), //  인기 프로젝트
  myAriticles: () => api.get('/api/articles/myDonatedProjects'),
  cateAriticles: () => api.get('/api/articles/category?category=name'),
  searchAriticles: () => api.get('/api/articles?search=keyword'),

  ariticles: () => api.get('/api/articles?search=keyword'), // 상세 조회
  donation: () => api.fetch(`/api/article/:articleId/donation`), // 후원하기
  donationCancel: () => api.fetch('/api/article/:articleId/donationCancel'), // 후원취소

  // comment
  comments: () => api.get(`/api/comments/:articleId`),
  addComment: (content) => api.post(`/api/comments/:articleId`, content),
  updateComment: (content) =>
    api.patch(`/api/comments/modify/:commentId`, content),
  delComment: () => api.delete(`/api/comments/delete/:commentId`),
};
