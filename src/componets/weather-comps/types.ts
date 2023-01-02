
interface ValueAndNumber {
    value : number
    unite : string
} 
interface ValueAndName {
    value : number
    name : string

}

export interface Temperatur extends ValueAndNumber {
    
}
export interface Humidity extends ValueAndNumber{
    

}
export interface Pressure extends ValueAndNumber{
  
}

export interface Speed extends ValueAndNumber{

}
export interface Wind {
    speed : Speed
}
export interface Cloads extends ValueAndName {
}

export interface Weather {
    name : string
    temp : Temperatur
    clouds : Cloads
    wind : Wind
    humidity : Humidity
}

export {}


