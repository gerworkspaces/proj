import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="oppt__blog section__padding" id="blog">
    <div className="oppt__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="oppt__blog-container">
      <div className="oppt__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="OPPT and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="oppt__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 26, 2021"
          text="2"
        />
        <Article
          imgUrl={blog03}
          date="Sep 26, 2021"
          text="3"
        />
        <Article
          imgUrl={blog04}
          date="Sep 26, 2021"
          text="4"
        />
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="5"
        />
      </div>
    </div>
  </div>
);

export default Blog;
