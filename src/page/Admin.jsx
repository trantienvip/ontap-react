
import { Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div className="container">
            <h1>Admin</h1>
            <Outlet/>
        </div>
    )
}

export default Admin;