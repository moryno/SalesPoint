import React from "react";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on SalesPoint</span>
            <span>Buying on SalesPoint</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From SalesPoint</h2>
            <span>SalesPoint Business</span>
            <span>SalesPoint Pro</span>
            <span>SalesPoint Logo Maker</span>
            <span>SalesPoint Guides</span>
            <span>Get Inspired</span>
            <span>SalesPoint Select</span>
            <span>ClearVoice</span>
            <span>SalesPoint Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>SalesPoint</h2>
            <span>© SalesPoint International Ltd. {year}</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="twitter" />
              <img src="/img/facebook.png" alt="facebook" />
              <img src="/img/linkedin.png" alt="linkedin" />
              <img src="/img/pinterest.png" alt="pinterest" />
              <img src="/img/instagram.png" alt="instagram" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="language" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="coin" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="accessibility" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
