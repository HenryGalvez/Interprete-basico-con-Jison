import logo from '../logo.svg';

function Header() {
    return (
        <div className="navbar navbar-dark bg-dark mb-2">
            <div className="container-fluid ">
                <div className="navbar-brand m-auto">
                    <img className="rotate" src={logo} alt="" width="60" height="60" />
                    <span id="title-page" className="">Basic Interpreter</span>
                    <img className="rotate" src={logo} alt="" width="60" height="60" />
                </div>
            </div>
        </div>
    );
}

export default Header;