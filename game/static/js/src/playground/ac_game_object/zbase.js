let AC_GAME_OBJECTS = [];

class AcGameObject{

    constructor(){
        AC_GAME_OBJECTS.push(this);
        this.has_called_start = false;
    }

    start(){
    }

    update(){
    }

    on_destory(){
    } 

    destroy(){
        this.on_destory();
        for( let i = 0; i < AC_GAME_OBJECTS.length; i ++){
            if(AC_GAME_OBJECTS[i] === this){
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}


let last_timestamp;
let AC_GAME_ANIMATION = function(timestamp){
    for(let i = 0; i < AC_GAME_OBJECTS.length; i++){
        let obj = AC_GAME_OBJECTS[i];
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_ANIMATION);
}
requestAnimationFrame(AC_GAME_ANIMATION);
