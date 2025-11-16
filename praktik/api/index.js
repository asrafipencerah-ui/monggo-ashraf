const mongoose = require('mongoose');


const connectionString = 'mongodb://admin:password123@localhost:27017/db_mahasiswa?authSource=admin';


mongoose.connect(connectionString)
  .then(() => {
    console.log('SELAMAT! Koneksi ke MongoDB berhasil!');
    
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Koneksi GAGAL:', err.message);
  });