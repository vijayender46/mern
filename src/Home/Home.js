import { Outlet } from "react-router-dom";
import About from "../sections/About";
import Blogs from "../sections/Blogs";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Illustration from "../sections/Illustration";
import WhatIDo from "../sections/WhatIDo";
const Home = () => {
    return (
        <>         
        <Hero />        
        <WhatIDo />
        <About />
        <Blogs />
        <Experience />
        <Illustration />
        <Outlet />
        </>
    )
}

export default Home;