class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //BP
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Olá ${this.input.value()}
      </br>espere outro jogador entrar...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount); // BP
      player.getDistance(); //BP
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}

updateCount(count) { //atualiza a contagem
database.ref("/").update({
playerCount: count
});
}

update() { //atualiza as informações no banco de dados sobre o jogador AULA C39
var playerIndex = "players/player"+this.index;
database.ref(playerIndex).update({
name: this.name,
positionX: this.positionX,
positionY: this.positionY,
});

//As funções estáticas não são anexadas a nenhum objeto da classe. Estamos tentando obter todas as informações dos jogadores
//- e isso não envolve nenhum objeto em particular. AULA C39
static getPlayersInfo() {
var playerInfoRef database.ref("players");
playerInfoRef.on("value", data => {
allPlayers = data.val();
  });
 }  
}
