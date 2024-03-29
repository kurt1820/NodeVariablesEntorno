const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tus necesidades


app.get('/listar-env', async (req, res) => {
    // Envia todas las variables de entorno como respuesta
    res.json(process.env);
  });

  
app.get('*', async (req, res) => {
    res.json("Hola kurt");
  });

  
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
