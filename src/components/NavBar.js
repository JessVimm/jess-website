import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-purple-900">
            <div className="grid place-items-center bg-purple-900">
                <nav>
                    <NavLink to="/post" 
                                className="items-center rounded px-2 text-purple-300 hover:text-white canada"
                                activeClassName="text-white bg-purple-700"
                    >
                        Blog 📝 
                    </NavLink>
                    <NavLink to="/" exact 
                        activeClassName="text-white"
                        className="items-center text-purple-100 px-2 hover:text-orange-600 text-5xl cursive tracking-widest"
                    >
                        Jess
                    </NavLink>
                    <NavLink to="/about" 
                            className="items-center rounded text-purple-300 hover:text-white canada"
                            activeClassName="text-white bg-purple-700"
                    >
                        👋🏻 About
                    </NavLink>
                </nav>
                <div className="mt-2 mb-3">
                    <SocialIcon 
                        url="mailto:vic.mtz.med@gmail.com" 
                        className="mx-1" 
                        target="_blank" 
                        fgColor="#ffda2f" 
                        bgColor="#44337a"
                        style={{ height: 30, width: 30 }}/>
                    <SocialIcon 
                        url="https://github.com/JessVimm" 
                        className="mx-1" 
                        target="_blank" 
                        fgColor="#ffda2f" 
                        bgColor="#44337a"
                        style={{ height: 30, width: 30 }}/>
                    <SocialIcon 
                        url="https://www.linkedin.com/in/victoria-m-538918250/" 
                        className="mx-1" 
                        target="_blank" 
                        fgColor="#ffda2f" 
                        bgColor="#44337a"
                        style={{ height: 30, width: 30 }}/>
                </div>
            </div>
        </header>
    )
}