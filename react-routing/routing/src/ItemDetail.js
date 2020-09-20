import React, { useState, useEffect } from "react";
import "./App.css";

import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortniteapi.io/v1/items/get?id=${match.params.id}&lang=en`,
      {
        headers: {
          Authorization: "your API key",
        },
      }
    );

    const item = await fetchItem.json();

    console.log(item.item);

    setItem(item.item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon}></img>
    </div>
  );
}

export default ItemDetail;
