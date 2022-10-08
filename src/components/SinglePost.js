import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            body,
            "name": author->name,
            "authorImage": author->image
        }`)
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>

    return (
        <main className="bg-yellow-400 min-h-screen p-10">
            <article className="container shadow-lg mx-auto bg-white rounded-lg">
                <header className="relative">
                    <div className="relative h-full w-full flex items-center justify-center p-2">
                        <div className="bg-white bg-opacity-75 rounded p-4">
                            <h1 className="rubik text-2xl lg:text-6xl mb-2">
                                {singlePost.title}
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                <img src={ urlFor(singlePost.authorImage).url() } 
                                    alt={ singlePost.name }
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="canada flex items-center pl-2 text-xl">
                                    { singlePost.name }
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="px-12 lg:px-24 py-2 lg:py-6 canada lg:prose max-w-full">
                    <BlockContent 
                        blocks={singlePost.body} 
                        projectId="nplnws0t" 
                        dataset="production"
                    />
                </div>
            </article>
        </main>
    );
}