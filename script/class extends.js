class   _CLASS{
    constructor(name, earlySkill, lateSkill){
        this.class = name,
        this.earlySkill = earlySkill,
        this.lateSkill = lateSkill
        
    }
    
    getSkills(){
        let values = Object.values(this)
        return values.slice(1)
    }
    
    getPreClass(){
        return this.preClass
    }
    
    
}

class _PROMOTE extends _CLASS{
    constructor(name, earlySkill, lateSkill, base){
        super(name, earlySkill, lateSkill)
            this.class = name,
            this.earlySkill = earlySkill,
            this.lateSkill = lateSkill,
            this.class = base
        
    }
}

let paladin = new _CLASS('paladin', 'shield', 'block', 'cavalier')
let greatKnight = new _CLASS('great knight', 'ride', 'lance', 'cavalier')

let cavalier = new _CLASS('cavalier', paladin, greatKnight)

let checker = function(val){
    if( val  instanceof _CLASS){
        return true
    } else {
        return 'nope'
    }
}



console.log(checker(paladin))

