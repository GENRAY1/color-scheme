export const setColorsToHash = (colors = [])=>{
    document.location.hash = colors.join("-")
}
export const appendColorToHash = (color)=>{
    document.location.hash +=`-${color}`
}

export const removeColorToHash = (color)=>{
    const colors = getColorsFromHash()
    setColorsToHash(colors.filter(c => c !== color))
}
export const getColorsFromHash=()=>{
    const hash = document.location.hash
    if(hash.length){
        return hash.substring(1).split("-")
    }
    return []
}