import React from "react";
import NewsCards from "../NewsCards/NewsCards";
import useStyles from "./styles.js";

export default function News(props) {
  const classes = useStyles();
  const { newsArticles, activeArticle } = props;
  return (
    <div>
      {/* <div className={classes.logoContainer}>
        <img
          style={{ borderRadius: "25%" }}
          src="https://cji.com.hr/wp-content/uploads/2019/04/News-slika.png"
          alt="News"
          className={classes.alanLogo}
        />
      </div> */}
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}
