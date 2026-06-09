import { Link, useLocation } from "react-router";
import { MobileAccountIcon, MobileCartIcon, MobileHomeIcon, MobileNnUrlIcon, MobileSearchIcon } from "~/images/Icons";

export default function MobileBottomBar() {
    const location = useLocation();

    return (
        <div className="mobile-bottom-bar">
            <div className="bottom-bar-items">
                <div className="bar-item">
                    <Link to="/" className={location.pathname === "/" ? "active" : ""} >
                        <span className="icon icon-mobile-home">
                            <MobileHomeIcon />
                        </span>
                    </Link>
                </div>

                <div className="bar-item mobile-product-search-icon">
                    <Link to="/search" className={location.pathname === "/search" ? "active" : ""} >
                        <span className="mobile-product-search-icon">
                            <span className="icon icon-mobile-search">
                                <MobileSearchIcon />
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="bar-item menu-icon" data-vendor="">MENU</div>
                <div className="bar-item nn-url-icon">
                    <Link to="/collections/rare-rabbit-innerwear" className={location.pathname === "/collections/rare-rabbit-innerwear" ? "active" : ""}>
                        <span className="icon icon-nn-url-icon">
                            <MobileNnUrlIcon />
                        </span>
                    </Link>
                </div>

                <div className="bar-item account-icon">
                    <Link to="/account" className={location.pathname === "/account" ? "active" : ""}>
                        <span className="icon icon-mobile-account">
                            <MobileAccountIcon />
                        </span>
                    </Link>
                </div>

                <div className="bar-item cart-icon">
                    <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
                        <span className="icon icon-mobile-cart">
                            <MobileCartIcon />
                        </span>
                        <p className="Header__CartCount cart-count">20</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}