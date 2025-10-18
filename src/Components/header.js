import "./../Styles/header.style.css";
import profile from "./../assets/profile-vicky.jpeg";
const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="header-box">
                <div className="header-content">
                    <div className="profile-container">
                        <img width={35} height={35} alt="profile" src={profile} />
                        <div>Vicky</div>
                    </div>
                    <div className="nav-bar">
                        <div>
                            Work
                        </div>
                        <div>Resources</div>
                        <div className="contact-button">
                            <div className="contact">
                                Contact
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;