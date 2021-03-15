import React from 'react'
import './Assets/Login.css'
import { loginUrl } from './spotify'
// rfce is a es7 handy snippet that rides a functional component fully
function Login() {
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify logo" />
            {/* Login with Spotify button */}

            <a href={loginUrl}>LOGIN WITH SPOTIFY</a> {/* This is here to redirect the user to login into their spotify account */}

            <footer id="footer">
                <div class="social-media-links">
                    <a href="https://www.facebook.com/" class="fa fa-facebook" aria-label="Facebook"></a>
                    <a href="https://twitter.com/" class="fa fa-twitter" aria-label="Twitter"></a>
                    <a href="https://www.instagram.com/" class="fa fa-instagram" aria-label="Instagram"></a>
                    <a href="https://www.youtube.com/" class="fa fa-youtube" aria-label="Youtube"></a>
                </div>
                <div className='footer-text' >
                    <div className="copyright" >
                        <p >&copy; 2020 Redesign Spotify | ALL RIGHTS RESERVED.</p>  
                        <a href="Contact.js">| Contact |</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Login
