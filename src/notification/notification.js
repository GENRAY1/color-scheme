import { createElement } from "../utils"
import "./notification.css"

const DEFAULT_DELAY  = 3000;
const LIMIT_NOTIFICATIONS = 3;
let notifications;

const createCloseBtn = ()=>{
    const btn = createElement({tag:"div", params:{classList:["notification__close-btn"]}})
    btn.addEventListener("click",(e)=>{
        e.target.parentNode.parentNode.remove();
    })
    return btn;        
}

const createNotification = (message) => {
    const notice = createElement({
        tag:"li",
        params:{class:"notification"},
        childrens:[
            createElement({tag:"div", params:{class:"notification__header"}, childrens:[
                createCloseBtn()
            ]}),
            createElement({tag:"div", params:{class:"notification__content", innerText:message}}),
        ]
    })
    return notice;
}

export function notification(message, delay = undefined){
    if (!notifications){throw "notifications are not initialized"} 
    
    let last = notifications.lastChild
    if(last && last.innerText === message) return

    if(!delay) delay = DEFAULT_DELAY

    const notice = createNotification(message);

    if(notifications.children.length === LIMIT_NOTIFICATIONS)
        notifications.replaceChildren(notice)
    else
        notifications.appendChild(notice)

    setTimeout(()=>{
        if(notice.isConnected) 
            notifications.removeChild(notice)
    }, delay)
}
export function initNotifications(){
    notifications = createElement({tag:"ul",params:{class:"notifications"}, parent:document.body})
}