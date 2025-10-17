import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const HomePage = () => {
  return (
    <div className="h-[100vh] ">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default HomePage