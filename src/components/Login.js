import React from "react";
import { loginUrl } from "../spotify";
import "./Login.css";

function Login() {
    return (
        <div className="login">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwSDcPB5BiNYYBFYC9kcG8st464LzORMRsA&usqp=CAU"
                alt=""
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
