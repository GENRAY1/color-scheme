import { createElement } from "../utils";
import { removeColorToHash} from "../hash"
import { MIN_COLUMNS } from "./columns";
import { notification } from "../notification/notification";

const createHexTitle=(color)=>{
    const h = createElement({
        tag:"h3",
        params:{
            text:"#" + color,
            classList:["col__hex"]
        },
    })
    h.addEventListener("click", (e)=>{
        navigator.clipboard.writeText(e.target.textContent)
        notification("Цвет был успешно скопирован в буфер обмена")
    })
    return h
}

const createRemoveBtn=()=>{
    const btn = createElement({
        tag:"button",
        params:{
            classList:["col__remove-btn", "btn"],
        },
        dataset:{action:"remove"},
        childrens:[
            createElement({tag:"div", params:{classList:["col__remove-icon", "icon"]}})
        ]
    })

    btn.addEventListener("click", (e)=>{
        const currentCol = e.target.classList.contains("col__remove-btn")
        ?e.target.parentNode.parentNode
        :e.target.parentNode.parentNode.parentNode
        const countCols = currentCol.parentNode.children.length;
        if(countCols > MIN_COLUMNS){
            const color = currentCol.textContent.substring(1);
            removeColorToHash(color)
            currentCol.remove();
        }else{
            notification(`Достигнут лимит максимального колл-ва блоков (макс: ${MIN_COLUMNS})`)
        }
    })
    return btn;
}
const createLockBtn=()=>{
    const btn = createElement({
        tag:"button",
        params:{
            classList:["col__lock-btn", "btn"]
        },
        childrens:[
            createElement({tag:"div", params:{classList:["col__lock-icon", "icon"]}})
        ]
    })
    btn.addEventListener("click", (e)=>{
        const lockIcon = e.target.classList.contains("col__lock-btn")
        ?e.target.children[0]
        :e.target
        if(lockIcon.classList.contains("col__lock-icon--close")){
            lockIcon.classList.remove("col__lock-icon--close")
        }else{
            lockIcon.classList.add("col__lock-icon--close")
        }
    })
    return btn;
}

const createEditBtn=()=>{
    const btn = createElement({
        tag:"button",
        params:{
            classList:["col__edit-btn", "btn"]
        },
        childrens:[
            createElement({tag:"div", params:{classList:["col__edit-icon", "icon"]}})
        ]
    })
    btn.addEventListener("click", ()=> notification("В РАЗРАБОТКЕ!"))
    return btn
}

export function createColumn(color){
    const col = createElement({
        tag:"div",
        params:{
            class:"col"
        },
        childrens:[
            createHexTitle(color),
            createElement({tag:"div", params:{class:"col__options"}, childrens:[
                createEditBtn(),
                createLockBtn(),
                createRemoveBtn(),
            ]})
        ]
    })
    col.style.background = "#" +  color
    return col;
}