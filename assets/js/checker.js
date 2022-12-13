
checkAuthUser();
function checkAuthUser() { 
    if (!sessionStorage.signInWithEmailAndPassword) { 
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = 'login.html';
    }
}


