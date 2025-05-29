import React from 'react';

const LoginPage = () => {
    const REST_API_KEY = '';
    const REDIRECT_URI = '';
    const link = "https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code"


    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <div>
            <button type='button' onClick={loginHandler}>
                카카오 로그인
            </button>
            <button type='button' onClick={loginHandler}>
                구글 로그인
            </button>
        </div>
    );
};
export default LoginPage;