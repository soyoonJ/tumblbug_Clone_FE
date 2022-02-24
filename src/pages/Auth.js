import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Auth = () => {
  const dispatch = useDispatch();

  const REST_API_KEY = '7b3f8ab784a724634fbb9c5250dd699e';
  const REDIRECT_URI = 'http://tumblbugclone.s3-website.ap-northeast-2.amazonaws.com/oauth/kakao/callback';
  const CLIENT_SECRET = 'rf1aaPug1Mcg9hjRpjZinu6CharA7byO';
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  const history = useHistory();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );

      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      dispatch(userActions.getKakaoProfile());
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return null;
};
export default Auth;
