import { generateColor } from "../color"
import { setColorsToHash, appendColorToHash } from "../hash"
import { createColumn } from "./column";
import { createElement } from "../utils";
import { notification } from "../notification/notification";
import "./columns.css"
const rootElement = document.getElementById("app");
let colsElement;
export const MAX_COLUMNS = 8;
export const MIN_COLUMNS = 1;

const createAddColumnBtn = ()=>{
    const btn = createElement({
        tag:"button",
        params:{
            classList:["add-btn", "btn"]
        },
        childrens:[
            createElement({tag:"div", params:{classList:["add-btn__icon","icon"]}})
        ]
    })

    btn.addEventListener("click", (e)=>{
        if(colsElement.children.length < MAX_COLUMNS ){
            const color = generateColor()
            const newCol = createColumn(color)
            appendColorToHash(color)
            colsElement?.appendChild(newCol)
        }else{
            notification(`Достигнут лимит максимального колл-ва блоков (макс: ${MAX_COLUMNS})`)
        }
    })
    return btn
} 

export function updateColumnsColor(){
    let colors = []
    const cols = rootElement.querySelectorAll(".col")
    cols.forEach((col) => {
        const isLock = col.querySelector(".col__lock-icon").classList.contains("col__lock-icon--close");
        const title = col.querySelector(".col__hex")
        if(isLock){
            colors.push(title.textContent.substring(1))
            return
        } 
        const color = generateColor()
        title.textContent = "#" + color
        col.style.background = "#" +  color
        colors.push(color)
    })
    setColorsToHash(colors)
}

export function render(colors){
    const cols = document.createElement("div")
    cols.className = "cols"
    colors.forEach(color => {
        cols.appendChild(createColumn(color))
    });
    setColorsToHash(colors)
    rootElement.append(cols,createAddColumnBtn())
    colsElement = cols;
}