import { useState } from "react";

export default function Header({ children }) {

    return (
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">{ children }</h1>
    );
}