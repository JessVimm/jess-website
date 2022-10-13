import React from "react";
import image from "../spooky.png";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Happy Spooky Times" className="absolute object-cover w-full h-full"/>
            <section className="relative grid h-screen place-items-center justify-center mr-8 ml-8">
                <h1 className="text-center text-4xl p-4 tracking-wide leading-snug  text-white font-bold bg-purple-800 bg-opacity-75 rounded-lg">Hi, I'm Jess! Welcome to my website 👻💀</h1>
            </section>
        </main>
    )
}