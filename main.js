import {generateColors} from "./src/color"
import { getColorsFromHash } from "./src/hash"
import { render, updateColumnsColor } from "./src/columns/columns" 
function main (){
    const colorsFromHash = getColorsFromHash()
    const colors = colorsFromHash.length?colorsFromHash:generateColors(5)

    render(colors)

    document.addEventListener("keydown", (e)=>{
        if(e.code.toLowerCase()==="space"){
            e.preventDefault()
            updateColumnsColor()
        }
    })
}
main()
