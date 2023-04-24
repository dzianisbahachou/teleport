export function getExpiration() {
    const expiration = localStorage.getItem('expirationComments');
    if (!expiration) {
        return null;
    }
    
    if (isExpired(expiration)) {
        return expiration;
    } else {
        localStorage.removeItem('expirationComments');
        return null;
    }
}

function isExpired(expiration) {
    return (+expiration + 86400000 >= Date.now());
}