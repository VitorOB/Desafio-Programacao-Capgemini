function escadaEmAsterisco(n) {
    numeroDoArray = [];
    let numeroDegrau = n;

    while (n > 0) {
        numeroDoArray.push(n);
        n--;
    };

    for (let degrau = 0; degrau < numeroDoArray.length; degrau++) {
        let linha = [];

        linha.push(" ".repeat(numeroDoArray[degrau]));
        
        linha.push("*".repeat(numeroDegrau + 1 - numeroDoArray[degrau]));

        console.log(linha.join(""));
    }
}
escadaEmAsterisco(6); //Mudar o valor entre parenteses, altera o tamanho da escada
