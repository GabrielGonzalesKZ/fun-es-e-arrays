let corredores = ["Rafael","Manoel","Daniel"]

function positions(array){

    let extraDaniel = corredores.indexOf("Daniel")

    for( let i = 0; i < array.length; i++){
    

        if( extraDaniel !== 0){

            array[1] = array[2]
            array[2] = "Manoel"

            return `Este é o pódio: ${corredores}`

        }
    
        else{

            return "Daniel é o vencedor"
        }
        
    }
   
}

console.log(positions(corredores))