function auth(login, pass) {
    if (login === 'login' && pass === 'pass') {
        return 'welcome';
    }else {
        return 'error';
    }
}