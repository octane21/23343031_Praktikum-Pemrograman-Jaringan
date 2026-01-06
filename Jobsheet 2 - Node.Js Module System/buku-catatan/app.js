const fs = require('fs');

// fs.writeFileSync('catatan.txt', 'Nama Saya Carli Tamba')

// fs.appendFileSync('catatan.txt', ' Saya tinggal di Padang')

// const catatan = require("./catatan.js")
// const pesan = catatan()

// console.log(pesan)

// const validator = require("validator");
// const ambilCatatan = require("./catatan.js");
// const pesan = ambilCatatan();
// console.log(pesan);
// console.log(validator.isURL("https://carli.com"));

// const chalk = require("chalk");

// console.log(chalk.blue("print warna biru sukses"));

// const ambilCatatan = require("./catatan.js");
// const command = process.argv[2];
// console.log(process.argv[2]);

// if (command === 'tambah') {
// console.log('Tambah Catatan')
// } else if (command === 'hapus') {
// console.log('Hapus Catatan')
// }

const yargs = require("yargs");
const catatan = require("./catatan.js");
// Kustomisasi versi yargs
yargs.version("10.1.0");
// Membuat perintah (command) 'tambah'
yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
    isi: {
      describe: "Isi catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    catatan.tambahCatatan(argv.judul, argv.isi);
  },
});
// Perintah hapus
yargs.command({
  command: "hapus",
  describe: "hapus catatan",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    catatan.hapusCatatan(argv.judul);
  },
});
// Instruksi no.4 letakan disini
yargs.command({
  command: "daftar",
  describe: "menampilkan daftar catatan",
  handler: function () {
    catatan.listCatatan();
  },
});
yargs.command({
  command: "baca",
  describe: "baca catatan",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    catatan.bacaCatatan(argv.judul);
  },
});

// letakan bagian ini pada baris terakhir
// console.log(yargs.argv);

yargs.parse();