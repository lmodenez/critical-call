import { createConnection } from 'typeorm';

createConnection().then(() =>
  console.log('Conexão com banco MySQL iniciada... 🌐')
);
