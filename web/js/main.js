const listaProdutos = document.querySelector("#listaProdutos");
const inputFiltro = document.querySelector("#filtroProduto");
const selectRegra = document.querySelector("#filtroRegra");
const selectOrdenacao = document.querySelector("#ordenarProduto");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

function renderizarVitrine(itens) {
  if (!listaProdutos) return;

  if (itens.length === 0) {
    listaProdutos.innerHTML = `
      <div class="col-12">
        <div class="learning-note text-center py-5">
          <h3 class="h5 fw-bold">Nenhum artefato encontrado com esses filtros</h3>
          <p class="text-secondary mb-3">Tente limpar a busca ou selecionar outra regra impossível.</p>
          <button type="button" class="btn btn-dtmf" id="limparFiltros">Mostrar todos os produtos</button>
        </div>
      </div>
    `;
    document.querySelector("#limparFiltros")?.addEventListener("click", () => {
      inputFiltro.value = "";
      selectRegra.value = "";
      selectOrdenacao.value = "padrao";
      atualizarVitrine();
    });
    return;
  }

  listaProdutos.innerHTML = itens
    .map(
      (produto) => `
      <article class="col-sm-6 col-lg-4 product-item">
        <div class="card h-100 product-card">
          <div class="product-illustration" role="img" aria-label="${produto.altImagem}">
            ${produto.svg}
            <span class="stamp-date" aria-hidden="true">${produto.carimbo}</span>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="mb-2">
              <span class="rule-badge">${produto.regra}</span>
            </div>
            <p class="small text-secondary mb-1">${produto.categoria}</p>
            <h3 class="h5 fw-bold">${produto.nome}</h3>
            <p class="text-secondary small flex-grow-1">${produto.descricaoCurta}</p>
            <p class="price mb-3">${formatarMoeda(produto.preco)}</p>
            <a class="btn btn-dtmf w-100" href="produto.html?id=${produto.id}">Ver ficha técnica</a>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function atualizarVitrine() {
  const termo = (inputFiltro?.value || "").trim().toLowerCase();
  const regraEscolhida = selectRegra?.value || "";
  const ordem = selectOrdenacao?.value || "padrao";

  let filtrados = PRODUTOS_DTMF.filter((produto) => {
    const bateTexto =
      produto.nome.toLowerCase().includes(termo) ||
      produto.categoria.toLowerCase().includes(termo) ||
      produto.descricaoCurta.toLowerCase().includes(termo);

    const bateRegra = !regraEscolhida || produto.regra === regraEscolhida;
    return bateTexto && bateRegra;
  });

  if (ordem === "nome-asc") {
    filtrados = [...filtrados].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  } else if (ordem === "preco-asc") {
    filtrados = [...filtrados].sort((a, b) => a.preco - b.preco);
  } else if (ordem === "preco-desc") {
    filtrados = [...filtrados].sort((a, b) => b.preco - a.preco);
  }

  renderizarVitrine(filtrados);

  if (mensagemFiltro) {
    if (!termo && !regraEscolhida) {
      mensagemFiltro.textContent = `Exibindo ${filtrados.length} artefatos catalogados.`;
    } else if (filtrados.length === 0) {
      mensagemFiltro.textContent = "Nenhum produto encontrado para o filtro aplicado.";
    } else {
      mensagemFiltro.textContent = `${filtrados.length} artefato(s) encontrado(s).`;
    }
  }
}

inputFiltro?.addEventListener("input", atualizarVitrine);
selectRegra?.addEventListener("change", atualizarVitrine);
selectOrdenacao?.addEventListener("change", atualizarVitrine);

atualizarVitrine();