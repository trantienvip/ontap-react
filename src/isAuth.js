export const auth = () => {
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    }else{
        return false;
    }
}