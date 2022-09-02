import React from "react";

const Navbar = () => {
    return (
        <div className="flex pt-2 items-center">
            
            <h1 className="ml-8 text-4xl">freepik</h1>
            <div className="ml-10">
                <a href="#" className="mx-3 cursor-pointer hover:text-gray-300">Vectors</a>
                <a className="mx-3 cursor-pointer hover:text-gray-300">Photos</a>
                <a className="mx-3 cursor-pointer hover:text-gray-300">PSD</a>
                <a className="mx-3 cursor-pointer hover:text-gray-300">Fonts</a>
                <a className="mx-3 cursor-pointer hover:text-gray-300">Categories</a>
                <a className="mx-3 cursor-pointer hover:text-gray-300">Collections</a>
                <a className="mx-3 cursor-pointer hover:text-gray-300">More</a>
            </div>

            <div className="ml-auto mr-10">
                <a className="mx-3 cursor-pointer hover:text-gray-300">Sell your content</a>
                <a className="mx-3 cursor-pointer text-yellow-400 hover:text-yellow-600">Pricing</a>
                <a className="mx-3 cursor-pointer hover:text-gray-300">Log in</a>
                <a className="mx-3 cursor-pointer hover:text-gray-300 border-2 border-white p-1 rounded-md">Sign up</a>
            </div>

        </div>
    )
}

export default Navbar;