const express = require("express");
//ini halaman/page utama
const path = require("path")
const  hbs  = require('hbs');
const app = express();
const direktoriPublic = path.join(__dirname, '../public');
const direktoriViews = path.join(__dirname, '../templates/views');
const direktoriPartials = path.join(__dirname, '../templates/partials');
app.set("view engine", "hbs");
app.set("views", direktoriViews);
app.use(express.static(direktoriPublic))
hbs.registerPartials(direktoriPartials);
app.get("", (req, res) => {
  res.render("index", {
    judul: "Aplikasi Cek Cuaca",
    nama: "Carli Tamba",
  });
});
//ini halaman tentang
app.get("/tentang", (req, res) => {
  res.render("tentang", {
    judul: "Tentang Saya",
    nama: "Carli Tamba",
  });
});
app.get("/bantuan", (req, res) => {
  res.render("bantuan", {
    judul: "Bantuan",
    nama: "Carli Tamba",
    teksBantuan: "ini adalah teks bantuan",
  });
});

app.get("/infoCuaca", (req, res) => {
  res.render("info-cuaca", {
    judul: "Info Cuaca",
    // nama: "Carli Tamba",
  });
});

app.get("/bantuan/{*any}", (req, res) => {
  res.render("404", {
    judul: "404",
    nama: "Carli Tamba",
    pesanKesalahan: "Artikel yang dicari tidak ditemukan",
  });
});

app.get("/{*any}", (req, res) => {
  res.render("404", {
    judul: "404",
    nama: "Carli Tamba",
    pesanKesalahan: "Halaman tidak ditemukan",
  });
});


app.listen(4000, () => {
  console.log("Server berjalan pada port 4000.");
});