const TokenKey = 'Admin-Token';

export function getToken() {
	return sessionStorage.getItem(TokenKey);
}

export function setToken(token: string) {
	console.log('设置token：', TokenKey, token);
	return sessionStorage.setItem(TokenKey, token);
}

export function removeToken() {
	sessionStorage.removeItem(TokenKey);
}
