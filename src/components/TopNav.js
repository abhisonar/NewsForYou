/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './TopNav.css'
function TopNav() {
    return (
      <div className="topnav">
        <div className="topnav-offer">
          <div className="offer-logo">
            <img
              src="https://img.icons8.com/nolan/64/offer-hot-price.png"
              alt="hot price"
            />
          </div>
          <div className="offer">
            <strong>For Donations:</strong> Contact NewsForYou.com{" "}
          </div>
        </div>
        <div className="topnav-content">
          <div className="topnav-item" id="support">
            <div>
              <img
                src="https://img.icons8.com/ios-filled/50/000000/online-support.png"
                alt="live chat"
              />
            </div>
            <div>24*7 support</div>
          </div>
          <div className="topnav-item" id="live-chat">
            <div>
              <img
                src="https://img.icons8.com/pastel-glyph/50/000000/chat.png"
                alt="live chat"
              />
            </div>
            <div>live chat</div>
          </div>
          <div className="topnav-item" id="email">
            <div>
              <img
                src="https://img.icons8.com/wired/64/000000/email.png"
                alt="email"
              />
            </div>
            <div>
              <a href="mailto:support@isquarehost.in" target="_blank">
                email
              </a>
            </div>
          </div>
          <div className="topnav-item" id="call">
            <div>
              <img
                src="https://img.icons8.com/dotty/64/000000/call-male.png"
                alt="call"
              />
            </div>
            <div>
              <a href="tel:https://meet.google.com/edu-beev-swh">
                Call +91 9609796890
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TopNav
