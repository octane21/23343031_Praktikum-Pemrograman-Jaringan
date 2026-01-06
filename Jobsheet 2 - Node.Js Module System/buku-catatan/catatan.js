const fs = require("fs");
const chalk = require("chalk");

const ambilCatatan = function () {
  return "Ini Catatan Carli Tamba...";
};

const tambahCatatan = function (judul, isi) {
  const catatan = muatCatatan();
  const catatanGanda = catatan.filter(function (note) {
    return note.title === judul;
  });
  if (catatanGanda.length === 0) {
    catatan.push({
      judul: judul,
      isi: isi,
    });
    simpanCatatan(catatan);
    console.log("Catatan baru ditambahkan!");
  } else {
    console.log("Judul catatan telah dipakai");
  }
};

const simpanCatatan = function (catatan) {
  const dataJSON = JSON.stringify(catatan);
  fs.writeFileSync("catatan.json", dataJSON);
};

const muatCatatan = function () {
  try {
    const dataBuffer = fs.readFileSync("catatan.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const listCatatan = function () {
  try {
    const dataBuffer = fs.readFileSync("catatan.json");
    const dataJSON = dataBuffer.toString();
      const daftarCatatan = JSON.parse(dataJSON).map((c,i)=>{
        return `Judul ${i+1}:${c.judul}`
      });
      console.log(daftarCatatan);
    
  } catch (e) {
    return [];
  }
};
const bacaCatatan = function (judul) {
  try {
    const catatan = muatCatatan().find(c => judul == c.judul);
    console.log(`Isi Buku Judul ${judul}: ${catatan.isi}`);

    
  } catch (e) {
    return [];
  }
};

const hapusCatatan = function (judul) {
    const catatan = muatCatatan()
    const catatanUntukDisimpan = catatan.filter(function (note) {
        return note.judul !== judul
    })
    if (catatan.length > catatanUntukDisimpan.length) {
        console.log(chalk.green.inverse('Catatan dihapus!'))
        simpanCatatan(catatanUntukDisimpan)
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
}
}
module.exports = {
  ambilCatatan: ambilCatatan,
    tambahCatatan: tambahCatatan,
    hapusCatatan,
    listCatatan,
  bacaCatatan
};
// module.exports = ambilCatatan;
