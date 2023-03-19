import React from "react";
import MainLinks from "./MainLinks";
import pic1 from "../../assets/img/pic1.jpg";
import pic2 from "../../assets/img/pic2.jpg";

export const Main = () => {
  // const imgRoute = ["../../assets/img/pic2.jpg", "../../assets/img/pic1.jpg"];

  const arrayLink = [
    { link: "Sed neque nisi consequat" },
    { link: "Sed neque nisi consequat" },
    { link: "Sed neque nisi consequat" },
    { link: "Sed neque nisi consequat" },
    { link: "Sed neque nisi consequat" },
  ];
  return (
    <main>
      <div className="container main">
        <div className="col-sub-themes">
          <div className="col1">
            <section>
              <h2 className="title-theme padding-themes">
                Welcome to minimaxing!
              </h2>
              <span className="description-theme row">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
              <a href="/" type="button" className="button-theme text-button">
                more cool design...
              </a>
            </section>
          </div>
          <div className="container-span">
            <div className="col2">
              <section>
                <h2 className="title-theme padding-themes">Who are you guys</h2>
                <div className="content-theme">
                  <img className="img-theme" src={pic1} alt="" />
                  <div>
                    <h4 className="title-theme">Jane Anderson</h4>
                    <p className="description-theme">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <div className="content-theme">
                  <img className="img-theme" src={pic2} alt="" />
                  <div>
                    <h4 className="title-theme">Jane Anderson</h4>
                    <p className="description-theme">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="col3">
              <section>
                <h2 className="title-theme link-theme-title padding-themes">
                  How about some links?
                </h2>
                <div className="container-links">
                  <div className="container-links-left">
                    <ul>
                      {arrayLink.map((linkMain, index) => {
                        return <MainLinks key={index} link={linkMain.link} />;
                      })}
                    </ul>
                  </div>
                  <div className="container-links-rigth">
                    <ul>
                      {arrayLink.map((linkMain, index) => {
                        return <MainLinks key={index} link={linkMain.link} />;
                      })}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
