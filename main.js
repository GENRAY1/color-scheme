import {generateColors} from "./src/color"
import { getColorsFromHash } from "./src/hash"
import { render, updateColumnsColor } from "./src/columns/columns"
import { initNotifications, notification } from "./src/notification/notification"
const welcomeMsg = `Привет юзер! Вот тебе небольшая инструкция.
\nДля ГЕНЕРАЦИИ ЦВЕТОВ используй клавишу ПРОБЕЛ,
\nДля того чтобы ЗАБЛОКИРОВАТЬ генерацию цвета в колонке, нажми на значок ЗАМОЧКА в выбранной колонке, 
\nДля УДАЛЕНИЯ колонки используй ЗНАЧОК "Х"
\nДля ДОБАВЛЕНИЯ новой колонки нажми на соответсвующий значок В ЛЕВОМ ВЕРХНЕМ УГЛУ. 
\nP/S я Закроюсь сама 
`

function main (){
    initNotifications()
    const colorsFromHash = getColorsFromHash()
    const colors = colorsFromHash.length?colorsFromHash:generateColors(3)

    render(colors)
    notification(welcomeMsg, 20000)
    document.addEventListener("keydown", (e)=>{
        if(e.code.toLowerCase()==="space"){
            e.preventDefault()
            updateColumnsColor()
        }
    })
}
main()
