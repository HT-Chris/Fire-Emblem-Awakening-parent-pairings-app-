
/*
resources
https://www.neoseeker.com/fire-emblem-3ds/faqs/851175-fire-emblem-awakening-character.html

universal
    X class base stats
    X class growth rates -- luck is always 0% for class growths
    X class stat cap

    ** try class extends and use supers for the character data


PARENT stat data
    X stat caps --(Father's MSM + Mother' s MSM + 1) = Child's MSM -- MSM = max stat modifier
    x growth rate
    X starting stats

 ** CHILD stat data 
    unmodified starting 
       ** stats
       X caps
       X growths

func

    user input functions
       *need testing* parent current stats (both parent current stat - parent class 
                       stat then add to child absolute base stat then divide by 3. add child class stat)


        combine child data with class data to show the recruit child data
        
        
        
        
*/

////////////CLASS DATA


class _CLASS_BASE_STAT{
    constructor(hp, str, mag, skill, spd, luck, def, res, move){
        this.hp = hp;
        this.str = str;
        this.mag = mag;
        this.skill = skill;
        this.spd = spd;
        this.luck = luck;
        this.def = def;
        this.res = res;
        this.move = move
        
    }
}

class _CLASS_CAP_STAT{

    constructor( str, mag, skill, spd, luck, def, res){
        this.str = str;
        this.mag = mag;
        this.skill = skill;
        this.spd = spd;
        this.luck = luck;
        this.def = def;
        this.res = res
        }
    }
    
    class _CLASS_GROWTHS{
        constructor(hp, str, mag, skill, spd, luck, def, res){
            this.hp = hp;
            this.str = str;
            this.mag = mag;
            this.skill = skill;
            this.spd = spd;
            this.luck = luck;
            this.def = def;
            this.res = res;
            
        }
    }
////////////////////CHARACTERS DATA    



class _CHAR_CAP_STAT{
    constructor( str, mag, skill, spd, luck, def, res){
        this.str = str;
        this.mag = mag;
        this.skill = skill;
        this.spd = spd;
        this.luck = luck;
        this.def = def;
        this.res = res;
        
    }
}

class _CHAR_GROWTHS{
    constructor( hp, str, mag, skill, spd, luck, def, res){
        this.hp = hp;
        this.str = str;
        this.mag = mag;
        this.skill = skill;
        this.spd = spd;
        this.luck = luck;
        this.def = def;
        this.res = res;
        
    }
}

class _KID_GROWTHS{
    constructor(hp, str, mag, skill, spd, luck, def, res){
        this.hp = hp;
        this.str = str;
        this.mag = mag;
        this.skill = skill;
        this.spd = spd;
        this.luck = luck;
        this.def = def;
        this.res = res;
        
    }
}

class _CHAR_BASE_STAT{
    constructor(hp, str, mag, skill, spd, luck, def, res){
        this.hp = hp;
        this.str = str;
        this.mag = mag;
        this.skill = skill;
        this.spd = spd;
        this.luck = luck;
        this.def = def;
        this.res = res;
        
    }
}

////////////CHILD RECRUITMENT STATS FUNCTIONS

function CHILD_CAP_STAT(mothersCap, fathersCap){
    let cap = []
    let size =Object.keys(sully_CHAR_CAP_STAT).length
    let mom = Object.values(mothersCap)
    let dad = Object.values(fathersCap)
    for(let i = 0; i < size; i++){
        let total = mom[i] + dad[i]
         cap.push(total)
     }
    

     let child = new _CHAR_CAP_STAT(...cap)
     
    return child
}

function CHILD_GROWTH(momGrow, dadGrow, kidGrow){
    let grow = []
    let mom = Object.values(momGrow)
    let dad = Object.values(dadGrow)
    let kid = Object.values(kidGrow)
    for( let i = 0; i < mom.length; i++){
    grow.push(Math.floor([mom[i] + dad[i] + kid[i]] / 3))
    }
    return grow
}


// not tested yet
function PARENT_PASSING_STAT( momStat, momClass, dadStat, dadClass, child){
    let val = Object.values(momStat)
    let momS = momStat 
    let momC = momClass
    let dadS = dadStat
    let dadC = dadClass
    let mom = []
    let dad = []
    for(let i = 0; i < val.length; i++){
        let momPass = momS[i] + momC[i]
        let dadPass = dadS[i] + dadC[i]
        mom.push(momPass)
        dad.push(dadPass)
     }

    let kid = mom + dad + child
    //let job = child.getJob()
    let job = knight_BASE_STATS /// for testing purposes

   return  Math.floor([kid / 3] + job)

}



//********************************CLASSES********************************************/


///////////////////BASE

let cavalier_BASE_STATS = new _CLASS_BASE_STAT(18,6,0,5,6,0,7,0,7)
let knight_BASE_STATS = new _CLASS_BASE_STAT(18,8,0,4,2,0,11,0,4)
let villager_BASE_STATS = new _CLASS_BASE_STAT(16,1,0,1,1,0,1,0,5)

//////////////////GROWTHS

let cavalier_GROWTHS = new _CLASS_GROWTHS(45,20,0,20,20,0,10,5)
let villager_GROWTHS = new _CLASS_GROWTHS(35,10,0,5,5,0,10,5)
let knight_GROWTHS = new _CLASS_GROWTHS(50,20,0,15,10,0,15,5)

//////////////////CAPS

let cavalier_CAPS = new _CLASS_CAP_STAT(60,26,20,26,23,30,30,22)
let villager_CAPS = new _CLASS_CAP_STAT(60,20,20,20,20,30,20,20)
let knight_CAPS = new _CLASS_CAP_STAT(60,30,20,26,23,30,30,22)



//********************************CHARTERS********************************/
//BASE

let sully_Start = new _CHAR_BASE_STAT(20,7,1,8,8,6,7,2)

 
 //CAPS
 
let sully_CHAR_CAP_STAT = new _CHAR_CAP_STAT(-1,-1,2,2,0,-1,0)
let donnel_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1,-1,-1,-1,3,1,-1)
 
 //GROWTHS
 
let sully_GROWTHS = new _CHAR_GROWTHS(40,35,20,40,40,60,35,20)  
let donnel_GROWTHS= new _CHAR_GROWTHS(50,45,15,40,45,80,35,15)  


//

///////////////////////////////CHILD PRE FATHER STATS(where is the milk?)

//CHILD BASE STATS

let kjelle_BASE_STAT = new _CHAR_BASE_STAT(10,6,2,6,5,11,3,3)

// CHILD CAPS

let kjelle_CHAR_CAP_STAT = CHILD_CAP_STAT(sully_CHAR_CAP_STAT,donnel_CHAR_CAP_STAT) 


// CHILD PRE PARENT GROWTHS

let kjelle_PRE_GROWTHS = new _KID_GROWTHS(40,35,25,40,45,55,40,20)

let kjelle_RECRUIT_GROWTHS = CHILD_GROWTH(sully_GROWTHS, donnel_GROWTHS, kjelle_PRE_GROWTHS)

// CHILD POST GROWTH

 
console.log(sully_GROWTHS)
