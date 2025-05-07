function obtenerFrase() {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => {
        document.getElementById("frase").innerText = `"${data.slip.advice}"`;
      })
      .catch(() => {
        document.getElementById("frase").innerText = "No se pudo cargar el consejo.";
        document.getElementById("autor").innerText = "";
      });
  }

  obtenerFrase()