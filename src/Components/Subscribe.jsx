import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <h2>Subscribe to get updates on exciting offers<br />& deals</h2>

      <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Subscribe;
