const dados = {
    livro: {
      titulo: "Narnia",
      autor: "J.R.A. Matias",
      ano: 1955,
      generos: ["fantasia", "aventura"]
    },
    carro: {
      marca: "Toyota",
      modelo: "Corolla",
      ano: 2024,
      cor: "prata",
      km: 5000
    },
    aluno: {
      nome: "Aline Silva",
      idade: 17,
      turma: "3A",
      notas: {
        portugues: 8.5,
        matematica: 9.0,
        historia: 7.0
      }
    },
    produto: {
      nome: "Smartphone",
      marca: "Samsung",
      modelo: "Galaxy S23",
      preco: 2500.00,
      especificacoes: {
        tela: "AMOLED",
        camera: "12MP"
      }
    },
    cidade: {
      nome: "São Paulo",
      estado: "São Paulo",
      pais: "Brasil",
      populacao: 12396372,
      clima: "tropical de altitude"
    }
  };
  
  console.log(dados);

  const container = document.getElementById("dados-container");

let html = "<h1>Dados:</h1>";
for (const categoria in dados) {
    html += `<h2>${categoria}</h2><ul>`;
    for (const chave in dados[categoria]) {
        const valor = dados[categoria][chave];
        if (typeof valor === "object") {
            html += `<li>${chave}: ${JSON.stringify(valor)}</li>`;
        } else {
            html += `<li>${chave}: ${valor}</li>`;
        }
    }
    html += "</ul>";
}

container.innerHTML = html;