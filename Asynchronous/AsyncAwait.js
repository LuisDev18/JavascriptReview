async function obtenerDatos() {
    const resultado = await fetch('https://api.example.com/data'); // Esperar a que la promesa se resuelva
    const datos = await resultado.json(); // Esperar a que la promesa se resuelva
    return datos;
  }
  
  async function obtenerYProcesarDatos() {
    try {
      const datos = await obtenerDatos(); // Esperar a que obtenerDatos() devuelva una promesa
      console.log('Datos obtenidos:', datos);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }
  
  obtenerYProcesarDatos();