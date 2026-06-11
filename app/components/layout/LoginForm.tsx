import { useState } from 'react';

interface LoginFormProps {
    isVisible: boolean;
    onSubmit: (email: string, password: string) => void;
    onForgotPassword: () => void;
}

export default function LoginForm({ isVisible, onSubmit, onForgotPassword }: LoginFormProps) {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(loginEmail, loginPassword);
    };

    return (
        <form
            method="post"
            action="/account/login"
            id="customer_login"
            acceptCharset="UTF-8"
            data-login-with-shop-sign-in="true"
            name="login"
            className="Form Form--spacingTight"
            style={{ display: isVisible ? 'block' : 'none' }}
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form_type" value="customer_login" />
            <input type="hidden" name="utf8" value="✓" />

            <header className="Form__Header">
                <h1 className="Form__Title Heading u-h1">Login</h1>
                <p className="Form__Legend">Please enter your e-mail and password:</p>
            </header>

            <div className="Form__Item">
                <input
                    type="email"
                    className="Form__Input"
                    name="customer[email]"
                    required
                    placeholder="Email"
                    aria-label="Email"
                    autoFocus
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                />
                <label className="Form__FloatingLabel">Email</label>
            </div>

            <div className="Form__Item">
                <input
                    type="password"
                    className="Form__Input"
                    name="customer[password]"
                    required
                    placeholder="Password"
                    aria-label="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                <label className="Form__FloatingLabel">Password</label>
                <button
                    type="button"
                    className="Form__ItemHelp Link Link--primary"
                    onClick={onForgotPassword}
                >
                    Forgot password?
                </button>
            </div>

            <button type="submit" className="Form__Submit Button Button--primary Button--full">
                Login
            </button>

            <div className="Form__Hint Form__Hint--center">
                <span className="Text--subdued">Don't have an account?</span>
                <span >Create one</span>
                {/* <a href="/account/register" className="Link Link--secondary">Create one</a> */}
            </div>
            <input type="hidden" name="return_url" value="/account" />
        </form>
    );
}