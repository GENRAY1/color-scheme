const app = document.getElementById("app")

const getRandomInt=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const generateColor =()=>{
    const hexCodes = "0123456789ABCDEF";
    let result = "#"  
    for(let i = 0; i < 6; i++){
        result+=hexCodes[getRandomInt(0, hexCodes.length)]
    }
    return result;
}
const copyToClipboard=(text)=>navigator.clipboard.writeText(text)


const setColsColor=()=>{
    const cols = app.querySelectorAll(".color-col")
    cols.forEach((col) => {
        const isLock = col.querySelector(".color-col__icon").classList.contains("color-col__icon--lock");
        if(isLock) return

        const title = col.querySelector(".color-col__title")
        const color = generateColor()
        title.textContent = color
        col.style.background = color
        
    })
}
setColsColor()

app.addEventListener("click", async (e)=>{
    const type = e.target.dataset.type;
    if(type === "lock"){
        const node = e.target.classList.contains("color-col__btn")
        ?e.target.children[0]
        :e.target
        if(node.classList.contains("color-col__icon--lock")){
            node.classList.remove("color-col__icon--lock")
        }else{
            node.classList.add("color-col__icon--lock")
        }

    }
    if(type === "copy"){
        copyToClipboard(e.target.textContent)
    }
})

document.addEventListener("keydown", (e)=>{
    if(e.code.toLowerCase()==="space"){
        e.preventDefault()
        setColsColor()
    }
})