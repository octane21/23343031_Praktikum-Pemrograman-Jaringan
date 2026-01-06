const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'testsaja';
async function main() {
  try {
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB database server");
    const db = client.db(namaDatabase);
    // db.collection("pengguna")
    //   .deleteMany({ usia: 28 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
      //   });
      db.collection('tugas').deleteOne({ StatusPenyelesaian : true });
  } catch (error) {
    console.error(error);
  }
}
main();