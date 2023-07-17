
// let primo=document.getElementById('primo') as HTMLInputElement

// let secondo=document.getElementById('secondo') as HTMLInputElement

// let form=document.getElementById('form') as HTMLFormElement

// let  primovalue:undefined|number
// let secondovalue:undefined|number



const casuale  =function():number{
return Math.floor((Math.random()*100)+1)
}

 

let estrazione = function(numero1:number,
    numero2:number):void{
 if (numero1<1||numero1>100 ||numero2<1||numero2>100){
    alert('errore estrazione')
 }else{
  let random:number=casuale()
  console.log(casuale())
  let differenza1:number=Math.abs(random-numero1)
  let differenza2:number=Math.abs(random-numero2)
  if(differenza1===0){
    console.log('numero1 ha vinto')
 }else if(differenza2===0){
    console.log('numero 2 ha vinto')
 }else if(differenza1<differenza2){
    console.log('numero1 si è avvicinato di piu')
 }else{
    console.log('numero2 si è avvicinato di piu')
 }


 }
}

estrazione(25,50)
    
