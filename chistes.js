function obtenerChiste() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => {
        const texto = `${data.setup}<br><strong>${data.punchline}</strong>`;
        document.getElementById("chiste").innerHTML = texto;
      })
      .catch(() => {
        document.getElementById("chiste").innerText = "No se pudo cargar el chiste.";
      });
  }

  obtenerChiste();