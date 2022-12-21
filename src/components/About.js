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
                        Hello!
                    </h1>
                    <h2 className="text-lg text-purple-700 flex justify-center mb-12 canada">
                        I'm {author.name}, a person with great curiosity and an eternal learner, and a dancer sometimes. 
                    </h2>
                    <h2 className="text-lg text-purple-700 flex justify-center mb-12 canada">
                        In July of 2021, I graduated from college. I started working for a local company for
                        a couple of months where I created a technical manual for a software project. In 2022, I 
                        entered Infosys as a Software Engineer to learn about backend development with Java and Angular.
                    </h2>
                    <h2 className="text-lg text-purple-700 flex justify-center mb-12 canada">
                        Later, I created my own web page (this one) to share how I work with my projects, ideas and what technologies
                        I am currently learning and implementing. My interests go towards building applications from scratch, 
                        so any tech stack is welcome for me. I find excited the entire process of an application's lifecycle, 
                        from its birth to its production and maintainment.
                    </h2>
                    <h2 className="text-lg text-purple-700 flex justify-center mb-12 canada">
                        In my free time I am learning Chinese, cooking, reading, dancing or hanging out with my loved ones.
                        I also love bread and ice cream 🍞🍦
                    </h2>
            </section>
        </main>
    )
}