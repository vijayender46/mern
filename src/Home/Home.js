import { Outlet } from "react-router-dom";
import About from "../sections/About";
import Blogs from "../sections/Blogs";
import Hero from "../sections/Hero";
import WhatIDo from "../sections/WhatIDo";
const Home = () => {
    return (
        <>         
        <Hero />
        <WhatIDo />
        <About />
        <Blogs />
        <Outlet />
        </>
    )
}

export default Home;