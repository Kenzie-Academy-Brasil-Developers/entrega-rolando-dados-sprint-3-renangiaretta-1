let count = [
    {
        num: '2',
        armazena: 0,
    },
    {
        num: '3',
        armazena: 0,
    },
    {
        num: '4',
        armazena: 0,
    },
    {
        num: '5',
        armazena: 0,
    },
    {
        num: '6',
        armazena: 0,
    },
    {
        num: '7',
        armazena: 0,
    },
    {
        num: '8',
        armazena: 0,
    },
    {
        num: '9',
        armazena: 0,
    },
    {
        num: '10',
        armazena: 0,
    },
    {
        num: '11',
        armazena: 0,
    },
    {
        num: '12',
        armazena: 0,
    },
    ]
    console.log(count[0].num)
    
    function append (div,resultado){
        const show = document.getElementById
    }
    const botao = document.getElementById("rolar").addEventListener('click', rolaDado)
    
    function rolaDado (){
        document.getElementById('main').innerHTML = ''

        for(let r =0;r<count.length;r++){
            count[r].armazena = 0
        }

      for (let i = 0; i<1000; i++){
      const dado1 = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
      const dado2 = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
      let resultado = dado1(1,6) + dado2(1,6)
      console.log(resultado)

      for (let j = 0; j < count.length; j++){
       if( resultado == count[j].num){
        count[j].armazena += 1
       }
      }
      }
      for (let k = 0; k <count.length; k++){
          const novadiv  =  document.createElement("div")
          let p = document.createElement('p')
          let tit = count[k].num
          let barra = count[k].armazena
          novadiv.style.height = `${count[k].armazena + 40}px`;
          novadiv.style.border = "1px solid #000000"
          novadiv.style.backgroundColor = '#29b08d';
          novadiv.innerText = tit + "-" + barra
          const main = document.getElementById("main")
          main.appendChild(novadiv)
      }
    }
/**/