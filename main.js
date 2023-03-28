
const tarjeta=document.querySelector('.container_tarjeta')

const main = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data= await response.json()
    console.log(data);
    let cont=0
    data.forEach(element => {
        if(cont<=20){
            tarjeta.innerHTML+=
        `
            <div class="tarjeta2" id='${element.id}'>
                <h3 id='${element.id}'>${element.title}</h3>
                <p id='${element.id}'>${element.body}</p>
            </div>
        `
            cont++
        }
        
    });

} 
main()

// const mostrar=document.querySelector('.tarjeta2')

tarjeta.addEventListener('click', (e)=>{
    localStorage.setItem('id', JSON.stringify(e.target.id))
    console.log(e.target.id)
    if(e.target.title){
        localStorage.setItem('id', JSON.stringify(e.target.id))
    }
    location.href='./index2.html'
})