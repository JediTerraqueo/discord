module.exports = {
  "info": {
    "name": "ClockPlugin",
    "authors": [
      {
        "name": "Jedi", // Substitua com seu nome
        "discord_id": "jediterraqueo", // Substitua com seu ID do Discord
        "github_username": "https://github.com/JediTerraqueo", // Substitua com seu nome de usuário no GitHub
        "twitter": "@SeuTwitter" // Opcional: Adicione sua conta do Twitter
      }
    ],
    "version": "1.0.0",
    "description": "Um relógio simples para o BetterDiscord",
    "github": "", // Substitua com seu repositório no GitHub
    "github_raw": "" // Link direto para o raw do seu repositório
  },
  
  // Função principal para iniciar o plugin
  "main": "clockPlugin.plugin.js",
  
  start: function () {
    this.injectClock();
    this.injectCSS(); // Inicia o relógio e aplica os estilos
  },

  stop: function () {
    this.removeClock();
    this.removeCSS(); // Remove o relógio e os estilos quando o plugin for desativado
  },

  // Função para injetar o relógio na página
  injectClock: function () {
    const clock = document.createElement('div');
    clock.id = 'discord-clock';
    clock.textContent = "00:00"; // Texto inicial
    document.body.appendChild(clock); // Adiciona o relógio à página

    this.updateClock(clock); // Atualiza o relógio com a hora atual

    // Atualiza o relógio a cada minuto
    setInterval(() => {
      this.updateClock(clock);
    }, 60000);
  },

  // Função para remover o relógio da página
  removeClock: function () {
    const clock = document.getElementById('discord-clock');
    if (clock) {
      clock.remove(); // Remove o relógio do DOM
    }
  },

  // Função para atualizar o relógio com a hora atual
  updateClock: function (clock) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Formatar a hora para ter dois dígitos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    clock.textContent = `${hours}:${minutes}`;
  },

  // Função para injetar o CSS diretamente no plugin
  injectCSS: function () {
    const style = document.createElement('style');
    style.innerHTML = `
      #discord-clock {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
        background-color: #23272a;
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        z-index: 9999;
      }
    `;
    document.head.appendChild(style); // Adiciona o CSS ao <head> do documento
  },

  // Função para remover o CSS injetado
  removeCSS: function () {
    const style = document.querySelector('style');
    if (style) {
      style.remove(); // Remove o CSS injetado
    }
  }
};
