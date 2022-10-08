import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-purple-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-orange-600 text-3xl font-bold cursive tracking-widest"
                >
                        Jess
                    </NavLink>
                    <NavLink to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-300 hover:text-white canada"
                        activeClassName="text-white bg-purple-700"
                    >
                        Blog
                    </NavLink>
                    <NavLink to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-300 hover:text-white canada"
                        activeClassName="text-white bg-purple-700"
                    >
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="mailto:vic.mtz.med@gmail.com" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#ffffff"  
                        bgColor="#ecc94b"
                        style={{ height: 35, width: 35 }}/>
                    <SocialIcon 
                        url="https://github.com/JessVimm" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#ffffff" 
                        bgColor="#ecc94b"
                        style={{ height: 35, width: 35 }}/>
                    <SocialIcon 
                        url="https://www.linkedin.com/in/victoria-m-538918250/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#ffffff" 
                        bgColor="#ecc94b"
                        style={{ height: 35, width: 35 }}/>
                    <SocialIcon 
                        url="https://dev.to/jessvimm" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#ffffff" 
                        bgColor="#ecc94b"
                        style={{ height: 35, width: 35 }}/>
                </div>
            </div>
        </header>
    )
}