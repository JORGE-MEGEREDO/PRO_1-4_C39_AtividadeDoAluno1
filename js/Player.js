class Player {
  constructor() {
    this.name = null; //esse nome é vazio (null) inicialmente
    this.index = null;5 //esse indice (a quantia de jogadores registrada) é vazio inicialmente
    this.positionX = 0; //a posição x do jogador é zerada inicialmente
    this.positionY = 0;  //a posição y do jogador é zerada inicialmente
  }

   addPlayer() {   { //adiciona o jogador  
    var playerIndex = "players/player" + this.index; //cria o indice/posição a partir das informações que temos 
    if (this.index === 1) { //se for o primeiro jogador a posição x será metade da largura subtraindo 100 
      this.positionX = width / 2 - 100;
    } else {    //se for o segundo jogador a posição x será metade da largura adicionando 100
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({  //se for o segundo jogador a posição x será metade da largura adicionando 100
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }
  //TA
  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }
 
  //Bp
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //Bp
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }}
