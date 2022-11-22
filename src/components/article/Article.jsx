import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => {
  <div className="OPPT__proj-container_article/">
    <div className="OPPT__proj-container_article-image">
      <img src="{imgUrl}" alt="proj_img" />
    </div>
    <div className="oppt__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>;
};

export default Article;
