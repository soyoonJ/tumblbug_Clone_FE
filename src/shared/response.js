// response.js
export const RESP = {
  LOGIN: {
    result: true,
    token: "eyJ0eXAi...",
  },

  SIGNUP: {
    result: true,
    msg: "회원가입에 성공하였습니다.",
  },

  ARTICLES_MAIN1: {
    result: true,
    mainProjects: [
      {
        category: "향수·뷰티",
        nickname: "로프트하우스 케미스트",
        title: "발트해의 태양과 바람, 신비로운 5월의 여왕 <미드솜마르>",
        image:
          "https://tumblbug-pci.imgix.net/65ad363adfe9e6e9f8f7479e8bf05c9db58fe5da/7d5e7d09142907e8f7e23da40ce8bc2e3cf13daf/7a6660ad741ebdc45e2a06a662b33ef910a46f0e/9bed4237-201a-4806-898c-19bec6afa9ca.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=c83e15c1546fdd3d4ff9675e28196574",
        targetAmount: 500000,
        totalAmount: 23748000,
        deadline: "2022-03-07",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
      {
        category: "푸드",
        nickname: "베러댄알콜",
        title: "[고소한 버터와 딸기잼의 만남, 샌드 쿠키 3종]",
        image:
          "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/32efb6cbb58d802eff4474dd0a226465dac6d959/6a57b4916d6420ebb8b2c96ef8e397d939129943/5d29c128-2024-4ac1-b83a-8ed40ff0b819.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=d2b0a9a7e870a03a52e14730dc0071e9",
        targetAmount: 2000000,
        totalAmount: 16067200,
        deadline: "2022-02-26",
        contents: "안녕하세요~~~~~~",
      },
      {
        category: "디자인 문구",
        nickname: "Woodangtang Studio",
        title: "컬러 판타지 : 색으로 답하는 150가지의 질문지",
        image:
          "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/25f3faa473598d36ff7fa3addfefaa5f282337b2/d6bbd47f27179563ae480b66a8ef9240a10fbab9/c476f0a3-9fef-42c6-b782-39862654f021.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b03544df799042ef16b1cbb04937552a",
        targetAmount: 2000000,
        totalAmount: 2230000,
        deadline: "2022-03-15",
        contents: "안녕하세요~~~~~~",
      },
      {
        category: "캐릭터·굿즈",
        nickname: "Drsk1398",
        title: "멀리 떠나는 이에게, 복을 담은 [십장생 여권지갑]",
        image:
          "https://tumblbug-pci.imgix.net/98cf4966a9c448c57f569b410313eb8c1a692714/23132d1b1603bf67d41cae29a8bdeccf17b07d13/ebe99b132d40850abd7b0f363bbe1a44aec1017c/61fb7ff2-15ec-480a-93e2-3f21786e5de3.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=a75a01b645828f708ffa623597c6a054",
        targetAmount: 8155059,
        totalAmount: 6569600,
        deadline: "2022-02-26",
        contents: "안녕하세요~~~~~~",
      },
      {
        category: "향수·뷰티",
        nickname: "로프트하우스 케미스트",
        title: "발트해의 태양과 바람, 신비로운 5월의 여왕 <미드솜마르>",
        image:
          "https://tumblbug-pci.imgix.net/65ad363adfe9e6e9f8f7479e8bf05c9db58fe5da/7d5e7d09142907e8f7e23da40ce8bc2e3cf13daf/7a6660ad741ebdc45e2a06a662b33ef910a46f0e/9bed4237-201a-4806-898c-19bec6afa9ca.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=c83e15c1546fdd3d4ff9675e28196574",
        targetAmount: 500000,
        totalAmount: 23748000,
        deadline: "2022-03-07",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
      {
        category: "푸드",
        nickname: "베러댄알콜",
        title: "[고소한 버터와 딸기잼의 만남, 샌드 쿠키 3종]",
        image:
          "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/32efb6cbb58d802eff4474dd0a226465dac6d959/6a57b4916d6420ebb8b2c96ef8e397d939129943/5d29c128-2024-4ac1-b83a-8ed40ff0b819.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=d2b0a9a7e870a03a52e14730dc0071e9",
        targetAmount: 2000000,
        totalAmount: 16067200,
        deadline: "2022-02-26",
        contents: "안녕하세요~~~~~~",
      },
      {
        category: "디자인 문구",
        nickname: "Woodangtang Studio",
        title: "컬러 판타지 : 색으로 답하는 150가지의 질문지",
        image:
          "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/25f3faa473598d36ff7fa3addfefaa5f282337b2/d6bbd47f27179563ae480b66a8ef9240a10fbab9/c476f0a3-9fef-42c6-b782-39862654f021.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b03544df799042ef16b1cbb04937552a",
        targetAmount: 2000000,
        totalAmount: 2230000,
        deadline: "2022-03-15",
        contents: "안녕하세요~~~~~~",
      },
      {
        category: "캐릭터·굿즈",
        nickname: "Drsk1398",
        title: "멀리 떠나는 이에게, 복을 담은 [십장생 여권지갑]",
        image:
          "https://tumblbug-pci.imgix.net/98cf4966a9c448c57f569b410313eb8c1a692714/23132d1b1603bf67d41cae29a8bdeccf17b07d13/ebe99b132d40850abd7b0f363bbe1a44aec1017c/61fb7ff2-15ec-480a-93e2-3f21786e5de3.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=a75a01b645828f708ffa623597c6a054",
        targetAmount: 8155059,
        totalAmount: 6569600,
        deadline: "2022-02-26",
        contents: "안녕하세요~~~~~~",
      },
    ],
  },

  ARTICLES_MAIN2: {
    result: true,
    mainProjects: [
      {
        category: "음악",
        nickname: "(주)뮤직파라디소",
        title: "이누야샤 OST 앨범 재발매 프로젝트",
        image:
          "https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/00e0280cfcd37839d70cce63ea3c89360ef59af5/f2f822b0d93b98c4f50801a243776ffcc18e55cd/224c8b53-8589-4d04-be03-a8b2e4c0b83b.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e0ed2c1f02c2bdff4ecf7f21d8f366e6",
        targetAmount: 100000000,
        totalAmount: 1006835591,
        deadline: "2022-03-07",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
      {
        category: "푸드",
        nickname: "양과자점 플레지르",
        title: "버터 스카치 풍미의 꾸덕한 초콜릿 클래식 쿠키 2!",
        image:
          "https://tumblbug-pci.imgix.net/98cf4966a9c448c57f569b410313eb8c1a692714/7fb4e641edc9b6e51aba05fc217b8d1ecf1da536/2ea24362fb83e00bef71b5cb03fd2c29865cffd6/999ecbc9-d040-404d-82a4-078b0d63670f.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9ef9c166187d335051e9284569520cc2",
        targetAmount: 500000,
        totalAmount: 5419400,
        deadline: "2022-03-15",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
      {
        category: "푸드",
        nickname: "위아루이",
        title: "딸기밭에 피어오른 루이보스, 그리고 그 친구들의 이야기",
        image:
          "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/64b79c5d93260fa3ec7c846dbd4999f9e1b3503f/0d7eff119e81745918354dbbc850ea6878a072eb/8632a153-9e90-4ef4-99b1-eec10c4e201f.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=2abe8c9d2b861a1a830f026ccfb4c50b",
        targetAmount: 1000000,
        totalAmount: 10617500,
        deadline: "2022-02-22",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
      {
        category: "음악",
        nickname: "(주)뮤직파라디소",
        title: "이누야샤 OST 앨범 재발매 프로젝트",
        image:
          "https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/00e0280cfcd37839d70cce63ea3c89360ef59af5/f2f822b0d93b98c4f50801a243776ffcc18e55cd/224c8b53-8589-4d04-be03-a8b2e4c0b83b.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e0ed2c1f02c2bdff4ecf7f21d8f366e6",
        targetAmount: 100000000,
        totalAmount: 1006835591,
        deadline: "2022-03-07",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
      {
        category: "푸드",
        nickname: "양과자점 플레지르",
        title: "버터 스카치 풍미의 꾸덕한 초콜릿 클래식 쿠키 2!",
        image:
          "https://tumblbug-pci.imgix.net/98cf4966a9c448c57f569b410313eb8c1a692714/7fb4e641edc9b6e51aba05fc217b8d1ecf1da536/2ea24362fb83e00bef71b5cb03fd2c29865cffd6/999ecbc9-d040-404d-82a4-078b0d63670f.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9ef9c166187d335051e9284569520cc2",
        targetAmount: 500000,
        totalAmount: 5419400,
        deadline: "2022-03-15",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
      {
        category: "푸드",
        nickname: "위아루이",
        title: "딸기밭에 피어오른 루이보스, 그리고 그 친구들의 이야기",
        image:
          "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/64b79c5d93260fa3ec7c846dbd4999f9e1b3503f/0d7eff119e81745918354dbbc850ea6878a072eb/8632a153-9e90-4ef4-99b1-eec10c4e201f.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=2abe8c9d2b861a1a830f026ccfb4c50b",
        targetAmount: 1000000,
        totalAmount: 10617500,
        deadline: "2022-02-22",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
      {
        category: "푸드",
        nickname: "양과자점 플레지르",
        title: "버터 스카치 풍미의 꾸덕한 초콜릿 클래식 쿠키 2!",
        image:
          "https://tumblbug-pci.imgix.net/98cf4966a9c448c57f569b410313eb8c1a692714/7fb4e641edc9b6e51aba05fc217b8d1ecf1da536/2ea24362fb83e00bef71b5cb03fd2c29865cffd6/999ecbc9-d040-404d-82a4-078b0d63670f.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=9ef9c166187d335051e9284569520cc2",
        targetAmount: 500000,
        totalAmount: 5419400,
        deadline: "2022-03-15",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
      {
        category: "푸드",
        nickname: "위아루이",
        title: "딸기밭에 피어오른 루이보스, 그리고 그 친구들의 이야기",
        image:
          "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/64b79c5d93260fa3ec7c846dbd4999f9e1b3503f/0d7eff119e81745918354dbbc850ea6878a072eb/8632a153-9e90-4ef4-99b1-eec10c4e201f.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=2abe8c9d2b861a1a830f026ccfb4c50b",
        targetAmount: 1000000,
        totalAmount: 10617500,
        deadline: "2022-02-22",
        contents:
          "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
      },
    ],
  },

  ARTICLES_MY: {
    result: true,
    mainProjects: [
      {
        category: "음악",
        nickname: "유저",
        title: "타이틀",
        image:
          "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/32efb6cbb58d802eff4474dd0a226465dac6d959/6a57b4916d6420ebb8b2c96ef8e397d939129943/5d29c128-2024-4ac1-b83a-8ed40ff0b819.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=d2b0a9a7e870a03a52e14730dc0071e9",
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: "2022-04.01",
        contents: "안녕하세요~~~~~~",
      },
    ],
  },

  ARTICLES_CATE: {
    result: true,
    mainProjects: [
      {
        category: "음악",
        nickname: "유저",
        title: "타이틀",
        image:
          "https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871",
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: "2022-04.01",
        contents: "안녕하세요~~~~~~",
      },
    ],
  },

  ARTICLES_SEARCH: {
    result: true,
    mainProjects: [
      {
        category: "음악",
        nickname: "유저",
        title: "타이틀",
        image:
          "https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871",
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: "2022-04.01",
        contents: "안녕하세요~~~~~~",
      },
    ],
  },

  ARTICLES_DETAIL: {
    result: true,
    mainProjects: [
      {
        category: "음악",
        nickname: "유저",
        title: "타이틀",
        image:
          "https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871",
        targetAmount: 20000000,
        totalAmount: 1000000,
        deadline: "2022-04.01",
        contents: "안녕하세요~~~~~~",
      },
    ],
  },

  DONATION: { result: true },

  DONATION_CANCEL: { result: true },

  COMMENTS: {
    result: true,
    comments: [
      {
        commentId: "asdf1234",
        articleId: "asdf12345",
        nickname: "닉네임",
        content: "와 와 멋지다",
        email: "asdf@asdf.com",
      },
    ],
  },

  COMMENTS_WRITE: { result: true, msg: "작성 완료되었습니다." },

  COMMENTS_UPDATE: { result: true, msg: "수정 완료되었습니다." },

  COMMENTS_DELETE: { result: true, msg: "삭제 완료되었습니다." },

  LOGIN_CHECK: {
    result: true,
    email: "asdf@naver.com",
    nickname: "유저닉네임",
  },
};
