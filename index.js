let game = {
    letters:'abcdefghijklmnopqrstuvwxyz',
    count: 8,
    count_1:8,
    wins: 0,
    losses: 0,
    repeat:'',
    space:[],
    space_1:'',
    lets:true,
    able:false,
    comp_choice:null,
    result:'',
    index:null,
    default:"./images/blood.jpg",

    words: [ 
     {word:"whale",img:"./images/whale.jpeg"},
     {word:"axe",img:"./images/axe.jpg"}, 
     {word:"phone",img:"./images/phone.jpg"},
     {word:"cocacola",img:"./images/cocacola.png"}, 
     {word:"laptop",img:"./images/laptop.jpeg"},
     {word:"kitten",img:"./images/kitten.jpeg"},
     {word:"elshad",img:"./images/elshad.webp"},
     {word:"car",img:"./images/car.jpeg"},
     {word:"kazim",img:"./images/Kazim.JPG"}
    ],

    Win:function(space){
        for(let i = 0; i < this.space.length;i++){
            this.result += this.space[i]
        }
        
        if(this.result == this.comp_choice){
            this.wins++
            document.querySelector('.result').innerHTML = this.result
            this.restart()
            document.querySelector('#img-res').src = game.words[(this.index)]['img']  
        }  
        this.able = false
    },

    inWord:function(key){
        this.space_1 = ''
        for(let i = 0;i < this.comp_choice.length;i++){
            
            if(this.comp_choice[i] === key){
                this.space[i] = key
                this.space_1 += ' ' + key

            }
            else{
                this.space_1 += ' ' + this.space[i]
            }
        }
        document.querySelector('#hidden').innerHTML = this.space_1
    },

    NotInWord:function(key){
        this.count--
        this.repeat += ' '+ key
        document.querySelector('#rest').innerHTML = this.repeat
        this.static()

        if(this.count === 0){
            this.losses++
            this.restart() 
            this.able = false    
        }
        
    },

    restart:function(){
        this.repeat = ''
        this.space = []
        this.space_1 = ''
        this.result = ''
        document.querySelector('#hidden').innerHTML = ''
        document.querySelector('#rest').innerHTML = this.repeat
        document.querySelector('#count').innerHTML = this.count = this.count_1
        this.lets = true
    },

    static:function(){
        document.querySelector("#wins").innerHTML = ' ' + this.wins
        document.querySelector("#losses").innerHTML = ' ' + this.losses
        document.querySelector("#count").innerHTML = ' ' + this.count
    },

    chooseRandom:function(){
        this.index = Math.floor(Math.random() * this.words.length)
        this.comp_choice = this.words[this.index]['word'] 
        console.log(this.comp_choice)
    },   

    drawHiphons:function(){
        if(this.lets){
            for(let i = 0; i < this.comp_choice.length;i++){
                this.space[i] = '_' 
                this.space_1 += ' ' + this.space[i]
            }
        }

        if(this.lets){
            document.querySelector('#hidden').innerHTML = this.space_1
            this.lets = false
        }
    },

    checkElements:function(key){

        if(this.letters.indexOf(key) !== -1 && this.repeat.indexOf(key) === -1){

            if(this.comp_choice.indexOf(key) !== -1){
                this.inWord(key)
            }

            else if(this.comp_choice.indexOf(key) === -1){
                this.NotInWord(key)
            }

            if(this.space.indexOf('_') === -1){
                this.Win(this.space)
            }
        }
    },

    play:function(key){
        
        key = key.toLowerCase()
        this.checkElements(key)
        this.static()
        
    }


}   

game.static()


let KEY

document.onkeyup = function(e){
    KEY = e.key
    if(KEY === ' '){
        game.restart()
        game.able = true
        game.chooseRandom()
        game.drawHiphons()
        document.querySelector('.result').innerHTML = ''
        
    }
    
    if(game.able){
        document.querySelector('#img-res').src= game.default
        game.play(KEY)
    }
}


/*
let a = document.querySelector('#img-res').src=game.words[0]['img']
*/

