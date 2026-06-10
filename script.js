function responder(resposta){

    const resultado =
        document.getElementById("resultado");

    if(resposta === "certo"){
        resultado.innerHTML =
        "✅ Correto! A rotação de culturas ajuda a preservar o solo.";
        resultado.style.color = "green";
    }
    else{
        resultado.innerHTML =
        "❌ Incorreto! Essa prática prejudica a sustentabilidade.";
        resultado.style.color = "red";
    }
}
