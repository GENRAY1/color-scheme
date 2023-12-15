import { createElement } from "../utils"
import "./notification.css"

const DEFAULT_DELAY  = 2000;
const MAX_NOTIFICATION = 8;
let notifications;

const create = (message) => {
    const notice = createElement({
        tag:"li",
        params:{class:"notification"},
        childrens:[
            createElement({tag:"div", params:{class:"notification__header"}}),
            createElement({tag:"div", params:{class:"notification__content", innerText:message}}),
            createElement({tag:"div", params:{class:"notification__footer"}})
        ]
    })
    return notice;
}

export function notification(message, delay = undefined){
    if (!notifications){throw "notifications are not initialized"} 
    
    if(!delay) delay = DEFAULT_DELAY


    const notice = create(message);
    

    if(notifications.children.length === MAX_NOTIFICATION)
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