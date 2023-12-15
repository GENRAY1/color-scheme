import {getRandomInt} from "./utils"

export const generateColor =()=>{
    const hexCodes = "0123456789ABCDEF";
    let result = ""  
    for(let i = 0; i < 6; i++){
        result+=hexCodes[getRandomInt(0, hexCodes.length)]
    }
    return result;
}

export const generateColors = (count)=>{
    if(!count) return []

    const colors = new Array(count)
    for(let i = 0; i < colors.length; i++){
        colors[i] = generateColor();
    }
    return colors;
}
