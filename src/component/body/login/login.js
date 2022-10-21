import React from 'react';
import{useState} from 'react';
import GoogleLogin from 'react-google-login';

function Login(){

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null
    );
    const handleLogin = async (googleData) => {
    const res = await fetch('/api/google-login', {
        method: 'POST',
        body: JSON.stringify({
        token: googleData.tokenId,
        }),
        headers: {
        'Content-Type': 'application/json',
        },
    });

    const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
    };

    const handleFailure = (result) => {
        console.log(result);
    };

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
    };
    
      return (
        <div className="App">
          <header className="App-header">
            <h1>React Google Login App</h1>
            <div>
              {loginData ? (
                <div>
                  <h3>You logged in as {loginData.email}</h3>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <GoogleLogin
                  clientId={"371587319454-uvpmdvqtmqk228o4fm1430d8giomm9md.apps.googleusercontent.com"}
                  buttonText="Log in with Google"
                  onSuccess={handleLogin}
                  onFailure={handleFailure}
                  cookiePolicy={'single_host_origin'}
                ></GoogleLogin>
              )}
            </div>
          </header>
        </div>
      );
}
export default Login;