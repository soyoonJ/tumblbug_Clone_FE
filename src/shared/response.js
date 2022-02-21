// response.js
export const RESP = {
  LOGIN: {
    result: true,
    token: 'eyJ0eXAi...',
  },

  SIGNUP: {
    result: true,
    msg: '회원가입에 성공하였습니다.',
  },

  ARTICLES_MAIN1: {
    result: true,
    mainProjects: [
      {
        category: '음악',
        nickname: '유저',
        title: '타이틀',
        image:
          'https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871',
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: '2022-04.01',
        contents: '안녕하세요~~~~~~',
      },
    ],
  },

  ARTICLES_MAIN2: {
    result: true,
    mainProjects: [
      {
        category: '음악',
        nickname: '유저',
        title: '타이틀',
        image:
          'https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871',
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: '2022-04.01',
        contents: '안녕하세요~~~~~~',
      },
    ],
  },

  ARTICLES_MY: {
    result: true,
    mainProjects: [
      {
        category: '음악',
        nickname: '유저',
        title: '타이틀',
        image:
          'https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871',
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: '2022-04.01',
        contents: '안녕하세요~~~~~~',
      },
    ],
  },

  ARTICLES_CATE: {
    result: true,
    mainProjects: [
      {
        category: '음악',
        nickname: '유저',
        title: '타이틀',
        image:
          'https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871',
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: '2022-04.01',
        contents: '안녕하세요~~~~~~',
      },
    ],
  },

  ARTICLES_SEARCH: {
    result: true,
    mainProjects: [
      {
        category: '음악',
        nickname: '유저',
        title: '타이틀',
        image:
          'https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871',
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: '2022-04.01',
        contents: '안녕하세요~~~~~~',
      },
    ],
  },

  ARTICLES_DETAIL: {
    result: true,
    mainProjects: [
      {
        category: '음악',
        nickname: '유저',
        title: '타이틀',
        image:
          'https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871',
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: '2022-04.01',
        contents: '안녕하세요~~~~~~',
      },
    ],
  },

  DONATION: { result: true },

  DONATION_CANCEL: { result: true },

  COMMENTS: {
    result: true,
    comments: [
      {
        commentId: 'asdf1234',
        articleId: 'asdf12345',
        nickname: '닉네임',
        content: '와 와 멋지다',
        email: 'asdf@asdf.com',
      },
    ],
  },

  COMMENTS_WRITE: { result: true, msg: '작성 완료되었습니다.' },

  COMMENTS_UPDATE: { result: true, msg: '수정 완료되었습니다.' },

  COMMENTS_DELETE: { result: true, msg: '삭제 완료되었습니다.' },

  LOGIN_CHECK: {
    result: true,
    email: 'asdf@naver.com',
    nickname: '유저닉네임',
  },
};
