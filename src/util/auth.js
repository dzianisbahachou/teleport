export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}

export function setToken(token) {
    localStorage.setItem('token', token);
}

export function getToken() {
    const duration = getTokenDuration();

    if (duration < 0) {
        return null;
    }

    return localStorage.getItem('token');
}

export function removeToken() {
    localStorage.removeItem('token');
}

export function removeExpiration() {
    localStorage.removeItem('expiration');
}
