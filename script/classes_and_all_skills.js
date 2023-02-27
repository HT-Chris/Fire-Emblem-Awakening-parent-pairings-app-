
/*
each PARENT character must have

   X have base class and promotes
   X have re-class options
   X pull all skills from above classes
    have classes that parent is passing down
*/

/*
each CHILD must have

    base class and promote
    mothers child classes
        import fathers passing classes
    all skills from above classes
*/

/*
functions
    universal
       X base classes and promotes
       X     with skills
    parent
      X  make characters with base classes and re-class options
        what classes parents are passing down -- mother will pass down child's initial classes and father is own passing classes
        gender specific classes convert table
        get all skills from above classes

    for child
        combine list of parent's and initial classes
        ** use all skill function
 */



 ////////CLASSES

        


//////PROMOTED


class   CLASS_PROMOTED {
    constructor(name, earlySkill, lateSkill, base){
        this.class = name,
        this.earlySkill = earlySkill,
        this.lateSkill = lateSkill,
        this.preClass = base
    }
    
    getSkills(){
        let values = Object.values(this)
        return values.slice(1)
    }
    
    getPreClass(){
        return this.preClass
    }
    
    
}


//////BASE

class BASE_CLASS{
    constructor(name, earlySkill, lateSkill, promotion_one, promotion_two){
        this.class = name,
        this.earlySkill = earlySkill,
        this.lateSkill = lateSkill,
        this.promotion_one = promotion_one,
        this.promotion_two = promotion_two
    }
    
    getAllClasses(){
        let values = Object.values(this)
        let base = values[0]
        let promoteOne = values[3].class
        let promoteTwo = values[4].class
        return [base, promoteOne, promoteTwo]
    }
    
    getAllSkills(){
        let values = Object.values(this)
        let baseSkills =  [values[1], values[2]] 
        let promoteOneSkills = [values[3].earlySkill, values[3].lateSkill] 
        let promoteTwoSkills = [values[4].earlySkill, values[4].lateSkill] 
        return [baseSkills, promoteOneSkills, promoteTwoSkills].flat()
        
    }
    
}


class   _CHAR_CLASSES {
    constructor(name, start, reClassOne, reClassTwo) {
        this.name = name
        this.start = start
        this.reClassOne = reClassOne
        this.reClassTwo = reClassTwo
    }
    
    
    getSkill(){
      let first = this.start
      let second = this.reClassOne
      let third = this.reClassTwo
     return [first.getAllSkills(), second.getAllSkills(), third.getAllSkills()].flat() 
    }
    
}



/////PROMOTED CLASS VARIABLES

const paladin = new CLASS_PROMOTED('Paladin', 'Defender', 'Aegis', 'Cavalier' )
const greatKnight = new CLASS_PROMOTED('Great Knight', 'Luna', 'Duel Guard+', 'Cavalier, Knight')
const swordMaster = new CLASS_PROMOTED('Swordmaster', 'Astra', 'Swordfaire', 'Myrmidon')
const assassin = new CLASS_PROMOTED('Assassin', 'Lethality', 'Pass', 'Myrmidon')
const wyvernlord = new CLASS_PROMOTED('Wyvern Lord', 'Quick Burn', 'Swordbreaker', 'Wyvern Rider')
const griffinKnight = new CLASS_PROMOTED('Griffin Knight', 'Deliverer', 'Lancebreaker', 'Wyvern Rider')
const general = new CLASS_PROMOTED('General', 'Rally Defense', 'Pavise', 'Knight')
const beserker = new CLASS_PROMOTED('Beserker', 'Wrath', 'Axefaire', 'barbarian')
const warrior = new CLASS_PROMOTED('Warrior', 'Rally Strength', 'Counter', 'Barbarian, Fighter')
const hero = new CLASS_PROMOTED
const bowKnight = new CLASS_PROMOTED
const sniper = new CLASS_PROMOTED
const trickster = new CLASS_PROMOTED
const sorcerer = new CLASS_PROMOTED
const darkKnight = new CLASS_PROMOTED
const sage = new CLASS_PROMOTED
const warMonk = new CLASS_PROMOTED
const valkyrie = new CLASS_PROMOTED
const darkFlier = new CLASS_PROMOTED
const falconKnight = new CLASS_PROMOTED
const griffonRider = new CLASS_PROMOTED
const grandmaster = new CLASS_PROMOTED
const greatLord = new CLASS_PROMOTED

////////BASE CLASSES

const cavalier = new BASE_CLASS('Cavalier', 'Discipline', 'Outdoor Fighter', paladin, greatKnight)
const myrmidon = new BASE_CLASS('Myrmidon', 'Avoid +10', 'Vantage', assassin, swordMaster)
const wyvernRider = new BASE_CLASS('Wyvern Rider', 'Strength+2', 'Tantivy', wyvernlord, griffinKnight)
const knight = new BASE_CLASS('Knight', 'Defense +2', 'Indoor Fighter', 'Great Knight', 'General')

//////////CHARACTER CLASS OPTIONS

const sully_CHAR_CLASSES = new _CHAR_CLASSES('Sully',cavalier, myrmidon, wyvernRider)



///////////MISC


//  GENDER SPECIFIC CLASSES CONVERSION --not finished

let genderClassConversion ={
    lissa : ['pegasus knight, troubadour' , 'myrmidon, barbarian'],
    miriel: ['troubadour', 'barbarian'],
    maribelle : ['pegasus knight, troubadour','cavalier, priest'],
    panne: ['wyvern rider', 'barbarian'],
    cherche:['troubadour cleric', 'fighter priest'],
    olivia:['pegasus knight, dancer', 'mercenary, barbarian'],
    vaike: ['fighter barbarian', 'knight mercenary'],
    gaius:['fighter', 'pegasus knight'],
    donnel:['fighter, villager','pegasus knight, troubadour'],
    gregor:['barbarian','troubadour'],
    henry:['barbarian', 'troubadour']
}

//console.log(sully_CHAR_CLASSES.getSkill())





