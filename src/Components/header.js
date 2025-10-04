import "./../Styles/header.style.css";

const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="header-box">
                <div className="header-content">
                    <div className="profile-container">
                        <img width={25} height={25} alt="profile" src="https://up.yimg.com/ib/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?pid=Api&rs=1&c=1&qlt=95&w=98&h=98" />
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