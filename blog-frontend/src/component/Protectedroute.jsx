import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function Protectedroute() {
    const token = localStorage.getItem("token")
    return token ? <Outlet /> : <Navigate to="/login" />
}
export default Protectedroute