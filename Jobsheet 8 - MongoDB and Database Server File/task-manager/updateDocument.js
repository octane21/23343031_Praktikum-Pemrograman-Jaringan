const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'testsaja';
async function main() {
  try {
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB database server");
    const db = client.db(namaDatabase);
    // //Memperbaharui Data dengan perintah updateOne
    // const updateOnePromise = db.collection("pengguna").updateOne(
    //   { _id: new ObjectId("695d1c45d3d9d04496840f09") },
    // //   { $set: { nama: "Carlikun" } }
    //   {$inc: { usia: 1 } }
    // );
    // updateOnePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     client.close();
    //   });
    // //Memperbaharui Data dengan perintah updateMany
    // db.collection('tugas').updateMany(
    // { StatusPenyelesaian: false },
    // { $set: { StatusPenyelesaian: true} }
    // ).then((result) => {
    // console.log(result.modifiedCount);
    // }).catch((error) => {
    // console.error(error);
    // }).finally(() => {
    // client.close();
    // });
    
    const daftarPengguna = await db.collection('pengguna').find().toArray();
    console.log(daftarPengguna);
    const daftarUmur = [...new Set( daftarPengguna.map(p => p.usia))]
    console.log(daftarUmur)
    console.log(daftarPengguna);
      let umurMinimal = 20;
      daftarPengguna.forEach((p) => {
          umurMinimal++;
          while (daftarUmur.includes(umurMinimal)) {
              umurMinimal++;
        }
          db.collection('pengguna').updateOne(
              { _id: p._id },
              { $set: { usia: umurMinimal } }
          )
          daftarUmur.push(umurMinimal);
          console.log(daftarUmur)
    })
  } catch (error) {
    console.error(error);
  }
}
main();