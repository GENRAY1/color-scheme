import { createElement } from "../utils"
import "./notification.css"

const DEFAULT_DELAY  = 3000;
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
    notifications.appendChild(notice);

    setTimeout(()=>notifications.removeChild(notice), delay)
}
export function initNotifications(){
    notifications = createElement({tag:"ul",params:{class:"notifications"}, parent:document.body})
}