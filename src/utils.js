export const getRandomInt=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const createElement=(options)=>{
    if(!options.tag) return undefined;
    const element = document.createElement(options.tag);

    if(options.params){
        for(const [key, value] of Object.entries(options.params)){
            switch(key){
                case "class":{
                    element.classList.add(value);
                    break;
                }
                case "classList":{
                    for(const className of value){
                        element.classList.add(className);
                    }
                    break;
                }
                case "text":{
                    element.textContent = value;
                    break;
                }
                default:{
                    element[key] = value;
                    break;
                }
            }
        }
    }
    if(options.childrens && options.childrens.length){
        for(const children of options.childrens){
            element.appendChild(children)
        }
    }
    if(options.parent) options.parent.appendChild(element);

    return element;
}