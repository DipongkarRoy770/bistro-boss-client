import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import login from '../assets/others/authentication1.png'
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
const Login = () => {
    const captchaRef = useRef(null)

    const [disabled, SetDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
    }

    const captchaValidation = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value) == true) {
            SetDisabled(false)
            Swal.fire({
                title: "Good job!",
                text: "Captcha Matched",
                icon: "success"
            })

        }

        else {
            SetDisabled(true)
            Swal.fire({
                title: "Good job!",
                text: "Captcha Does Not Match",
                icon: "error"
            })

        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className=" px-6 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplateNoReload />
                            </label>
                            <input type="text" ref={captchaRef} name='captcha' placeholder="captcha" className="input input-bordered" required />
                            <button onClick={captchaValidation} className="btn btn-sm mt-2 bg-fuchsia-300">Validation</button>

                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;