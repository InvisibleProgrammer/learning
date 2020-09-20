import React, { useState, useEffect } from "react";
import "./App.css";

import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortniteapi.io/v1/items/upcoming?lang=en",
      {
        // headers: new Headers({
        //     'Authorization': '88961171-814a5c79-ff4c6f53-83ceb05c'
        // })
        headers: {
          Authorization: "88961171-814a5c79-ff4c6f53-83ceb05c",
        },
      }
    );

    const items = await data.json();

    console.log(items.items);

    setItems(items.items);
  };

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
