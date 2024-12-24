


export const addProduct=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

export const delProduct=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}