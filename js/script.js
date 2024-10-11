document.addEventListener("DOMContentLoaded", ()=> {
    var fila = []
    let fila_ajustada = []

    const input = document.getElementById('input')
    const add_normal = document.getElementById('add_normal')
    const add_especial = document.getElementById('add_especial')
    const pop_normal = document.getElementById('pop_normal')
    const shift_especial = document.getElementById('shift_especial')
    const fila_exibida = document.getElementById('fila')


    add_normal.addEventListener("click", (e)=>{
        e.preventDefault()
        const input_value = input.value
        fila.push([input_value, 'normal'])

        fila_ajustada = fila.map(item =>item[0])
        fila_exibida.innerHTML = fila_ajustada.join(', ')
    })

    add_especial.addEventListener("click", (e)=>{
        e.preventDefault()
        const input_value = input.value
        fila.unshift([input_value, 'especial'])

        fila_ajustada = fila.map(item =>item[0])
        fila_exibida.innerHTML = fila_ajustada.join(', ')
    })

    pop_normal.addEventListener("click", (e) => {
        e.preventDefault()
    
        for(let i = 0; i < fila.length; i++) {
            if (fila[i][1] == 'normal') {
                fila.splice(i, 1)
                break;
            }
        }
        
        fila_ajustada = fila.map(item => item[0])
        fila_exibida.innerHTML = fila_ajustada.join(', ')
    });

    shift_especial.addEventListener("click", (e) =>{
        e.preventDefault()

        for(let i = 0; i < fila.length; i++){
            if (fila[i][1] == 'especial') {
                fila.splice(i,1)
                break;
            }
        }

        fila_ajustada = fila.map(item =>item[0])
        fila_exibida.innerHTML = fila_ajustada.join(', ')
    })
    

})