import React from "react";
import ItemsLink from "./ItemsLinks";

const Footer = () => {
  const itemsLink1 = [
    { item: "Sed neque nisi consequat1" },
    { item: "Sed neque nisi consequat1" },
    { item: "Sed neque nisi consequat1" },
    { item: "Sed neque nisi consequat1" },
    { item: "Sed neque nisi consequat1" },
  ];

  const itemsLink2 = [
    { item: "Sed neque nisi consequat2" },
    { item: "Sed neque nisi consequat2" },
    { item: "Sed neque nisi consequat2" },
    { item: "Sed neque nisi consequat2" },
    { item: "Sed neque nisi consequat2" },
  ];

  const itemsLink3 = [
    { item: "Sed neque nisi consequat3" },
    { item: "Sed neque nisi consequat3" },
    { item: "Sed neque nisi consequat3" },
    { item: "Sed neque nisi consequat3" },
    { item: "Sed neque nisi consequat3" },
  ];

  const itemsLink4 = [
    { item: "Sed neque nisi consequat4" },
    { item: "Sed neque nisi consequat4" },
    { item: "Sed neque nisi consequat4" },
    { item: "Sed neque nisi consequat4" },
    { item: "Sed neque nisi consequat4" },
  ];

  return (
    <footer>
      <div className="container-foother">
        <div className="container sub-container-foother">
          <div className="container row-foother">
            <div className="columns-foother-left">
              <section>
                <h2 className="title-column-right padding-footer-title">
                  how about a truckload of links?
                </h2>
                <div className="items-foother">
                  <ul className="items column-first">
                    {itemsLink1.map((itemLink, index) => {
                      return <ItemsLink key={index} item={itemLink.item} />;
                    })}
                  </ul>

                  <ul className="items">
                    {itemsLink2.map((itemLink, index) => {
                      return <ItemsLink key={index} item={itemLink.item} />;
                    })}
                  </ul>
                  <ul className="items">
                    {itemsLink3.map((itemLink, index) => {
                      return <ItemsLink key={index} item={itemLink.item} />;
                    })}
                  </ul>
                  <ul className="items">
                    {itemsLink4.map((itemLink, index) => {
                      return <ItemsLink key={index} item={itemLink.item} />;
                    })}
                  </ul>
                </div>
              </section>
            </div>
            <section className="columns-foother-right padding-container">
              <h2 className="title-column-left padding-footer-title">
                something of interest
              </h2>
              <p className="description-theme">
                Duis neque nisi, dapibus sed mattis quis, rutrum accumsan sed.
                Suspendisse eu varius nibh. Suspendisse vitae magna eget odio
                amet mollis justo facilisis quis. Sed sagittis mauris amet
                tellus gravida lorem ipsum dolor sit blandit.
              </p>
              <button className="button-theme">oh, please continue ...</button>
            </section>
          </div>
          <div>
            <div className="foother-firm">
              <p>
                © Untitled. All rights reserved. | Design: HTML5 UP | Demo
                Images: Unsplash
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
