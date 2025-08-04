var res = window.document.getElementById("resultado")

//calcular quantidade de agua por dia
    

    
    function calcular() {
        var kilosS = window.document.getElementById("kg")
        var kilosNumb = Number(kilosS.value)
        var copos = kilosNumb * 35

        if (kilosNumb == 0 || kilosNumb > 230) {
            res.innerText = "Por Favor adicione seu peso real!"
        } else {
            res.innerText = "Se deve beber por dia: " + copos + "L " 
        }
  
    }

    function agua() {
        window.document.getElementById("add").style.display = "block";
    }


    function fechar() {
        window.document.getElementById("add").style.display = "none";
    }

    function adic() {

        //puxando valores
        var result = window.document.getElementById("resultado")
        var quaC = window.document.getElementById("quantidadeC")
        var quaL = window.document.getElementById("quantidadeML")

        //transformando em number 

        var quantidadeCopos = Number(quaC.value)
        var quantidadeLitros = Number(quaL.value)

        var mL = quantidadeCopos * quantidadeLitros

        if (mL >= 500 && mL <= 750) {
            window.document.getElementById("Copos").src = "./IMG/copo_1de6.png";
        } else {
            if (mL  > 750 && mL <= 1000) {
              window.document.getElementById("Copos").src = "./IMG/copo_2de6.png"; 
            } else {
               if (mL > 1000 && mL <= 1500) {
                window.document.getElementById("Copos").src = "./IMG/copo_3de6.png";
               } else {
                  if (mL > 1500 && mL <= 1750) {
                    window.document.getElementById("Copos").src = "./IMG/copo_4de6.png";
                  } else {
                     if (mL > 1750 && mL <= 2000) {
                        window.document.getElementById("Copos").src = "./IMG/copo_5de6.png";
                     } else {
                        if (mL > 2000 && mL < 2500) {
                            window.document.getElementById("Copos").src = "./IMG/copo_6de6.png";
                        } else {
                            if (mL == 0) {
                                window.document.getElementById("Copos").src = "./IMG/copo_vazio.png";
                            } else {
                                 window.document.getElementById("Copos").src = "./IMG/copo_cheio.png";
                            }
                          
                        }
                     }
                  }
               } 
            }
        }


        result.innerText = "Você bebeu até agora: " + mL + "mL"
        //adicionando outros copos 


        window.document.getElementById("add").style.display = "none";

    }

