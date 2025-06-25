import React from 'react'
import image from '../../assets/th.png'
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={image}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React.js is a powerful JavaScript library used for building user interfaces, especially for single-page applications. Developed by Facebook, it enables developers to create large web apps that can update and render efficiently in response to data changes. With its component-based architecture, React promotes reusability and modularity. JSX, a syntax extension, allows writing HTML-like code within JavaScript, improving readability.
                        </p>
                        <p className="mt-4 text-gray-600">
                           React’s virtual DOM optimizes rendering by minimizing direct interactions with the actual DOM. Its ecosystem supports state management tools like Redux and React Context. React continues to be widely adopted by developers and companies worldwide for creating modern, responsive applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
