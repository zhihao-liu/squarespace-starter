import url from 'url';

export const HOST = 'https://5bb19332.ngrok.io';

export const IG_LOGIN_URL = `https://api.instagram.com/oauth/authorize?client_id=534405240818085&redirect_uri=${
    url.resolve(HOST, 'questions')
}&scope=user_profile,user_media&response_type=code`;
