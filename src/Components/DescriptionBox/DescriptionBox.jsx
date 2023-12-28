import React from "react";
import "./DescriptionBox.css";
export const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buting and selling of products or services over the internet. it
          serves as a virtual marketplace there businesesand individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physicl presence. E-commerce
          websites have gained immense popularity due to thir converience.
          accessiblity, and the flobal reach they offer.
        </p>
        <p>
          E-commerce webisites typically display products or services alogng
          with detailed description, images, prices and nay available
          variabltions (eg, sizes,colors, Each product usaully has its own
          dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
};
