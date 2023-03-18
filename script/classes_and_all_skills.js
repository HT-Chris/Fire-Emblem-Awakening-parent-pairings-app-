
//////PROMOTED


class   CLASS_PROMOTED {
    constructor(name, earlySkill, lateSkill, base, base2 = 'none'){
        this.class = name,
        this.earlySkill = earlySkill,
        this.lateSkill = lateSkill,
        this.preClass1 = base
        this.preClass2 = base2
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
    constructor(name, earlySkill, lateSkill, promotion_one = 'none', promotion_two = 'none'){
        this.class = name,
        this.earlySkill = earlySkill,
        this.lateSkill = lateSkill,
        this.promotion_one = promotion_one ?? 'none',
        this.promotion_two = promotion_two ?? 'none'
    }
    
    getAllClasses(){
        let values, base, promoteOne, promoteTwo
        values = Object.values(this)
        base = values[0]
        promoteOne =  values[3].class ?? 'none'
        promoteTwo = values[4].class ?? 'none'
        return [base, promoteOne, promoteTwo]
    }
    
    getAllSkills(){
        let values = Object.values(this)
        let baseSkills =  [values[1], values[2]] 
        let promoteOneSkills =  [values[3]?.earlySkill, values[3]?.lateSkill] ?? 'none'
        let promoteTwoSkills =  [values[4]?.earlySkill, values[4]?.lateSkill] ?? 'none'
        return [baseSkills, promoteOneSkills, promoteTwoSkills].flat() || 'none'
        
    }
    
}

class   _CHAR_CLASSES {
    constructor(name, sex, start, reClassOne, reClassTwo) {
        this.name = name
        this.sex = sex
        this.start = start
        this.reClassOne = reClassOne
        this.reClassTwo = reClassTwo
    }
    
    getClasses(){
        let first = this.start
        let second = this.reClassOne
        let third = this.reClassTwo 
        let fourth = this.reClassThree ?? 'nonn'
       let classes = [first.getAllClasses(), second.getAllClasses(), third.getAllClasses(), fourth.getAllClasses?.()].flat() 
       
       return doubles(classes)
    }
       

    getSkill(){
      let first = this.start
      let second = this.reClassOne
      let third = this.reClassTwo
     return [first.getAllSkills(), second.getAllSkills(), third.getAllSkills()].flat() 
    }   
}

class avatar {
    constructor(name, sex, start, gender){
        this.name = name
        this.sex = sex
        this.start = start
        this.classes = [...allClasses.base] 
        this.genderClasses = gender
    }

    getClasses(){
        let classesGender = [...this.classes, ...this.genderClasses]
        let list = []
        for(let c of classesGender){
             list.push(c.getAllClasses())
        }
         return doubles(list.flat())

    }

    getSkill(){
        let cla = [...this.classes, ...this.genderClasses]
        let list = []
        for(let c of cla){
            if(c instanceof BASE_CLASS){
                list.push(c.getAllSkills())
            }
        }
        
      return doubles(list.flat())
    }

}

class   _CHILD_CLASSES {
    constructor(name, sex, start, reClassOne, reClassTwo, reClassThree = 'none') {
        this.name = name
        this.sex = sex
        this.start = start
        this.reClassOne = reClassOne
        this.reClassTwo = reClassTwo
        this.reClassThree = reClassThree
    }

    getClasses(){
    let first = this.start
    let second = this.reClassOne
    let third = this.reClassTwo 
    let fourth = this.reClassThree ?? 'nonn'
   let classes = [first.getAllClasses(), second.getAllClasses(), third.getAllClasses(), fourth.getAllClasses?.()].flat() 
   
   return doubles(classes)
}
   
getSkill(){
    let first = this.start
    let second = this.reClassOne
    let third = this.reClassTwo 
    let fourth = this.reClassThree ?? 'nonn'
   let skill = [first.getAllSkills(), second.getAllSkills(), third.getAllSkills(), fourth.getAllSkills?.()].flat() 
   
   return doubles(skill)
}
}

//function to check who has a class or skill


let doubles = function(arr){
    let sorted = new Set()
    
    for(let i of arr){
        sorted.add(i)
    }
    sorted.delete(undefined)
    sorted.delete('none')
    return sorted
}

let condense = function(x, y){

    let arr = [...x].concat(...y)
    let sorted = new Set()
    
    for(let i of arr){
        sorted.add(i)
    }
    sorted.delete(undefined)
    sorted.delete('none')
    return sorted
}

let baby = function(parentOne, parentTwo){




    // see if parents are opposite sex
    let reproductive = parentOne.sex + parentTwo.sex
    reproductive = reproductive.split('').sort().join('')

    if( !parentTable.includes(reproductive)){
        return false + ' no baby'
    }

    // figure out who is father and mother
let daddy = ''
let mommy = ''
if(parentOne.sex === 'm' || parentOne.sex === 'lm' || parentOne.sex === 'am'){
    daddy = parentOne
    mommy = parentTwo
}else{
    mommy = parentOne
    daddy = parentTwo
}

if( mommy.name === 'Lissa' && daddy.name === 'Chrom'){
    return false + 'gross dude'
}

let key = Object.keys(parentNchild)
var values = Object.values(parentNchild)
let child = new Map()

let daddyClass = daddy.getClasses()
let daddySkills = daddy.getSkill()
let mommyClass = mommy.getClasses()
let mommySkills = mommy.getSkill()


// finding the child(s) and getting the classes and skills together
child.name = values[key.indexOf(mommy.name)].name
child.classes = condense(values[key.indexOf(mommy.name)].getClasses(), daddyClass)
child.skills = condense(values[key.indexOf(mommy.name)].getSkill(), daddySkills)

if(daddy.name === 'Chrom'){
   let child2 = new Map()
    child2.set('name', 'Lucina' )
   .set('classes', [...lucina_CHILD_CLASSES.getClasses(), ...mommy.getClasses()] )
   .set('skills', [...lucina_CHILD_CLASSES.getSkill(), ...mommy.getSkill()])
   let children = [child, child2]
    return children
}
return child

}

let avatarBaby = function(mother, father){
    let child2 = new Map()
    child2.set('name', 'Morgan')
    if(!mother.sex == 'af'){
        child2.set('sex', 'f')
    }else{child2.set('sex', 'm')}
    child2.set('classes', [...avatar.getClasses(),...avatar.getClasses()] )

    let child = new Map()
    let children = [child, child2]



    //return children
    
}


/////PROMOTED CLASS VARIABLES
const paladin = new CLASS_PROMOTED('Paladin', 'Defender', 'Aegis', 'Cavalier' )
const greatKnight = new CLASS_PROMOTED('Great Knight', 'Luna', 'Duel Guard+', 'Cavalier', 'Knight')
const swordMaster = new CLASS_PROMOTED('Swordmaster', 'Astra', 'Swordfaire', 'Myrmidon')
const assassin = new CLASS_PROMOTED('Assassin', 'Lethality', 'Pass', 'Myrmidon')
const wyvernlord = new CLASS_PROMOTED('Wyvern Lord', 'Quick Burn', 'Swordbreaker', 'Wyvern Rider')
const griffinKnight = new CLASS_PROMOTED('Griffin Knight', 'Deliverer', 'Lancebreaker', 'Wyvern Rider')
const general = new CLASS_PROMOTED('General', 'Rally Defense', 'Pavise', 'Knight')
const berserker = new CLASS_PROMOTED('Beserker', 'Wrath', 'Axefaire', 'barbarian')
const warrior = new CLASS_PROMOTED('Warrior', 'Rally Strength', 'Counter', 'Barbarian', 'Fighter')
const hero = new CLASS_PROMOTED('Hero', 'Sol', 'Axebreaker', 'Fighter', 'Mercenary')
const bowKnight = new CLASS_PROMOTED('Bowknight', 'Rally Skill', 'Bowbreaker', 'Mercenary', 'Archer')
const sniper = new CLASS_PROMOTED('Sniper', 'Hit Rate', 'Bowfaire', 'Archer')
const trickster = new CLASS_PROMOTED('Trickster', 'Lucky Seven', 'Acrobat', 'Thief')
const sorcerer = new CLASS_PROMOTED('Sorcerer', 'Vengeance', 'Tomebreaker', 'Dark Mage')
const darkKnight = new CLASS_PROMOTED('Dark Knight', 'Slow Burn', 'Lifetaker', 'Dark Mage', 'Mage')
const sage = new CLASS_PROMOTED('Sage', 'Rally Magic', 'Tomefaire', 'Mage', 'Priest/Cleric')
const warMonkCleric = new CLASS_PROMOTED('War Monk/Cleric', 'Rally Luck', 'Renewal', 'Priest/Cleric', 'Troubadour')
const valkyrie = new CLASS_PROMOTED('Valkyrie', 'Rally Res', 'Dual Support+', 'Troubadour')
const darkFlier = new CLASS_PROMOTED('Dark Flier', 'Rally Movement', 'Galeforce', 'Pegasus Knight')
const falconKnight = new CLASS_PROMOTED('Falcon Knight', 'Rally Speed', 'Lancefaire', 'Pegasus Knight')
const griffonRider = new CLASS_PROMOTED('Griffon Rider', 'Deliverer', 'Lancebreaker', 'Wyvern Rider')
const grandmaster = new CLASS_PROMOTED('Grandmaster', 'Ignis','Rally Spectrum', 'Tactician')
const greatLord = new CLASS_PROMOTED('Great Lord', 'Aether', 'Rightful King', 'Lord')


////////BASE CLASSES

const cavalier = new BASE_CLASS('Cavalier', 'Discipline', 'Outdoor Fighter', paladin, greatKnight)
const myrmidon = new BASE_CLASS('Myrmidon', 'Avoid +10', 'Vantage', assassin, swordMaster)
const wyvernRider = new BASE_CLASS('Wyvern Rider', 'Strength+2', 'Tantivy', wyvernlord, griffinKnight)
const knight = new BASE_CLASS('Knight', 'Defense +2', 'Indoor Fighter', greatKnight, general)
const barbarian = new BASE_CLASS('Barbarian', 'Despoil', 'Gamble', berserker, warrior)
const fighter = new BASE_CLASS('Fighter', 'Max HP +5', 'Zeal', warrior, hero)
const mercenary = new BASE_CLASS('Mercenary', 'Armsthrift', 'Patience', hero, bowKnight)
const archer = new BASE_CLASS('Archer', 'Skill +2', 'Prescience', bowKnight, sniper)
const thief = new BASE_CLASS('Thief', 'Locketouch', 'Movement +1', trickster, assassin)
const darkMage = new BASE_CLASS('Dark Mage', 'Hex', 'Anathema', sorcerer, darkKnight)
const mage = new BASE_CLASS('Mage', 'Magic +2', 'Concentration', darkKnight, sage)
const priestCleric = new BASE_CLASS('PriestCleric', 'Miracle', 'Healtouch', warMonkCleric, valkyrie)
const troubadour = new BASE_CLASS('Troubadour', 'Resistance +2', 'Demoiselle', warMonkCleric, valkyrie)
const pegasusKnight = new BASE_CLASS('Pegasus Knight', 'Speed +2', 'Relief', darkFlier, falconKnight)
const tactician = new BASE_CLASS('Tacticician', 'Venteran', 'Solidarity', grandmaster)
const lord = new BASE_CLASS('Lord', 'Dual Strike+', 'Charm', greatLord)

const villager = new BASE_CLASS('Villager', 'Aptitude', 'Underdog')
const taguel = new BASE_CLASS('Taguel', 'Even Rhythm', 'Beastbane')
const manakete = new BASE_CLASS('Manakete', "odd Rhythm", 'Wyrmsbane')
const dancer = new BASE_CLASS('Dancer', 'Luck +4', 'Special Dance')

const allClasses = { base:[ cavalier, myrmidon, wyvernRider, knight, mercenary, archer, thief,
     darkMage, mage, priestCleric, tactician],
    af:[pegasusKnight, troubadour],
    am:[barbarian,fighter]
}

//////////CHARACTER CLASS OPTIONS


const avatarM_CHAR_CLASSES = new avatar('AvatarM', 'am', tactician, allClasses.am)
const avatarF_CHAR_CLASSES = new avatar('AvatarF', 'af', tactician, allClasses.af)

console.log(avatarM_CHAR_CLASSES.getClasses())

const chrom_CHAR_CLASSES = new _CHAR_CLASSES('Chrom', 'lm', lord, cavalier, archer)
const lissa_CHAR_CLASSES = new _CHAR_CLASSES('Lissa', 'f', priestCleric, pegasusKnight, troubadour)
const frederick_CHAR_CLASSES = new _CHAR_CLASSES('Frederick', 'm', cavalier, knight, wyvernRider)
const sully_CHAR_CLASSES = new _CHAR_CLASSES('Sully', 'f', cavalier, myrmidon, wyvernRider)
const virion_CHAR_CLASSES = new _CHAR_CLASSES('Virion', 'm', archer, wyvernRider, mage)
const stahl_CHAR_CLASSES = new _CHAR_CLASSES('Stahl', 'm', cavalier, archer, myrmidon)
const vaike_CHAR_CLASSES = new _CHAR_CLASSES('Vaike', 'm', fighter, thief, barbarian)
const miriel_CHAR_CLASSES = new _CHAR_CLASSES('Miriel', 'f', mage, troubadour, darkMage)
const sumia_CHAR_CLASSES = new _CHAR_CLASSES('Sumia', 'f', pegasusKnight, knight, priestCleric)
const kellam_CHAR_CLASSES = new _CHAR_CLASSES('Kellam', 'm', knight, thief, priestCleric)
const donnel_CHAR_CLASSES = new _CHAR_CLASSES('Donnel', 'm', villager, fighter, mercenary)
const lonqu_CHAR_CLASSES = new _CHAR_CLASSES('Lon\'qu', 'm', myrmidon, thief, wyvernRider )
const ricken_CHAR_CLASSES = new _CHAR_CLASSES('Ricken', 'm', mage, cavalier, archer)
const maribelle_CHAR_CLASSES = new _CHAR_CLASSES('Maribelle', 'f', troubadour, pegasusKnight, mage)
const panne_CHAR_CLASSES = new _CHAR_CLASSES('Panne', 'f', taguel, thief, wyvernRider)
const gaius_CHAR_CLASSES = new _CHAR_CLASSES('Gaius', 'm', thief, fighter, myrmidon)
const cordelia_CHAR_CLASSES = new _CHAR_CLASSES('Cordelia', 'f', pegasusKnight, mercenary, darkMage)
const gregor_CHAR_CLASSES = new _CHAR_CLASSES('Gregor', 'm', mercenary, barbarian, myrmidon)
const nowi_CHAR_CLASSES = new _CHAR_CLASSES('Nowi', 'f', manakete, mage, wyvernRider)
const libra_CHAR_CLASSES = new _CHAR_CLASSES('Libra', 'm', priestCleric, mage, darkMage)
const tharja_CHAR_CLASSES = new _CHAR_CLASSES('Tharja', 'f', darkMage, knight, archer)
const olivia_CHAR_CLASSES = new _CHAR_CLASSES('Olivia', 'f', dancer, myrmidon, pegasusKnight)
const cherche_CHAR_CLASSES = new _CHAR_CLASSES('Cherche', 'f', wyvernRider, troubadour, priestCleric)
const henry_CHAR_CLASSES = new _CHAR_CLASSES('Henry', 'm', darkMage, barbarian, thief)

// AVATAR ONLY ROMANCE

const anna_CHAR_CLASSES = new _CHAR_CLASSES('Anna', 'zf', thief, archer, mage)
const sayri_CHAR_CLASSES = new _CHAR_CLASSES('Say\'ri', 'zf', myrmidon, pegasusKnight, wyvernRider)
const tiki_CHAR_CLASSES = new _CHAR_CLASSES('Tiki', 'zf', manakete, wyvernRider, mage)
const basilio_CHAR_CLASSES = new _CHAR_CLASSES('Basilio', 'zm', fighter, barbarian, mage)
const flavia_CHAR_CLASSES = new _CHAR_CLASSES('Flavia', 'zf', mercenary, thief, knight)



///////////CHILDREN

const lucina_CHILD_CLASSES = new _CHILD_CLASSES('Lucina', 'cf', lord, cavalier, archer)
const owain_CHILD_CLASSES = new _CHILD_CLASSES('Owain', 'cm', myrmidon, priestCleric, barbarian)
const indigo_CHILD_CLASSES = new _CHILD_CLASSES('Indigo', 'cm', mercenary, myrmidon, barbarian)
const brady_CHILD_CLASSES = new _CHILD_CLASSES('Brady', 'cm', priestCleric, cavalier, mage)
const kjelle_CHILD_CLASSES = new _CHILD_CLASSES('Kjelle', 'cf', knight, myrmidon, cavalier, wyvernRider)
const cynthia_CHILD_CLASSES = new _CHILD_CLASSES('Cynthia', 'cf', pegasusKnight, knight, priestCleric)
const severa_CHILD_CLASSES = new _CHILD_CLASSES('Severa', 'cf', mercenary, pegasusKnight, darkMage)
const gerome_CHILD_CLASSES = new _CHILD_CLASSES('Gerome', 'cm', wyvernRider, fighter, priestCleric)
const yarne_CHILD_CLASSES = new _CHILD_CLASSES('Yarne', 'cm', taguel, thief, barbarian)
const laurent_CHILD_CLASSES = new _CHILD_CLASSES('Laurent', 'cm', mage, barbarian, darkMage)
const noire_CHILD_CLASSES = new _CHILD_CLASSES('Noire', 'cf', archer, knight, darkMage)
const nah_CHILD_CLASSES =new _CHILD_CLASSES('Nah', 'cf', manakete, wyvernRider, mage)

let morgan// note: has no sex for baby making purposes



///////////MISC

//  GENDER SPECIFIC CLASSES CONVERSION --not finished

childTable = [
    lucina_CHILD_CLASSES, owain_CHILD_CLASSES, indigo_CHILD_CLASSES,
    brady_CHILD_CLASSES, kjelle_CHILD_CLASSES, cynthia_CHILD_CLASSES, 
    severa_CHILD_CLASSES, gerome_CHILD_CLASSES, yarne_CHILD_CLASSES, 
    laurent_CHILD_CLASSES, noire_CHILD_CLASSES, nah_CHILD_CLASSES 
]

parentNchild = {
    'Chrom': lucina_CHILD_CLASSES,
    'Lissa': owain_CHILD_CLASSES,
    'Olivia': indigo_CHILD_CLASSES,
    'Maribelle' : brady_CHILD_CLASSES,
    'Sully' : kjelle_CHILD_CLASSES,
    'Sumia': cynthia_CHILD_CLASSES,
    'Cordelia': severa_CHILD_CLASSES,
    'Cherche': gerome_CHILD_CLASSES,
    'Panne': yarne_CHILD_CLASSES,
    'Miriel': laurent_CHILD_CLASSES,
    'Tharja': noire_CHILD_CLASSES,
    'Nowi': nah_CHILD_CLASSES,
    'AvatarM': 'morgan',
    'AvatarF': 'morgan'
}

// genderClasses ={
//     lissa : [...[pegasusKnight, troubadour],...[ myrmidon, barbarian]],
//     miriel: [...[troubadour],...[barbarian]],
//     maribelle : [...[pegasusKnight, troubadour],...[cavalier, priestCleric]],
//     panne: [...[wyvernRider],...[barbarian]],
//     cherche:[...[troubadour],...[fighter],
//     olivia:[...[pegasusKnight, dancer],...[mercenary, barbarian]],
//     vaike: [...[fighter, barbarian],...[knight, mercenary]],
//     gaius:[...[fighter],...[pegasusKnight]],
//     donnel:[...[fighter, villager],...[pegasusKnight, troubadour]],
//     gregor:[...[barbarian],...[troubadour]],
//     henry:[...[barbarian],...[troubadour]]
// }

 let classConvert = new Map
 classConvert.set('Lissa', [[pegasusKnight, troubadour],[ myrmidon, barbarian]])
    .set('Miriel', [[troubadour],[barbarian]])
    .set('Maribelle', [[pegasusKnight, troubadour],[cavalier, priestCleric]])
    .set('Panne', [[wyvernRider],[barbarian]])
    .set('Cherche',[[troubadour, priestCleric],[fighter, priestCleric]])
    .set('Olivia',[[pegasusKnight, dancer],[mercenary, barbarian]])
    .set('Vaike' [[fighter, barbarian],[knight, mercenary]])
    .set('Gaius'[[fighter],[pegasusKnight]])
    .set('Donnel'[[fighter, villager],[pegasusKnight, troubadour]])
    .set('Gregor'[[barbarian],[troubadour]])
    .set('Henry'[[barbarian],[troubadour]])

let motherConvert = () =>{
    for ( let m of classConvert){

    }
}


parentTable = [
    'fm', 'afm', 'acfm', 'flm', 'aflm', 'afmz'
]



//console.log(sully_CHAR_CLASSES.getSkill())

// let test1= kjelle_CHILD_CLASSES.getSkill().length
//console.log(doubles(kjelle_CHILD_CLASSES.getSkill()))
// console.log(doubles(kjelle_CHILD_CLASSES.getSkill()).length)

//console.log(baby(tharja_CHAR_CLASSES, sully_CHAR_CLASSES))
 //console.log(baby(cordelia_CHAR_CLASSES, stahl_CHAR_CLASSES))
//  console.log(baby(sumia_CHAR_CLASSES, chrom_CHAR_CLASSES))
// console.log(baby(avatarM_CHAR_CLASSES, flavia_CHAR_CLASSES))

 //console.log(baby(stahl_CHAR_CLASSES, sully_CHAR_CLASSES))



