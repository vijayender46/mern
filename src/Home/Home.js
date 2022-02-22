import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <>
        <h1 className="coming-soon">Comming Soon</h1>
        <Outlet />
        </>
    )
}

export default Home;