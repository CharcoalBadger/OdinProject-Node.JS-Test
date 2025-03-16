const express = require("express");
const path = require("path");

const app = express();
const PORT = 5500;

// ✅ Set EJS as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ✅ Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// ✅ Define navigation links
const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

// ✅ Render index.ejs with `links` and `users`
app.get("/", (req, res) => {
  console.log("Rendering index.ejs...");
  res.render("index", { links, users });
});

// ✅ Add the `/about` route
app.get("/about", (req, res) => {
  res.render("about", { links });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
