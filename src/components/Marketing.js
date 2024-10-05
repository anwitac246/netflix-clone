export const Marketing = () => {
    return (
        <div className="content">
            <div className="main-content">
                <span className="unlimited">
                    Unlimited movies, TV shows and more
                </span>
                <span className="pricing">
                    Starts at ₹149. Cancel at any time.
                </span>
                <span className="registration">
                    Ready to watch? Enter your email to create or restart your membership.
                </span>
            </div>
            <br/>
            <div className="registration-form">
                <form>
                    <input type="email" placeholder="Email Address" className="input-field"/>
                    <button type="submit" className="get-started"><div className="align">Get Started <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></div></button>
                </form>
            </div>

        </div>
    );
}