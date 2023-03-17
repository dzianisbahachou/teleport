const servicePath = 'http://localhost:5000/api/';

export default class URLPaths {
    
    static getLogin() {
        return (servicePath + 'admin/login');
    }
}
