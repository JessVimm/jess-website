import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";



export default function About() {

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
            }`)
            .then((data) => setAuthor(data[0]))
            .catch(console.log.error);
    }, []);

    if (!author) return <div>Loading...</div>

    return (
        <main className="relative bg-yellow-500 min-h-screen p-10">
            <section className="container mx-auto rounded-lg shadow-lg bg-white p-8">
                    <h1 className="text-5xl flex justify-center canada font-bold text-purple-800">
                        I'm {author.name}!
                    </h1>
                    <h2 className="text-lg text-purple-700 flex justify-center mb-12 canada">
                        (coming soon...)
                    </h2>
            </section>
        </main>
    )
}