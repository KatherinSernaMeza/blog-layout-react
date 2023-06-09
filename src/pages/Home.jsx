import React from "react";
import Main from "../componentes/Main/Main";
import Theme from "../componentes/Theme";
import Article from "../componentes/Article";
import pic3 from "../assets/img/pic3.jpg";
import pic4 from "../assets/img/pic4.jpg";
import pic5 from "../assets/img/pic5.jpg";

const Home = () => {
  const themes = [
    {
      img: pic3,
      title: "Magna Gravida Dolore",
      description:
        "Varius nibh. Suspendisse vitae magna eget et amet mollis justo facilisis amet quis consectetur in, sollicitudin vitae justo. Cras Maecenas eu arcu purus, phasellus fermentum elit.",
    },
    {
      img: pic4,
      title: "Magna Gravida Dolore",
      description:
        "Varius nibh. Suspendisse vitae magna eget et amet mollis justo facilisis amet quis consectetur in, sollicitudin vitae justo. Cras Maecenas eu arcu purus, phasellus fermentum elit.",
    },
    {
      img: pic5,
      title: "Magna Gravida Dolore",
      description:
        "Varius nibh. Suspendisse vitae magna eget et amet mollis justo facilisis amet quis consectetur in, sollicitudin vitae justo. Cras Maecenas eu arcu purus, phasellus fermentum elit.",
    },
  ];
  return (
    <>
      <Main />
      <section className="container">
        <div className="container-columns space-column">
          <div className="container-colum space-column">
            <h2 className="title-column">an aasortment of picture and text</h2>
            <div className="description-theme">
              Duis neque nisi, dapibus sed mattis quis, rutrum et accumsan.
              Suspendisse nibh. Suspendisse vitae magna eget odio amet mollis
              justo facilisis quis. Sed sagittis mauris amet tellus gravida
              lorem ipsum dolor sit amet consequat blandit lorem ipsum dolor sit
              amet consequat sed dolore.
            </div>
            {themes.map((theme, index) => {
              return (
                <Theme
                  key={index}
                  img={theme.img}
                  title={theme.title}
                  description={theme.description}
                />
              );
            })}
          </div>
          <Article />
        </div>
      </section>
    </>
  );
};

export default Home;
