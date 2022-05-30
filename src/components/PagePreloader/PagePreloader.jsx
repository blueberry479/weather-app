import React from "react";
import "./PagePreloader.css";

function PagePreloader() {
  return (
    <div className="preloader__block">
      <img alt="pic" src={process.env.PUBLIC_URL + "/preloaderGif/preview.gif"}></img>
    </div>
  );
}

export default PagePreloader;
