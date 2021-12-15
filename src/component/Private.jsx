import { isAuthenticated } from "../isAdmin";

const Private = ({ children }) => {
    let auth = isAuthenticated()
    
    if (!auth || auth.user.id !== 1) {
        return (
            <div className="container">
                bạn không có quyền
            </div>
        )
    }
    return children
}

export default Private;