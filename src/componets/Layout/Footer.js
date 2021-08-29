import React from "react";
import FooterStyles from "./FooterStyles";

import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../images/icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <FooterStyles>
      <div id="container">
        <div id="container-1">
          <p>Shortly</p>
        </div>
        <div id="container-2">
          <div id="sub-footer">
            <h1>Features</h1>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div id="sub-footer">
            <h1>Resources</h1>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div id="sub-footer">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Out Team</li>
              <li>Carrers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div id="media-acoounts">
          <div id="icon">
            <FacebookIcon />
          </div>
          <div id="icon">
            <TwitterIcon />
          </div>
          <div id="icon">
            <PinterestIcon />
          </div>
          <div id="icon">
            <InstagramIcon />
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}
