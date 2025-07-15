import React from "react";

function Footer() {
  const dateHour = new Date().getHours(); // fixed

  const message =
    dateHour < 8 || dateHour > 22 // ✅ use OR (||), not AND (&&)
      ? "Sorry We are closed !!"
      : "Welcome, we are open now come visit us :)";

  return <footer className="footer">
    <div className="order">
       <h3>{message}</h3>
       <button className="btn">Order</button>
    </div>
  </footer>;
}

export default Footer;
