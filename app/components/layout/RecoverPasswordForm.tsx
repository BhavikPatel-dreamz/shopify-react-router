import { useState } from 'react';

interface RecoverPasswordFormProps {
    isVisible: boolean;
    onSubmit: (email: string) => void;
    onBackToLogin: () => void;
}

export default function RecoverPasswordForm({ isVisible, onSubmit, onBackToLogin }: RecoverPasswordFormProps) {
    const [recoverEmail, setRecoverEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(recoverEmail);
    };

    return (
        <form
            method="post"
            action="/account/recover"
            id="recover_customer_password"
            acceptCharset="UTF-8"
            name="recover"
            className="Form Form--spacingTight"
            style={{ display: isVisible ? 'block' : 'none' }}
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form_type" value="recover_customer_password" />
            <input type="hidden" name="utf8" value="✓" />

            <header className="Form__Header">
                <h1 className="Form__Title Heading u-h1">Recover password</h1>
                <p className="Form__Legend">Please enter your email:</p>
            </header>

            <div className="Form__Item">
                <input
                    type="email"
                    className="Form__Input"
                    name="email"
                    required
                    placeholder="Email"
                    aria-label="Email"
                    autoFocus
                    value={recoverEmail}
                    onChange={(e) => setRecoverEmail(e.target.value)}
                />
                <label className="Form__FloatingLabel">Email</label>
            </div>

            <button type="submit" className="Form__Submit Button Button--primary Button--full">
                Recover
            </button>

            <div className="Form__Hint Form__Hint--center">
                <span className="Text--subdued">Remember your password?</span>
                <button
                    type="button"
                    className="Link Link--secondary"
                    onClick={onBackToLogin}
                >
                    Back to login
                </button>
            </div>
        </form>
    );
}