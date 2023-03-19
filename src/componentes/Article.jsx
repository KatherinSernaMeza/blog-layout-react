import React from "react";

export const Article = () => {
  const img = "../assets/img/pic6.jpg";
  return (
    <div className="container-colum space-column padding-container">
      <div className="title-column-container">
        <h2 className="title-column">just another blog post</h2>
        <p className="description-theme-link">33 comments</p>
      </div>
      <img className="w-full padding-img" src={img} alt="" />
      <article>
        <h3 className="title-column">Magna Gravida Dolore</h3>
        <p className="description-theme">
          Aenean non massa sapien. In hac habitasse platea dictumst. Maecenas
          sodales purus et nulla sodales aliquam. Aenean ac porttitor metus. In
          hac habitasse platea dictumst. Phasellus blandit turpis in leo
          scelerisque mollis. Nulla venenatis ipsum nec est porta rhoncus.
          Mauris sodales sed pharetra nisi nec consectetur. Cras elit magna,
          hendrerit nec consectetur in, sollicitudin vitae justo. Cras amet
          aliquet Aliquam ligula turpis, feugiat id fermentum malesuada, rutrum
          eget turpis. Mauris sodales sed pharetra nisi nec consectetur. Cras
          elit magna, hendrerit nec consectetur in sollicitudin vitae.
        </p>
        <button className="button-theme">continue reading</button>
      </article>
    </div>
  );
};

export default Article;
