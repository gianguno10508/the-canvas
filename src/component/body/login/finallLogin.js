import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { connect } from 'react-redux';
import {actUserLogin} from '../../../actions/index'

function LoginWithGG(props) {
    const [ profile, setProfile ] = useState([]);
    const clientId = '929552007161-riq1q0j3io9tpqvkeht2maj5b2cmkgch.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    useEffect(() => {
        props.dispatchUserLogin(profile)
    },[profile]);

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };

    return (
        <div className='finallLogin'>
            <h4>Google Login</h4>        
            {!Array.isArray(profile) ? (
                <div>
                    {profile === null ? 
                        <>
                            <i className="fa-solid fa-user"></i>
                            <h5>No email to login</h5>
                            <GoogleLogin
                                clientId={clientId}
                                buttonText="Sign in with Google"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />
                        </>
                        : 
                        <>
                            <img src={profile.imageUrl} alt="userimage" />
                            <h4>User Logged in</h4>
                            <p>Name: {profile.name}</p>
                            <p>Email Address: {profile.email}</p>
                            <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                        </>
                    }                
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    );
}
const mapStateToProps = (state) =>{
    return{
        dataUserLogin: state.dataUserLogin,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        dispatchUserLogin:(data) =>{
            dispatch(actUserLogin(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginWithGG);