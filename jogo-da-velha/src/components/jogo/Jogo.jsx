import React from "react";
import "./Jogo.css";

import circle from "./../assets/anel-circular.png";
import x from "./../assets/x.png";

function Jogo() {
    return (
        <>
        <div className="container flex flex-col items-center pt-4 min-h-screen">
            <h2 className="title text-white">Jogo da velha</h2>
            <hr className="divider" />
        </div>
        </>
    )
}
export default Jogo;
