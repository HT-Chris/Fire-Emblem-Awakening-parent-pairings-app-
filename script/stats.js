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
        
        have a child start function that grabs growths, cap stats, and ** base stats(have in function but not tested yet)
        


ex:


        

        AVATAR AND MORGAN
=================
Avatar's inheritable stat maximums are based off of the Asset/Flaw stats chosen at the beginning of the game.

BEST:
HP: Str +1, Mag +1, Lck +2, Def +2, Res +2
STR: Str +4, Skl +2, Def +2
MAG: Mag +4, Spd +2, Res +2
SKL: Str +2, Skl +4, Def +2
SPD: Skl +2, Spd +4, Lck +2
LCK: Str +2, Mag +2, Lck +4
DEF: Lck +2, Def +4, Res +2
RES: Mag +2, Spd +2, Res +4

WORST:
HP: Str -1, Mag -1, Lck -1, Def -1, Res -1
STR: Str -3, Skl -1, Def -1
MAG: Mag -3, Spd -1, Res -1
SKL: Str -1, Skl -3, Def -1
SPD: Skl -1, Spd -3, Lck -1
LCK: Str -1, Mag -1, Lck -3
DEF: Lck -1, Def -3, Res -1
RES: Mag -1, Spd -1, Res -3

        
*/

////////////CLASS DATA


class _CLASS_BASE_STAT {
    constructor(hp, str, mag, skill, spd, luck, def, res, move) {
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

class _CLASS_CAP_STAT {

    constructor(hp, str, mag, skill, spd, luck, def, res) {
        this.hp = hp;
        this.str = str;
        this.mag = mag;
        this.skill = skill;
        this.spd = spd;
        this.luck = luck;
        this.def = def;
        this.res = res
    }
}

class _CLASS_GROWTHS {
    constructor(hp, str, mag, skill, spd, luck, def, res) {
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



class _CHAR_CAP_STAT {
    constructor(str, mag, skill, spd, luck, def, res) {
        this.str = str;
        this.mag = mag;
        this.skill = skill;
        this.spd = spd;
        this.luck = luck;
        this.def = def;
        this.res = res;

    }
}

class _CHAR_GROWTHS {
    constructor(hp, str, mag, skill, spd, luck, def, res) {
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

class _KID_GROWTHS {
    constructor(hp, str, mag, skill, spd, luck, def, res) {
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

class _CHAR_BASE_STAT {
    constructor(hp, str, mag, skill, spd, luck, def, res) {
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

class _CHAR_SHEET {
    constructor(name, start, cap, growth) {
        this.name = name;
        this.start = start;
        this.cap = cap;
        this.growth = growth;
    }
}

class _KID_SHEET {
    constructor(name, mother, start, growth) {
        this.name = name;
        this.mother = mother;
        this.start = start;
        this.growth = growth;
    }
}

////////////CHILD RECRUITMENT STATS FUNCTIONS

function CHILD_CAP_STAT(p1Cap, p2Cap) {
    let cap = []
    let size = Object.keys(sully_CHAR_CAP_STAT).length
    let mom = Object.values(p1Cap)
    let dad = Object.values(p2Cap)
    for (let i = 0; i < size; i++) {
        let total = mom[i] + dad[i]
        cap.push(total)
    }


    let child = new _CHAR_CAP_STAT(...cap)

    return child
}

function CHILD_GROWTH(p1Cap, p2Cap, kidGrow) {
    let grow = []
    let mom = Object.values(p1Cap)
    let dad = Object.values(p2Cap)
    let kid = Object.values(kidGrow)
    for (let i = 0; i < mom.length; i++) {
        grow.push(Math.floor([mom[i] + dad[i] + kid[i]] / 3))
    }
    return grow
}

function CHILD_STATS(parent1, parent2) {
    let children = {
        child1: {
            name: null,
            caps: null,
            growths: null

        },
        child2: {
            name: null,
            caps: null,
            growths: null
        }
    }

    children.child1.name = parentNkid.get(parent1.name)
    children.child1.caps = CHILD_CAP_STAT(sully_SHEET.cap, donnel_SHEET.cap)
    children.child1.growths = CHILD_GROWTH(sully_SHEET.growth, donnel_SHEET.growth, kjelle_PRE_GROWTHS)

    return children

    /*
    figure out which parent is mom and dad
        see if chrom or avatar is a parent
     return the functions for child growths, stat caps
        double for chrom and avatar
     
        ?? start stats

    */
}


// not tested yet
function PARENT_PASSING_STAT(momStat, momClass, dadStat, dadClass, child) {
    let val = Object.values(momStat)
    let momS = momStat
    let momC = momClass
    let dadS = dadStat
    let dadC = dadClass
    let mom = []
    let dad = []
    for (let i = 0; i < val.length; i++) {
        let momPass = momS[i] + momC[i]
        let dadPass = dadS[i] + dadC[i]
        mom.push(momPass)
        dad.push(dadPass)
    }

    let kid = mom + dad + child
        //let job = child.getJob()
    let job = knight_BASE_STATS /// for testing purposes

    return Math.floor([kid / 3] + job)

}



//********************************CLASSES********************************************/


///////////////////BASE

let lordM_BASE_STATS = new _CLASS_BASE_STAT(18, 6, 0, 5, 7, 7, 0, 5)
let lordF_BASE_STATS = new _CLASS_BASE_STAT(16, 5, 1, 6, 8, 6, 1, 5)
let greatLordM_BASE_STATS = new _CLASS_BASE_STAT(23, 10, 0, 7, 9, 10, 3, 6)
let greatLordF_BASE_STATS = new _CLASS_BASE_STAT(20, 8, 1, 9, 11, 8, 4, 6)
let tactician_BASE_STATS = new _CLASS_BASE_STAT(16, 4, 3, 5, 5, 5, 3, 5)
let grandmaster_BASE_STATS = new _CLASS_BASE_STAT(20, 7, 6, 7, 7, 7, 5, 6)
let cavalier_BASE_STATS = new _CLASS_BASE_STAT(18, 6, 0, 5, 6, 0, 7, 0, 7)
let paladin_BASE_STATS = new _CLASS_BASE_STAT(25, 9, 1, 7, 8, 10, 6, 8)
let greatKnight_BASE_STATS = new _CLASS_BASE_STAT(26, 11, 0, 6, 5, 14, 1, 7)
let knight_BASE_STATS = new _CLASS_BASE_STAT(18, 8, 0, 4, 2, 11, 0, 4)
let general_BASE_STATS = new _CLASS_BASE_STAT(28, 12, 0, 7, 4, 15, 3, 5)
let myrmidon_BASE_STATS = new _CLASS_BASE_STAT(16, 4, 1, 9, 10, 4, 1, 5)
let swordmaster_BASE_STATS = new _CLASS_BASE_STAT(20, 7, 2, 11, 13, 6, 4, 6)
let mercenary_BASE_STATS = new _CLASS_BASE_STAT(18, 5, 0, 8, 7, 5, 0, 5)
let hero_BASE_STATS = new _CLASS_BASE_STAT(22, 8, 1, 11, 13, 6, 4, 6)
let fighter_BASE_STATS = new _CLASS_BASE_STAT(20, 8, 0, 5, 5, 4, 0, 5, )
let warrior_BASE_STATS = new _CLASS_BASE_STAT(28, 12, 0, 8, 7, 7, 3, 6)
let barbarian_BASE_STATS = new _CLASS_BASE_STAT(22, 8, 0, 3, 8, 3, 0, 6)
let archer_BASE_STATS = new _CLASS_BASE_STAT(16, 5, 0, 8, 6, 5, 0, 5)
let sniper_BASE_STATS = new _CLASS_BASE_STAT(20, 70, 1, 12, 9, 10, 3, 6, )
let bowKnight_BASE_STATS = new _CLASS_BASE_STAT(24, 80, 10, 10, 6, 2, 8)
let thief_BASE_STATS = new _CLASS_BASE_STAT(16, 3, 0, 6, 8, 2, 0, 5)
let assassin_BASE_STATS = new _CLASS_BASE_STAT(21, 8, 0, 13, 12, 5, 1, 6)
let trickster_BASE_STATS = new _CLASS_BASE_STAT(19, 4, 4, 10, 11, 3, 5, 6)
let pegasusknight_BASE_STATS = new _CLASS_BASE_STAT(16, 4, 2, 7, 8, 4, 6, 7)
let falconKnight_BASE_STATS = new _CLASS_BASE_STAT(20, 6, 3, 10, 11, 6, 9, 8)
let darkflier_BASE_STATS = new _CLASS_BASE_STAT(19, 5, 6, 8, 10, 5, 9, 8)
let wyvernRider_BASE_STATS = new _CLASS_BASE_STAT(19, 7, 0, 6, 5, 8, 0, 7)
let wyvernLord_BASE_STATS = new _CLASS_BASE_STAT(24, 11, 0, 8, 7, 11, 3, 8)
let griffonRider_BASE_STATS = new _CLASS_BASE_STAT(22, 9, 0, 10, 9, 8, 3, 8)
let mage_BASE_STATS = new _CLASS_BASE_STAT(16, 0, 4, 3, 4, 2, 3, 5)
let sage_BASE_STATS = new _CLASS_BASE_STAT(20, 1, 7, 5, 7, 4, 5, 6)
let darkMage_BASE_STATS = new _CLASS_BASE_STAT(18, 1, 3, 2, 3, 4, 4, 5)
let sorcerer_BASE_STATS = new _CLASS_BASE_STAT(23, 2, 6, 4, 4, 7, 7, 6)
let darkKnight_BASE_STATS = new _CLASS_BASE_STAT(25, 4, 5, 6, 5, 9, 5, 8)
let priest_cleric_BASE_STATS = new _CLASS_BASE_STAT(16, 0, 3, 2, 4, 1, 6, 5)
let warMonk_cleric_BASE_STATS = new _CLASS_BASE_STAT(24, 5, 5, 5, 4, 6, 6, 6, 6, )
let troubadour_BASE_STATS = new _CLASS_BASE_STAT(16, 0, 3, 2, 5, 1, 5, 7)
let valkyrie_BASE_STATS = new _CLASS_BASE_STAT(19, 0, 5, 4, 8, 3, 8, 8)
let villager_BASE_STATS = new _CLASS_GROWTHS(16, 1, 0, 1, 1, 0, 1, 0, 5)
let dancer_BASE_STATS = new _CLASS_BASE_STAT(16, 1, 1, 5, 8, 3, 1, 5)
let taguel_BASE_STATS = new _CLASS_BASE_STAT(18, 2, 0, 4, 5, 3, 2, 6)
let manakete_BASE_STATS = new _CLASS_BASE_STAT(18, 2, 0, 1, 1, 2, 2, 5)
let dreadFighter_BASE_STATS = new _CLASS_BASE_STAT(22, 8, 4, 7, 9, 7, 10, 6)
let bride_BASE_STATS = new _CLASS_BASE_STAT(21, 7, 6, 11, 10, 7, 6, 6, )
let conquerer_BASE_STATS = new _CLASS_BASE_STAT(24, 10, 3, 9, 8, 12, 5, 8)

//////////////////GROWTHS

let lord_GROWTHS = new _CLASS_GROWTHS(40, 20, 0, 20, 20, 10, 5)
let greatLord_GROWTHS = new _CLASS_GROWTHS(40, 20, 0, 20, 20, 10, 5)
let tactician_GROWTHS = new _CLASS_GROWTHS(40, 15, 15, 15, 15, 10, 10)
let grandmaster_GROWTHS = new _CLASS_GROWTHS(40, 15, 15, 15, 15, 10, 10)
let cavalier_GROWTHS = new _CLASS_GROWTHS(45, 20, 0, 20, 20, 0, 10, 5)
let paladin_GROWTHS = new _CLASS_GROWTHS(45, 20, 0, 20, 20, 10, 10)
let greatKnight_GROWTHS = new _CLASS_GROWTHS(50, 25, 0, 15, 15, 15, 5)
let knight_GROWTHS = new _CLASS_GROWTHS(50, 20, 0, 15, 10, 0, 15, 5)
let general_GROWTHS = new _CLASS_GROWTHS(50, 25, 0, 15, 10, 15, 10)
let myrmidon_GROWTHS = new _CLASS_GROWTHS(40, 20, 0, 25, 25, 5, 5)
let swordmaster_GROWTHS = new _CLASS_GROWTHS(40, 20, 0, 25, 25, 5, 10)
let mercenary_GROWTHS = new _CLASS_GROWTHS(45, 20, 0, 25, 20, 10, 5)
let hero_GROWTHS = new _CLASS_GROWTHS(45, 20, 0, 25, 20, 10, 5)
let fighter_GROWTHS = new _CLASS_GROWTHS(45, 25, 0, 20, 15, 10, 5)
let warrior_GROWTHS = new _CLASS_GROWTHS(45, 25, 0, 20, 15, 10, 5)
let barbarian_GROWTHS = new _CLASS_GROWTHS(50, 25, 0, 15, 20, 5, 5, )
let berserker_GROWTHS = new _CLASS_GROWTHS(50, 25, 0, 15, 20, 5, 5)
let archer_GROWTHS = new _CLASS_GROWTHS(45, 15, 0, 30, 15, 10, 5)
let sniper_GROWTHS = new _CLASS_GROWTHS(45, 15, 0, 30, 15, 15, 5)
let bowKnight_GROWTHS = new _CLASS_GROWTHS(50, 20, 0, 25, 20, 5, 5)
let thief_GROWTHS = new _CLASS_GROWTHS(35, 15, 5, 25, 25, 5, 5)
let assassin_GROWTHS = new _CLASS_GROWTHS(40, 20, 0, 30, 25, 5, 5)
let trickster_GROWTHS = new _CLASS_GROWTHS(35, 10, 15, 25, 20, 5, 10)
let pegasusKnight_GROWTHS = new _CLASS_GROWTHS(40, 15, 5, 25, 25, 5, 10)
let falconKnight_GROWTHS = new _CLASS_GROWTHS(40, 15, 10, 25, 25, 5, 10)
let darkFlier_GROWTHS = new _CLASS_GROWTHS(40, 10, 15, 20, 20, 5, 10)
let wyvernRider_GROWTHS = new _CLASS_GROWTHS(45, 30, 0, 15, 15, 10, 5)
let wyvernLord_GROWTHS = new _CLASS_GROWTHS(45, 30, 0, 15, 15, 10, 5)
let griffonRider_GROWTHS = new _CLASS_GROWTHS(45, 25, 0, 20, 20, 5, 10)
let mage_GROWTHS = new _CLASS_GROWTHS(35, 0, 20, 20, 20, 5, 10)
let sage_GROWTHS = new _CLASS_GROWTHS(50, 5, 15, 15, 15, 10, 10)
let darkMage_GROWTHS = new _CLASS_GROWTHS(45, 0, 20, 15, 15, 10, 10)
let sorcerer_GROWTHS = new _CLASS_GROWTHS(45, 0, 20, 15, 15, 10, 10)
let darkKnight_GROWTHS = new _CLASS_GROWTHS(50, 5, 15, 15, 15, 10, 5)
let priest_cleric_GROWTHS = new _CLASS_GROWTHS(35, 5, 15, 15, 15, 5, 15)
let warMonk_cleric_GROWTHS = new _CLASS_GROWTHS(45, 15, 15, 10, 15, 10, 10)
let troubadour_GROWTHS = new _CLASS_GROWTHS(35, 0, 20, 10, 20, 5, 15)
let valkyrie_GROWTHS = new _CLASS_GROWTHS(35, 0, 20, 10, 20, 5, 15)
let villager_GROWTHS = new _CLASS_GROWTHS(35, 10, 0, 5, 5, 0, 10, 5)
let dancer_GROWTHS = new _CLASS_GROWTHS(35, 5, 0, 25, 25, 5, 5)
let taguelM_GROWTHS = new _CLASS_GROWTHS(45, 20, 0, 15, 15, 15, 5)
let taguelF_GROWTHS = new _CLASS_GROWTHS(40, 15, 0, 20, 20, 10, 5)
let manakete_GROWTHS = new _CLASS_GROWTHS(50, 20, 5, 20, 20, 15, 15)
let conquerer_GROWTHS = new _CLASS_GROWTHS(50, 20, 5, 20, 20, 10, 10, )


///////////////////CAPS
let lord_CAPS = new _CLASS_CAP_STAT(60, 25, 20, 26, 28, 30, 25, 25)
let tactician_CAPS = new _CLASS_CAP_STAT(60, 25, 25, 25, 30, 25, 25)
let cavalier_CAPS = new _CLASS_CAP_STAT(60, 26, 20, 25, 25, 30, 26, 26)
let knight_CAPS = new _CLASS_CAP_STAT(60, 30, 20, 26, 23, 30, 30, 22)
let myrmidon_CAPS = new _CLASS_CAP_STAT(60, 24, 22, 27, 28, 30, 22, 24)
let mercenary_CAPS = new _CLASS_CAP_STAT(60, 26, 20, 28, 26, 30, 25, 23)
let fighter_CAPS = new _CLASS_CAP_STAT(60, 29, 20, 26, 25, 30, 22, 20)
let barbarian_CAPS = new _CLASS_CAP_STAT(60, 30, 20, 23, 27, 30, 22, 20)
let archer_CAPS = new _CLASS_CAP_STAT(60, 26, 20, 29, 25, 30, 25, 21)
let thief_CAPS = new _CLASS_CAP_STAT(60, 22, 20, 30, 28, 30, 21, 20)
let pegasusKnight_CAPS = new _CLASS_CAP_STAT(60, 24, 23, 28, 27, 30, 22, 25)
let wyvernRider_CAPS = new _CLASS_CAP_STAT(60, 28, 20, 24, 24, 30, 28, 20)
let mage_CAPS = new _CLASS_CAP_STAT(60, 20, 28, 27, 26, 30, 21, 25)
let darkMage_CAPS = new _CLASS_CAP_STAT(60, 20, 27, 25, 25, 30, 25, 27)
let priest_cleric_CAPS = new _CLASS_CAP_STAT(60, 22, 25, 24, 25, 30, 22, 27)
let troubadour_CAPS = new _CLASS_CAP_STAT(60, 20, 26, 24, 26, 30, 20, 28)
let greatLordM_CAPS = new _CLASS_CAP_STAT(80, 43, 30, 40, 41, 45, 42, 40)
let greatLordF_CAPS = new _CLASS_CAP_STAT(80, 40, 30, 42, 44, 45, 40, 40)
let grandmaster_CAPS = new _CLASS_CAP_STAT(80, 40, 40, 40, 40, 45, 40, 40)
let paladin_CAPS = new _CLASS_CAP_STAT(80, 42, 30, 42, 44, 45, 40, 40)
let greatKnight_CAPS = new _CLASS_CAP_STAT(80, 48, 20, 34, 37, 45, 48, 30)
let general_CAPS = new _CLASS_CAP_STAT(80, 50, 30, 41, 35, 45, 50, 35)
let swordmaster_CAPS = new _CLASS_CAP_STAT(80, 8, 34, 44, 46, 45, 33, 38)
let hero_CAPS = new _CLASS_CAP_STAT(80, 42, 30, 46, 42, 45, 40, 36)
let warrior_CAPS = new _CLASS_CAP_STAT(80, 48, 30, 42, 40, 45, 40, 35)
let berserker_CAPS = new _CLASS_CAP_STAT(80, 50, 30, 35, 44, 45, 34, 30)
let sniper_CAPS = new _CLASS_CAP_STAT(80, 41, 30, 48, 40, 45, 40, 31)
let bowKnight_CAPS = new _CLASS_CAP_STAT(80, 40, 30, 43, 41, 45, 35, 30)
let assassin_CAPS = new _CLASS_CAP_STAT(80, 40, 30, 48, 46, 45, 31, 30)
let trickster_CAPS = new _CLASS_CAP_STAT(80, 35, 38, 45, 43, 45, 30, 40)
let falconKnight_CAPS = new _CLASS_CAP_STAT(80, 38, 35, 45, 44, 45, 33, 40)
let darkFlier_CAPS = new _CLASS_CAP_STAT(80, 36, 42, 41, 46, 45, 32, 41)
let wyverLord_CAPS = new _CLASS_CAP_STAT(80, 46, 30, 38, 38, 45, 46, 30)
let griffonRider_CAPS = new _CLASS_CAP_STAT(80, 40, 30, 43, 41, 45, 40, 30)
let sage_CAPS = new _CLASS_CAP_STAT(80, 30, 46, 43, 42, 45, 31, 40)
let sorcerer_CAPS = new _CLASS_CAP_STAT(80, 30, 44, 38, 40, 45, 41, 44)
let darkKnight_CAPS = new _CLASS_CAP_STAT(80, 38, 41, 40, 40, 45, 42, 38)
let warMonk_cleric_CAPS = new _CLASS_CAP_STAT(80, 40, 40, 38, 41, 45, 38, 43)
let valkyrie_CAPS = new _CLASS_CAP_STAT(80, 30, 42, 38, 43, 45, 30, 45)
let villager_CAPS = new _CLASS_CAP_STAT(60, 20, 20, 20, 20, 30, 20, 20)
let dancer_CAPS = new _CLASS_CAP_STAT(80, 30, 30, 40, 40, 45, 30, 30)
let taguel_CAPS = new _CLASS_CAP_STAT(80, 35, 30, 40, 40, 45, 35, 30)
let manakete_CAPS = new _CLASS_CAP_STAT(80, 40, 35, 35, 35, 45, 41, 40)
let dreadFighter_CAPS = new _CLASS_CAP_STAT(80, 42, 38, 40, 4145, 39, 43)
let bride_CAPS = new _CLASS_CAP_STAT(80, 40, 39, 42, 42, 45, 41, 40)
let conquerer_CAPS = new _CLASS_CAP_STAT(80, 45, 25, 40, 40, 45, 50, 50)



//********************************CHARTERS********************************/

let chrom_Start = new _CHAR_BASE_STAT(20, 7, 1, 8, 8, 5, 7, 1)
let chrom_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1, 0, 1, 1, 1, -1, -1)
let chrom_GROWTHS = new _CHAR_GROWTHS(45, 40, 10, 40, 40, 70, 35, 20)

let lissa_Start = new _CHAR_BASE_STAT(17, 1, 6, 4, 4, 8, 3, 4)
let lissa_CHAR_CAP_STAT = new _CHAR_CAP_STAT(-2, 2, -1, 0, 2, -1, 1)
let lissa_GROWTHS = new _CHAR_GROWTHS(35, 25, 35, 30, 35, 65, 15, 35)

let sully_Start = new _CHAR_BASE_STAT(20, 7, 1, 8, 8, 6, 7, 2)
let sully_CHAR_CAP_STAT = new _CHAR_CAP_STAT(-1, -1, 2, 2, 0, -1, 0)
let sully_GROWTHS = new _CHAR_GROWTHS(40, 35, 20, 40, 40, 60, 35, 20)

let donnel_Start = new _CHAR_BASE_STAT(0, 0, 0, 0, 0, 0, 0, 0)
let donnel_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1, -1, -1, -1, 3, 1, -1)
let donnel_GROWTHS = new _CHAR_GROWTHS(50, 45, 15, 40, 45, 80, 35, 15)

let frederick_Start = new _CHAR_BASE_STAT(28, 13, 2, 12, 10, 6, 14, 3)
let frederick_CHAR_CAP_STAT = new _CHAR_CAP_STAT(2, -2, 2, -2, 0, 2, 0)
let frederick_GROWTHS = new _CHAR_GROWTHS(60, 40, 10, 40, 35, 40, 40, 20)

let virion_Start = new _CHAR_BASE_STAT(19, 6, 0, 9, 5, 7, 6, 1)
let virion_CHAR_CAP_STAT = new _CHAR_CAP_STAT(0, 0, 2, 2, -1, -2, 0)
let virion_GROWTHS = new _CHAR_GROWTHS(35, 40, 30, 40, 45, 40, 25, 25)

let stahl_Start = new _CHAR_BASE_STAT(22, 08, 0, 7, 6, 5, 8, 1)
let stahl_CHAR_CAP_STAT = new _CHAR_CAP_STAT(2, -1, 1, 0, -2, 2, -1)
let stahl_GROWTHS = new _CHAR_GROWTHS(50, 45, 10, 35, 30, 50, 50, 10)

let vaike_Start = new _CHAR_BASE_STAT(24, 9, 0, 8, 6, 4, 5, 0)
let vaike_CHAR_CAP_STAT = new _CHAR_CAP_STAT(3, -2, 1, 1, -1, 0, 2)
let vaike_GROWTHS = new _CHAR_GROWTHS(60, 50, 10, 45, 35, 45, 40, 05)

let miriel_Start = new _CHAR_BASE_STAT(18, 0, 6, 5, 7, 6, 3, 4)
let miriel_CHAR_CAP_STAT = new _CHAR_CAP_STAT(-2, 3, 1, 1, 0, -2, 0)
let miriel_GROWTHS = new _CHAR_GROWTHS(35, 15, 40, 40, 40, 50, 20, 30)

let sumia_Start = new _CHAR_BASE_STAT(18, 6, 3, 11, 11, 8, 5, 7)
let sumia_CHAR_CAP_STAT = new _CHAR_CAP_STAT(-2, 0, 2, 3, 0, -2, 1)
let sumia_GROWTHS = new _CHAR_GROWTHS(35, 30, 20, 45, 45, 60, 25, 30)

let kellam_Start = new _CHAR_BASE_STAT(21, 10, 0, 7, 5, 3, 12, 4)
let kellam_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1, 0, 1, -2, -2, 3, 0)
let kellam_GROWTHS = new _CHAR_GROWTHS(50, 40, 15, 40, 35, 35, 55, 30)

let lonqu_Start = new _CHAR_BASE_STAT(20, 6, 1, 12, 13, 7, 7, 2)
let lonqu_CHAR_CAP_STAT = new _CHAR_CAP_STAT(0, 0, 3, 3, 0, -2, -2)
let lonqu_GROWTHS = new _CHAR_GROWTHS(40, 35, 20, 50, 50, 55, 25, 20)

let ricken_Start = new _CHAR_BASE_STAT(20, 3, 8, 6, 5, 10, 6, 3)
let ricken_CHAR_CAP_STAT = new _CHAR_CAP_STAT(-1, 2, 0, 0, 1, -1, 0)
let ricken_GROWTHS = new _CHAR_GROWTHS(50, 20, 35, 30, 30, 65, 30, 25)

let maribelle_Start = new _CHAR_BASE_STAT(18, 0, 5, 4, 6, 5, 3, 6)
let maribelle_CHAR_CAP_STAT = new _CHAR_CAP_STAT(-3, 2, 1, 0, 3, -3, 2)
let maribelle_GROWTHS = new _CHAR_GROWTHS(30, 20, 40, 40, 30, 80, 10, 40)

let panne_Start = new _CHAR_BASE_STAT(28, 8, 1, 9, 10, 8, 7, 3)
let panne_CHAR_CAP_STAT = new _CHAR_CAP_STAT(2, -1, 1, 0, 3, -3, 2)
let panne_GROWTHS = new _CHAR_GROWTHS(60, 45, 15, 50, 55, 40, 40, 15)

let gaius_Start = new _CHAR_BASE_STAT(22, 7, 0, 13, 15, 6, 5, 2)
let gaius_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1, -1, 2, 3, -1, 1, -1)
let gaius_GROWTHS = new _CHAR_GROWTHS(50, 45, 15, 45, 45, 35, 25, 15)

let cordelia_Start = new _CHAR_BASE_STAT(25, 9, 3, 13, 12, 9, 8, 8)
let cordelia_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1, -1, 2, 2, -1, 1, -2)
let cordelia_GROWTHS = new _CHAR_GROWTHS(50, 45, 15, 35, 35, 45, 40, 25)

let gregor_Start = new _CHAR_BASE_STAT(30, 12, 0, 13, 11, 8, 10, 2)
let gregor_CHAR_CAP_STAT = new _CHAR_CAP_STAT(2, -1, 2, 0, -1, 1, -2)
let gregor_GROWTHS = new _CHAR_GROWTHS(60, 40, 10, 40, 30, 45, 40, 10)

let nowi_Start = new _CHAR_BASE_STAT(18, 4, 0, 2, 2, 8, 2, 2)
let nowi_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1, 1, -1, -2, 1, 3, 2)
let nowi_GROWTHS = new _CHAR_GROWTHS(70, 45, 35, 30, 30, 65, 50, 35)

let libra_Start = new _CHAR_BASE_STAT(38, 14, 15, 13, 13, 10, 11, 16)
let libra_CHAR_CAP_STAT = new _CHAR_CAP_STAT(0, 1, 1, 0, -1, 0, 1)
let libra_GROWTHS = new _CHAR_GROWTHS(45, 25, 35, 45, 35, 45, 25, 30)

let tharja_Start = new _CHAR_BASE_STAT(25, 4, 11, 5, 12, 3, 10, 7)
let tharja_CHAR_CAP_STAT = new _CHAR_CAP_STAT(0, 3, -1, 1, -3, 1, 0)
let tharja_GROWTHS = new _CHAR_GROWTHS(40, 25, 45, 25, 45, 40, 35, 20)

let anna_Start = new _CHAR_BASE_STAT(35, 12, 17, 22, 21, 25, 08, 10)
let anna_CHAR_CAP_STAT = new _CHAR_CAP_STAT(-1, 0, 1, 0, 3, 1)
let anna_GROWTHS = new _CHAR_GROWTHS(45, 30, 30, 35, 35, 80, 30, 30)

let olivia_Start = new _CHAR_BASE_STAT(18, 3, 1, 8, 9, 5, 3, 2)
let olivia_CHAR_CAP_STAT = new _CHAR_CAP_STAT(0, 0, 1, 1, 0, -1, -1)
let olivia_GROWTHS = new _CHAR_GROWTHS(40, 35, 25, 45, 45, 60, 20, 20)

let cherche_Start = new _CHAR_BASE_STAT(30, 14, 01, 12, 11, 8, 15, 2)
let cherche_CHAR_CAP_STAT = new _CHAR_CAP_STAT(3, 0, -1, -1, 0, 2, -2)
let cherche_GROWTHS = new _CHAR_GROWTHS(55, 40, 20, 40, 35, 50, 45, 10)

let henry_Start = new _CHAR_BASE_STAT(28, 6, 13, 14, 8, 10, 12, 5)
let henry_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1, 1, 2, 0, -2, 1, -1)
let henry_GROWTHS = new _CHAR_GROWTHS(45, 35, 35, 45, 40, 40, 40, 20)

let sayri_Start = new _CHAR_BASE_STAT(39, 17, 7, 23, 26, 20, 12, 6)
let sayri_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1, -1, 1, 1, -1, 0, 1)
let sayri_GROWTHS = new _CHAR_GROWTHS(50, 35, 20, 40, 40, 45, 35, 30)

let tiki_Start = new _CHAR_BASE_STAT(39, 18, 10, 14, 16, 18, 15, 12)
let tiki_CHAR_CAP_STAT = new _CHAR_CAP_STAT(0, -1, 0, 1, 2, 1, 2)
let tiki_GROWTHS = new _CHAR_GROWTHS(80, 40, 40, 35, 30, 80, 45, 45)

let basilio_Start = new _CHAR_BASE_STAT(56, 30, 3, 25, 21, 18, 2, 6)
let basilio_CHAR_CAP_STAT = new _CHAR_CAP_STAT(3, -2, 1, 1, -1, 1, -1)
let basilio_GROWTHS = new _CHAR_GROWTHS(65, 45, 10, 40, 35, 45, 40, 15)

let flavia_Start = new _CHAR_BASE_STAT(48, 25, 5, 28, 26, 21, 23, 11)
let flavia_CHAR_CAP_STAT = new _CHAR_CAP_STAT(1, -1, 1, 1, 0, -1, 0)
let flavia_GROWTHS = new _CHAR_GROWTHS(50, 35, 20, 45, 45, 55, 30, 25)




//


const sully_SHEET = new _CHAR_SHEET("Sully", sully_Start, sully_CHAR_CAP_STAT, sully_GROWTHS)
const donnel_SHEET = new _CHAR_SHEET('Donnel', donnel_Start, sully_CHAR_CAP_STAT, donnel_GROWTHS)

/* 

const _SHEET = new _CHAR_SHEET()

*/


///////////////////////////////CHILD PRE FATHER STATS(where is the milk?)

// CHILD PRE PARENT GROWTHS

let kjelle_CHAR_CAP_STAT = CHILD_CAP_STAT(sully_CHAR_CAP_STAT, donnel_CHAR_CAP_STAT)




let lucina_BASE_STAT = new _CHAR_BASE_STAT(12, 5, 1, 8, 4, 13, 3, 3)
let lucina_PRE_GROWTHS = new _KID_GROWTHS(45, 35, 20, 45, 45, 80, 25, 25)

let owain_BASE_STAT = new _CHAR_BASE_STAT(10, 4, 4, 5, 6, 9, 5, 5)
let owain_PRE_GROWTHS = new _KID_GROWTHS(45, 40, 30, 45, 35, 50, 30, 30)

let kjelle_BASE_STAT = new _CHAR_BASE_STAT(10, 6, 2, 6, 5, 11, 3, 3)
let kjelle_PRE_GROWTHS = new _KID_GROWTHS(40, 35, 25, 40, 45, 55, 40, 20)

let indigo_BASE_STAT = new _CHAR_BASE_STAT(11, 05, 2, 4, 9, 12, 4, 4)
let indigo_PRE_GROWTHS = new _KID_GROWTHS(50, 35, 15, 35, 45, 65, 30, 20)

let brady_BASE_STAT = new _CHAR_BASE_STAT(9, 6, 5, 4, 2, 10, 7, 4)
let brady_PRE_GROWTHS = new _KID_GROWTHS(55, 30, 40, 25, 30, 60, 30, 30)

let severa_BASE_STAT = new _CHAR_BASE_STAT(8, 6, 1, 7, 6, 6, 6, 5)
let severa_PRE_GROWTHS = new _KID_GROWTHS(45, 40, 10, 45, 35, 35, 40, 30)

let yarne_BASE_STAT = new _CHAR_BASE_STAT(16, 9, 1, 4, 4, 13, 6, 1)
let yarne_PRE_GROWTHS = new _KID_GROWTHS(70, 50, 10, 45, 40, 60, 45, 10)

let laurent_BASE_STAT = new _CHAR_BASE_STAT(10, 3, 7, 7, 4, 11, 4, 5)
let laurent_PRE_GROWTHS = new _KID_GROWTHS(45, 20, 40, 40, 30, 50, 25, 35)

let noire_BASE_STAT = new _CHAR_BASE_STAT(8, 5, 3, 4, 7, 10, 4, 6)
let noire_PRE_GROWTHS = new _KID_GROWTHS(30, 45, 40, 35, 50, 40, 30, 40)

let nah_BASE_STAT = new _CHAR_BASE_STAT(5, 3, 3, 5, 6, 8, 3, 3)
let nah_PRE_GROWTHS = new _KID_GROWTHS(70, 35, 35, 45, 35, 70, 45, 40)

let morgan_BASE_STAT = new _CHAR_BASE_STAT(9, 6, 8, 7, 6, 7, 3, 7)
let morgan_PRE_GROWTHS = new _KID_GROWTHS(35, 35, 40, 40, 40, 50, 25, 25)

// CHILD POST GROWTH

const kjelle_SHEET = new _KID_SHEET('Kjelle', sully_SHEET, kjelle_BASE_STAT, kjelle_PRE_GROWTHS)


/*

let _SHEET = new _KID_SHEET()

 */


const parentNkid = new Map()
parentNkid.set('Sully', "Kjelle")
    .set('Chrom', 'Lucina')
    .set('AvatarM', 'MorganF')


// console.log(CHILD_STATS(sully_SHEET, donnel_CHAR_CAP_STAT))
console.log(sully_SHEET)