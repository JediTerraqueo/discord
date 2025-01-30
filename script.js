function updateClock() {
  const timeElement = document.getElementById('time');
  
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  // Formatar o tempo para sempre ter dois dígitos
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  const currentTime = `${hours}:${minutes}`;
  timeElement.textContent = currentTime;
}

// Atualizar a cada minuto (não precisa de segundos)
setInterval(updateClock, 60000);

// Inicializar o relógio
updateClock();
