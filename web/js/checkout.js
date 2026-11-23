const form = document.querySelector("#checkoutForm");
const telefoneInput = document.querySelector("#telefone");
const cepInput = document.querySelector("#cep");
const buscarCepButton = document.querySelector("#buscarCep");
const cepFeedback = document.querySelector("#cepFeedback");

const logradouroInput = document.querySelector("#logradouro");
const numeroInput = document.querySelector("#numero");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");
const estadoInput = document.querySelector("#estado");

// Elementos do resumo dinâmico
const resumoRegra = document.querySelector("#resumoRegra");
const resumoProdutoNome = document.querySelector("#resumoProdutoNome");
const resumoPrecoUnitario = document.querySelector("#resumoPrecoUnitario");
const resumoQuantidade = document.querySelector("#resumoQuantidade");
const resumoSubtotal = document.querySelector("#resumoSubtotal");
const resumoFrete = document.querySelector("#resumoFrete");
const resumoTotal = document.querySelector("#resumoTotal");

// Recupera produto e quantidade do sessionStorage
const idSalvo = sessionStorage.getItem("dtmf_produto_id") || "1";
const qtdSalva = Number(sessionStorage.getItem("dtmf_quantidade")) || 1;
const produtoSelecionado = buscarProdutoPorId(idSalvo) || PRODUTOS_DTMF[0];

function somenteNumeros(valor) {
  return valor.replace(/\D/g, "");
}

function formatarCep(valor) {
  const numeros = somenteNumeros(valor).slice(0, 8);
  if (numeros.length <= 5) return numeros;
  return `${numeros.slice(0, 5)}-${numeros.slice(5)}`;
}

function formatarTelefone(valor) {
  const numeros = somenteNumeros(valor).slice(0, 11);
  if (numeros.length <= 2) return numeros;
  if (numeros.length <= 6) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
  if (numeros.length <= 10) {
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
  }
  return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
}

function cepValido(cep) {
  return somenteNumeros(cep).length === 8;
}

function atualizarResumo() {
  if (!produtoSelecionado || !resumoQuantidade) return;

  let qtd = Number(resumoQuantidade.value);
  if (!Number.isInteger(qtd) || qtd < 1) qtd = 1;
  if (qtd > 10) qtd = 10;
  resumoQuantidade.value = String(qtd);

  sessionStorage.setItem("dtmf_produto_id", String(produtoSelecionado.id));
  sessionStorage.setItem("dtmf_quantidade", String(qtd));

  const subtotal = produtoSelecionado.preco * qtd;
  const frete = produtoSelecionado.freteBase;
  const total = subtotal + frete;

  resumoRegra.textContent = produtoSelecionado.regra;
  resumoProdutoNome.textContent = produtoSelecionado.nome;
  resumoPrecoUnitario.textContent = `Unitário: ${formatarMoeda(produtoSelecionado.preco)}`;
  resumoSubtotal.textContent = formatarMoeda(subtotal);
  resumoFrete.textContent = formatarMoeda(frete);
  resumoTotal.textContent = formatarMoeda(total);
}

telefoneInput?.addEventListener("input", (event) => {
  event.target.value = formatarTelefone(event.target.value);
});

cepInput?.addEventListener("input", (event) => {
  event.target.value = formatarCep(event.target.value);
  cepInput.setCustomValidity("");
});

resumoQuantidade?.addEventListener("change", atualizarResumo);
resumoQuantidade?.addEventListener("input", atualizarResumo);

async function consultarViaCep() {
  const cepLimpo = somenteNumeros(cepInput.value);

  if (cepLimpo.length !== 8) {
    cepFeedback.className = "mt-3 fw-bold text-danger";
    cepFeedback.textContent = "Digite os 8 dígitos do CEP antes de buscar.";
    cepInput.focus();
    return;
  }

  buscarCepButton.disabled = true;
  buscarCepButton.textContent = "Buscando...";
  cepFeedback.className = "mt-3 fw-bold text-secondary";
  cepFeedback.textContent = "Consultando endereço na base ViaCEP...";

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    if (!resposta.ok) {
      throw new Error("Falha na resposta do servidor ViaCEP.");
    }

    const dados = await resposta.json();

    if (dados.erro) {
      cepFeedback.className = "mt-3 fw-bold text-danger";
      cepFeedback.textContent = "CEP não encontrado. Verifique os números ou preencha o endereço manualmente.";
      logradouroInput.value = "";
      bairroInput.value = "";
      cidadeInput.value = "";
      estadoInput.value = "";
      return;
    }

    logradouroInput.value = dados.logradouro || "";
    bairroInput.value = dados.bairro || "";
    cidadeInput.value = dados.localidade || "";
    estadoInput.value = (dados.uf || "").toUpperCase();

    cepFeedback.className = "mt-3 fw-bold text-success";
    cepFeedback.textContent = dados.logradouro
      ? "Endereço preenchido! Informe agora o número do imóvel."
      : "CEP geral da cidade encontrado. Complete o logradouro e o número.";

    numeroInput.focus();
  } catch (erro) {
    cepFeedback.className = "mt-3 fw-bold text-danger";
    cepFeedback.textContent = "Não foi possível consultar o CEP agora (verifique sua internet). Você pode preencher os campos manualmente.";
  } finally {
    buscarCepButton.disabled = false;
    buscarCepButton.textContent = "Buscar CEP";
  }
}

buscarCepButton?.addEventListener("click", consultarViaCep);

if (resumoQuantidade) {
  resumoQuantidade.value = String(qtdSalva);
  atualizarResumo();
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  cepInput.setCustomValidity(cepValido(cepInput.value) ? "" : "CEP inválido");
  const telDigitos = somenteNumeros(telefoneInput.value);
  telefoneInput.setCustomValidity(telDigitos.length >= 10 ? "" : "Telefone inválido");

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    form.querySelector(":invalid")?.focus();
    return;
  }

  const qtdFinal = Number(resumoQuantidade.value) || 1;
  const totalFinal = produtoSelecionado.preco * qtdFinal + produtoSelecionado.freteBase;

  const pedidoConcluido = {
    numero: `DTMF-${Math.floor(100000 + Math.random() * 900000)}`,
    cliente: document.querySelector("#nome").value.trim(),
    produto: produtoSelecionado.nome,
    regra: produtoSelecionado.regra,
    quantidade: qtdFinal,
    total: formatarMoeda(totalFinal),
    cidadeUf: `${cidadeInput.value.trim()} - ${estadoInput.value.trim().toUpperCase()}`,
    pagamento: document.querySelector("#pagamento").value
  };

  sessionStorage.setItem("dtmf_pedido_concluido", JSON.stringify(pedidoConcluido));
  window.location.href = "sucesso.html";
});