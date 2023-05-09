import React, { useState } from "react";
import "../cssFiles/News2.css";
import axios from "axios";
import { Button } from "@mui/material";

function News2() {
  const [article, setArticle] = useState(null);

  const handleCategoryClick = (category) => {
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: category,
          apiKey: "69dd522dac9c4bc0a783f835bb0d79ac",
        },
      })
      .then((response) => {
        setArticle(response.data.articles[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button
        onClick={() => handleCategoryClick("health")}
        className="Rnewsbutton"
      >
        Health
      </Button>

      {article && (
        <div className="Rnews">
          <h2 className="Rnewshead">{article.title}</h2>
        </div>
      )}
    </div>
  );
}

export default News2;
