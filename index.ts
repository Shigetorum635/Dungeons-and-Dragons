type DICE_MAX = 21
type stat<N extends number = DICE_MAX, Result extends Array<unknown> = [] > = (Result['length'] extends N ? Result : stat<N, [...Result, Result['length']]> ) // i hate my life pls
export interface monster {
    name: string,
    description: string,
    stats: {
        strength: stat[number],
        intelligence: stat[number],
        insight: stat[number],
        agility: stat[number]
    }
}

let m: monster = {
    name: "Ok",
    description: "OK",
    stats: {
        strength: 20,
        intelligence: 20,
        agility: 20,
        insight: 20
    }
}