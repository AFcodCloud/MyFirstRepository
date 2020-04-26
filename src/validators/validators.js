export const requared = (values) =>{
    if (values) return undefined
    return "заполните поле"
}

export const maxLengthCreator = (e) =>{
    return (values)=>{
        if(values.length-1>=e) return `превышена максимальная длинна строки ${e} символов`
        return undefined
    }
} 

export const emailValidator = (values) =>{
    let str = values;
    let result = str.match(/.+@.+\..+/i)
    if(result) return undefined
    return "введите корректный email"
}
