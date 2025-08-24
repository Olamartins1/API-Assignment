import React, { useState } from "react";
import "./HeaderStyle.css";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import ShopDrop from "./ShopDrop";
const Header = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <div className="Header_Body">
      <header className="Header_Wrapper">
        <h3>
          Top<span>Shop</span>
        </h3>

        <article className="right_Header_side">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li onMouseEnter={() => setShowDrop(true)}>Shop</li>
            </ul>
          </nav>
          <div className="Profile_with_Icon">
            <div className="icon_with_count">
              <FaCartShopping className="icon" />
              <div className="icon_Count">0</div>
            </div>
            <div className="icon_with_count">
              <FaHeart className="icon" />
              <div className="icon_Count">0</div>
            </div>
            <FaSearch
              className="icon"
              onClick={() => setSearchShow(!searchShow)}
            />
            <FaUserCircle
              className="icon profil"
              onClick={() => setProfileShow(!profileShow)}
            />
            {profileShow ? <div className="Show_Profile_Drop"></div> : null}
            {!mobileShow ? (
              <RiMenuUnfold3Fill
                className="icon Menu_icon"
                onClick={() => setMobileShow(false)}
              />
            ) : (
              <RiMenuUnfold4Fill
                className="icon Menu_icon"
                onClick={() => setMobileShow(false)}
              />
            )}
          </div>

          {showDrop ? (
            <div
              className="Drop_Show_Body"
              onMouseLeave={() => setShowDrop(false)}
            >
              <ShopDrop />
            </div>
          ) : null}
          {mobileShow ? <div className="Mobile_Nav"></div> : null}
          {searchShow ? <div className="Search_body_show"></div> : null}
        </article>
      </header>
    </div>
  );
};

export default Header;
