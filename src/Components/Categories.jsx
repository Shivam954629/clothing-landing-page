import React from "react";
import "./Categories.css";
import c1 from "../assets/Group 244.jpg";
import c2 from "../assets/Group 245.jpg";
import c3 from "../assets/Group 246.jpg";
import c4 from "../assets/Group 247.jpg";
import c5 from "../assets/Group 248.jpg";
import c6 from "../assets/Group 249.jpg";

function Categories() {
  const catData = [
    { img: c1, title: "Men's T-Shirts" },
    { img: c2, title: "Women's Wear" },
    { img: c3, title: "Winter Collections" },
    { img: c4, title: "Hooded T-Shirts" },
    { img: c5, title: "Polo Neck T-Shirts" },
    { img: c6, title: "Full Sleeves T-Shirts" },
  ];

  return (
    <div className="categories">
      {catData.map((c, i) => (
        <div className="cat-box" key={i}>
          <img src={c.img} alt={c.title} />
          <p>{c.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
