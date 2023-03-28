const tarjeta=document.querySelector('.container_tarjeta')

const main2 = async ()=>{
    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts//comments')
    const data2 = await response2.json()
    const guardado=JSON.parse(localStorage.getItem('id'))
    

}
