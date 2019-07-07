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
     {word:"kazim",img:"./images/Kazim.JPG"},
     {word:"volcano",img:"./images/volcano.jpg"}
    ],
/*------------------------------------------------------------------------------*/
    Win:function(space){
        for(let i = 0; i < this.space.length;i++){
            this.result += this.space[i]
        }
        
        if(this.result == this.comp_choice){
            this.wins++
            document.querySelector('.result').innerHTML = this.result.toUpperCase()
            this.restart()
            document.querySelector('#img-res').src = game.words[(this.index)]['img']  
        }  
        this.able = false
    },
/***********************************************************************************/
    Lose:function(){
        if(this.count === 0){
            this.losses++
            this.restart() 
            this.able = false    
        }
    },
/***********************************************************************************/
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
/***********************************************************************************/
    NotInWord:function(key){
        this.count--
        this.repeat += ' '+ key
        document.querySelector('#rest').innerHTML = this.repeat
        this.static()
        this.Lose()
        
    },
/***********************************************************************************/
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
/***********************************************************************************/
    static:function(){
        document.querySelector("#wins").innerHTML = ' ' + this.wins
        document.querySelector("#losses").innerHTML = ' ' + this.losses
        document.querySelector("#count").innerHTML = ' ' + this.count
    },
/***********************************************************************************/
    chooseRandom:function(){
        this.index = Math.floor(Math.random() * this.words.length)
        this.comp_choice = this.words[this.index]['word'] 
        console.log(this.comp_choice)
    },   
/***********************************************************************************/
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
/**********************************************************************************/
    checkElements:function(key){

        if(this.letters.indexOf(key) !== -1 && this.repeat.indexOf(key) === -1){

            if(this.comp_choice.indexOf(key) !== -1){
                this.inWord(key)
            }

            else if(this.comp_choice.indexOf(key) === -1 && this.able == true){
                this.NotInWord(key)
            }

            if(this.space.indexOf('_') === -1){
                this.Win(this.space)
            }
        }
    },
/***********************************************************************************/
    play:function(key){
        
        key = key.toLowerCase()
        this.checkElements(key)
        this.static()
        
    },
/***********************************************************************************/
    replay:function(key){
        if(key === ' ' && this.able === true){
            this.losses++    
            this.static()       
        }
    },
/***********************************************************************************/
    start:function(key){
        if(key === ' '){
            this.replay(key)
            this.restart()
            this.able = true
            this.chooseRandom()
            this.drawHiphons()
            document.querySelector('.result').innerHTML = ''
        }
        if(this.able){
            document.querySelector('#img-res').src= this.default
            this.play(key)
            
        }
    }
/*------------------------------------------------------------------------------*/
}   

game.static()
let KEY

document.onkeyup = function(e){
    KEY = e.key
    game.start(KEY)
}


document.querySelector('#restart').onclick = function(){
    game.wins = 0
    game.losses = 0
    game.restart()
    game.static()
    document.querySelector('#img-res').src= game.default
    document.querySelector('.result').innerHTML = ''
    game.able = false
}

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c') 
let d = document.querySelector('#d')
let e = document.querySelector('#e')
let f = document.querySelector('#f')
let g = document.querySelector('#g')
let h = document.querySelector('#h')
let i = document.querySelector('#i')
let j = document.querySelector('#j')
let k = document.querySelector('#k') 
let l = document.querySelector('.l')
let m = document.querySelector('#m')
let n = document.querySelector('#n')
let o = document.querySelector('#o')
let p = document.querySelector('#p')
let q = document.querySelector('#q')
let r = document.querySelector('#r')
let s = document.querySelector('#s')
let t = document.querySelector('#t')
let u = document.querySelector('#u')
let v = document.querySelector('#v')
let w = document.querySelector('.w')
let x = document.querySelector('#x')
let y = document.querySelector('#y')
let z = document.querySelector('#z')
let backspace = document.querySelector('#backspace')

a.onclick = function(){
    KEY = 'a'
    game.start(KEY)
}

b.onclick = function(){
    KEY = 'b'
    game.start(KEY)
}

c.onclick = function(){
    KEY = 'c'
    game.start(KEY)
}

d.onclick = function(){
    KEY = 'd'
    game.start(KEY)
}

e.onclick = function(){
    KEY = 'e'
    game.start(KEY)
}

f.onclick = function(){
    KEY = 'f'
    game.start(KEY)
}

g.onclick = function(){
    KEY = 'g'
    game.start(KEY)
}

h.onclick = function(){
    KEY = 'h'
    game.start(KEY)
}

i.onclick = function(){
    KEY = 'i'
    game.start(KEY)
}

j.onclick = function(){
    KEY = 'j'
    game.start(KEY)
}

k.onclick = function(){
    KEY = 'k'
    game.start(KEY)
}

l.onclick = function(){
    KEY = 'l'
    game.start(KEY)
}

m.onclick = function(){
    KEY = 'm'
    game.start(KEY)
}

n.onclick = function(){
    KEY = 'n'
    game.start(KEY)
}

o.onclick = function(){
    KEY = 'o'
    game.start(KEY)
}

p.onclick = function(){
    KEY = 'p'
    game.start(KEY)
}

q.onclick = function(){
    KEY = 'q'
    game.start(KEY)
}

r.onclick = function(){
    KEY = 'r'
    game.start(KEY)
}

s.onclick = function(){
    KEY = 's'
    game.start(KEY)
}

t.onclick = function(){
    KEY = 't'
    game.start(KEY)
}

u.onclick = function(){
    KEY = 'u'
    game.start(KEY)
}

v.onclick = function(){
    KEY = 'v'
    game.start(KEY)
}

w.onclick = function(){
    KEY = 'w'
    game.start(KEY)
}

x.onclick = function(){
    KEY = 'x'
    game.start(KEY)
}

y.onclick = function(){
    KEY = 'y'
    game.start(KEY)
}

z.onclick = function(){
    KEY = 'z'
    game.start(KEY)
}

backspace.onclick = function(){
    KEY = ' '
    game.start(KEY)
}

/*
let a = document.querySelector('#img-res').src=game.words[0]['img']
*/

