import React from 'react';
import {useState} from 'react';
import {GoogleLogin, GoogleLogout}from "react-google-login";

function LgTest(){
    const urlId ='929552007161-q1q56e17pvi1ateke3cfcvvumq6vh15q.apps.googleusercontent.com';
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);

    const responseGoogle = response => {
        console.log(response);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
        setLoginStatus(true);
    };

    const logout = () => {
        console.log("logout");
        setLoginStatus(false);
      };
    //   console.log(responseGoogle)
    return(
        <div className="App">
            <h1>Login with Google</h1>
            {!loginStatus && (
                <GoogleLogin
                clientId={urlId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                />
            )}
            {loginStatus && (
                <div>
                <h2>Welcome {name}</h2>
                <h2>Email: {email}</h2>
                <img src={url} alt={name} />
                <br />
                <GoogleLogout
                    clientId={urlId}
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                />
                </div>
            )}
         
            </div>
    )
}
export default LgTest;

// 929552007161-q1q56e17pvi1ateke3cfcvvumq6vh15q.apps.googleusercontent.com
// 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