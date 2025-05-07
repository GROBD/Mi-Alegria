function obtenerGato() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => {
        const imagen = data[0].url;
        document.getElementById("imagenGato").src = imagen;
      })
      .catch(() => {
        document.getElementById("imagenGato").alt = "No se pudo cargar el gatito.";
      });
  }
  
  obtenerGato();