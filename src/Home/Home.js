import { Outlet } from "react-router-dom";
import Hero from "../sections/Hero";
import WhatIDo from "../sections/WhatIDo";
const Home = () => {
    return (
        <>         
        <Hero />
        <WhatIDo />
        <Outlet />
        </>
    )
}

export default Home;