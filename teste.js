function corrigir() {
    var pontos = 0;
    if(document.prova.RQ1[1].checked) {
     pontos = pontos + 3;
    }
    if(document.prova.RQ2[0].checked) {
     pontos = pontos + 3;
    }
    if(document.prova.RQ3[3].checked) {
     pontos = pontos + 4;
    }
    if(pontos <= 6 ) {
      document.getElementById("exibe").innerHTML = "Sua nota foi " + pontos + " e você foi reprovado.";
    } else {
      document.getElementById("exibe").innerHTML = "Sua nota foi " + pontos + " e você foi aprovado.";
    }


 }
