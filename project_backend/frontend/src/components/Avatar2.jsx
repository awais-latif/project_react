import React, {Component} from "react";
import {Headline5, Subtitle1} from "@material/react-typography";
import "../Component-css/avatar.css";
const Avatar = ({path, heading, subheading}) => {
  return (<React.Fragment>
    <section>
      <div className="avatar avatar--green avatar--settings circle" style={{
          backgroundImage: "url(https://dam-prod.media.mit.edu/thumb/2019/07/29/image9545.png.120x120.png)",
          backgroundSize: "cover"
        }}>
        <span className="hide">A</span>

        <div className="avatar__banner va-middle text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path style={{
                fill: "#ffffff"
              }} className="icon--svg" d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"/>
          </svg>
        </div>
      </div>
    </section>
    <div className="avatar-headline">
      <Headline5 className="avatar-headline1">{heading}</Headline5>
      <Subtitle1 className="avatar-subheading">{subheading}</Subtitle1>
    </div>
  </React.Fragment>);
};

export default Avatar;
