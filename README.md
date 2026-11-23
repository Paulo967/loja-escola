# `ALMACÉN DTMF` · `PR · 2025`

> [!NOTE]
> **DE PUERTO RICO PARA EL MUNDO**  
> Objetos impossíveis para guardar memórias antes que o tempo passe.

A **Almacén DtMF** é uma loja virtual fictícia inspirada na estética de cartela de stickers e na fotografia analógica 35mm de *DeBÍ TiRAR MáS FOToS*. O projeto apresenta objetos improváveis como recortes com cara de adesivo sobre papel amarelo-sol, contornos em azul-Porto Rico, carimbos de filme e ilustrações vetoriais em SVG.

---

## Como usar o projeto

Para abrir e testar a loja, basta iniciar um servidor local apontando para a pasta `web/` — por exemplo, usando a extensão Live Server no VS Code em `web/index.html` ou servindo a pasta `web` com algum servidor HTTP local. Como o front-end faz requisição à API **ViaCEP** para consulta de CEP, rodar por um servidor local evita bloqueios de abertura direta de arquivo (`file://`) em alguns navegadores.

Assim que a vitrine (`web/index.html`) carrega, o usuário vê seis peças do catálogo: *Rolo de Filme DtMF (1 Pose)*, *Sapo Concho de Algibeira*, *Monumento Duas Cadeiras Brancas*, *Câmera Analógica para Formiga*, *Vitrola Orbital Baile Inolvidable* e *Ampola Selada de Plena*. Ele pode digitar na busca para filtrar pelo nome ou pela proposta do item, escolher uma regra no seletor de filtro ou mudar a ordenação por nome ou preço. Tudo atualiza na hora sem recarregar a página, e se nenhuma peça corresponder ao que foi digitado ou filtrado, aparece um aviso com botão para limpar os filtros e mostrar o acervo inteiro de novo.

Ao clicar para ver os detalhes de um item, a aplicação abre `web/produto.html` passando o identificador na URL (como `?id=1`). A página lê esse parâmetro, exibe a ilustração ampliada, mostra a descrição completa e as especificações do objeto e libera a escolha da quantidade entre 1 e 10 unidades. Se o usuário alterar o número na URL para um `id` inexistente, a tela exibe uma mensagem de item não encontrado e oferece o caminho de volta para a vitrine.

Quando o usuário escolhe a quantidade e avança, vai para `web/checkout.html`. Ali a página lê o item e a quantidade salvos na sessão atual, monta o resumo com subtotal, frete e total e recalcula tudo na hora se a quantidade for ajustada ali mesmo. No formulário, os campos de telefone e CEP ganham formatação automática enquanto o usuário digita; ao clicar para buscar o CEP, a página consulta a **ViaCEP** e preenche rua, bairro, cidade e estado automaticamente, focando no campo de número. Caso o CEP seja inválido, não exista ou a consulta falhe por conexão, o usuário consegue preencher o endereço manualmente sem ficar preso.

Ao enviar o formulário com os campos obrigatórios preenchidos, o sistema valida as entradas — destacando campos pendentes e movendo o foco para o primeiro erro se faltar algo — e gera o pedido na sessão para abrir `web/sucesso.html`. Essa tela mostra o comprovante com código do pedido, nome do comprador, peça escolhida, quantidade, regra associada, cidade/UF, forma de pagamento e total. Se alguém tentar entrar em `web/sucesso.html` direto pela barra de endereço sem ter concluído um pedido na sessão atual, a página bloqueia o acesso e orienta a voltar para a vitrine.

---

## Como foi construído

A interface reúne HTML5 semântico, CSS3 com variáveis temáticas e sombras sólidas de adesivo, Bootstrap 5 e ilustrações SVG desenhadas direto no código. Toda a lógica fica distribuída em scripts JavaScript (`ES6+`), usando `URLSearchParams` para ler parâmetros de rota, `sessionStorage` para guardar a seleção e o comprovante durante a navegação e `fetch` para consultar a API da ViaCEP.

A implementação também considera acessibilidade no uso diário, com foco visível na navegação por teclado, regiões `aria-live` para anunciar atualizações dinâmicas e respeito a `prefers-reduced-motion`.

---

> [!TIP]
> **SIMULAÇÃO** · Os valores, códigos de pedido e etapas de compra exibidos são simulados para fins demonstrativos.
