import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                date,
                description,
                postType,
                link,
                tags
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);
    
    
    return (
        <main className="bg-yellow-500 min-h-screen p-10">
            <section className="container mx-auto">
                <h1 className="text-center text-5xl flex justify-center rubik text-purple-800">
                    Welcome to my blog!
                </h1>
                <h2 className="text-center text-lg text-purple-700 flex justify-center mt-4 mb-8 canada">
                    I write about anything I have fun doing🍰🍚🍦
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { postData && postData.map((post, index) => (
                        <article className="relative rounded-lg shadow-lg bg-white p-6">
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <h3 className="text-purple-800 text-2xl font-bold hover:text-yellow-500 canada">
                                    <a
                                        href={post.link}
                                        alt={post.title}
                                        target="_blank"
                                        rel="nooopener noreferrer"
                                    >
                                        {post.title}
                                    </a>
                                </h3>
                                <div className="text-gray-500 text-xs">
                                    <span>
                                        <strong className="font-bold canada">Date:{" "}</strong>
                                        {new Date(post.date).getMonth().toString()  + "/" + new Date(post.date).getFullYear().toString()}
                                    </span>
                                    <span>
                                    <strong className="font-bold canada ml-3">Type:{" "}</strong>
                                        {post.postType}
                                    </span>
                                    <p className="my-2 text-lg text-gray-700 leading-relaxed">
                                        {post.description}
                                    </p>
                                    <a 
                                        href={post.link} 
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        className="text-yellow-500 font-bold canada hover:text-purple-400 text-xs"
                                    >
                                            Read post{" "}
                                            <span role="img" aria-label="right pointer">
                                                🎃
                                            </span>
                                    </a>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}