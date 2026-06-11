import { useState } from 'react';
// import './AccountPage.css';
import LoginForm from '~/components/layout/LoginForm';
import RecoverPasswordForm from '~/components/layout/RecoverPasswordForm';

export default function AccountPage() {
    const [showRecoverForm, setShowRecoverForm] = useState(false);

    const handleLoginSubmit = (email: string, password: string) => {
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };

    const handleRecoverSubmit = (email: string) => {
        // Handle password recovery logic here
        console.log('Password recovery for:', email);
    };

    return (
        <main>
            <section data-section-id="login" data-section-type="login">
                <div className="Container">
                    <div className="PageContent PageContent--fitScreen PageContent--extraNarrow">

                        <LoginForm
                            isVisible={!showRecoverForm}
                            onSubmit={handleLoginSubmit}
                            onForgotPassword={() => setShowRecoverForm(true)}
                        />

                        <RecoverPasswordForm
                            isVisible={showRecoverForm}
                            onSubmit={handleRecoverSubmit}
                            onBackToLogin={() => setShowRecoverForm(false)}
                        />

                    </div>
                </div>
            </section>
        </main>
    );
}