
class classBase{
    constructor(base,skill1, skill2, promote1, promote2) {
   this.class = base;
    this.skill1 = skill1;
    this.skill2 = skill2;
    this.promote1 = promote1;
    this.promote1 = promote1.skill1 + ', ' + promote1.skill2
    this.promote2 = promote2;
    this.ability = skill1 + ', ' + skill2
    }

    getClasses(){
         return this.class +','+ this.promote1.class + ', ' + this.promote2.class
    }

    ski(){
       return this.skill1 + this.skill2
    }

    allSkills(){
        base : this.skill1 +', ' + this.skill2;
        pro1 : this.promote1.skill1 + ', ' + this.promote1.skill2;
        pro2 : this.promote2.skill1 + ', ' + this.promote2.skill2
     
            return this.base + ', ' + this.pro1 +', ' + this.pro2

    }
    


}

promoteSkills = (job) =>{
         return Object.values(job)
    }

    
    
    classPromote  = class{
        constructor(name, skill1, skill2){
            this.class = name;
            this.skill1 = skill1;
            this.skill2 = skill2;
           
        }
    }
    
    
    
    let ninja = {
        class:'ninja',
        skill5: 'smoke',
        skill10: 'nippo',
        getLoadOut: function(){
            return this.class + this.skill5 + this.skill10
        }
    }
    
    test  = class{
         constructor(name, skill1, skill2){
             this.class = name;
             this.skill = skill1 + ', ' + skill2
             this.char = ''
            this.people = [];
            this.default = "sword"
 
 
            this._underscore = ''
            // hace underscore in front of variable top signal other developers to not change this
         }
 
         getClass(){
             return this.class
 
             //retrive data from class constructor
         }
 
         getQuote= () =>{
             console.log('hello, is it ${this.class} your looking for')
         }
 
         setChar = function(char){
            this.char = char
 
            //for setting a 'blank' variable later
         }
 
         setPeople = ( people) => {
             this.people = people
 
             //add variable to an array
         }
 
 }

 class Skills extends test{
     constructor(name, newSkill){
        super(name);
        this.newSkill = newSkill

        //make child from a class that will carry all data from parent
        //use super to change the variable in the created child class
        //will carry over default variables
    }
 }
 
 
  let testSkills = new Skills("ravenger", 'vantage')
  let testPaladin = new test('paladin','defender', 'aegis');
 
 testPaladin.setChar('fredrick')
 testPaladin.setPeople('fredrick','stahl')
 testPaladin.getQuote()
 
 console.log(testSkills)
 
 
 let paladin = new classPromote('paladin','defender', 'aegis');
 let greatKnight = new classPromote('great knight','luna', 'duel guard+');
 let cavilier = new classBase('cavilier', 'discipline', 'outdoorFighter', paladin, greatKnight);


//console.log(ninja.getLoadOut())
//console.log(cavilier.allSkills())
//console.log(cavilier)
//console.log(testPaladin)
//console.log(paladin)

