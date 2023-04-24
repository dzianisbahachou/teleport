export function getExpiration() {
    const expiration = localStorage.getItem('expirationComments');
    if (!expiration) {
        return;
    }
    
    if (isExpired(expiration)) {
        return expiration;
    } else {
        localStorage.removeItem('expirationComments');
        return;
    }
}

function isExpired(expiration) {
    return (+expiration + 86400000 >= Date.now());
}