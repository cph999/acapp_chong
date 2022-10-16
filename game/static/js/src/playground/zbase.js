class AcGamePlayground {
    
    constructor(root){
        this.root = root;
        this.$playground = $(`<div class="ac_game_playground"></div>`);

        console.log(this.$playground);
        this.root.$ac_game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.game_map = new GameMap(this);
        this.players = [];
        this.players.push(new Player(this,this.width/2,this.height/2,0.05 *this.height,"white", this.height * 0.15,true));
        this.start();
    }

    start(){
    }

    show(){
        this.$playground.show();
    }

    hide(){
        this.$playground.hide();
    }
}
