/**
 * Catálogo centralizado da Almacén DtMF
 * Stickers vetoriais codados em SVG inspirados em "DeBÍ TiRAR MáS FOToS".
 */
const PRODUTOS_DTMF = [
  {
    id: 1,
    nome: "Rolo de Filme DtMF 35mm (1 Pose)",
    categoria: "Fotografia Nostálgica",
    regra: "Ser de uso único",
    carimbo: "EXP 01/01 · PR",
    preco: 110.00,
    freteBase: 15.00,
    descricaoCurta: "Cartucho analógico de pose única que revela o sentimento exato de um instante antes de virar areia.",
    descricaoDetalhada: "Desenvolvido em laboratório analógico de San Juan, este cartucho de 35mm possui apenas um fotograma. Em vez de capturar apenas a luz, sua emulsão registra o clima emocional da roda de amigos. Após a revelação única, o filme se desfaz em areia fina do Caribe.",
    especificacoes: [
      "Regra atendida: Ser de uso único (1 único disparo irreversível);",
      "Material: Carcaça de alumínio reciclado e emulsão fotossensível afetiva;",
      "Dimensões: 4,5 cm × 2,5 cm (padrão 35mm universal);",
      "Modo de uso: Insira em qualquer câmera analógica, fotografe o momento e revele em até 24h."
    ],
    altImagem: "Sticker de um rolo de filme fotográfico 35mm verde e terracota com etiqueta DtMF 1 Pose",
    svg: `<svg viewBox="0 0 220 160" width="220" height="160" role="img" aria-hidden="true">
      <rect x="44" y="32" width="74" height="96" rx="10" fill="#2d6a4f" stroke="#1d63b8" stroke-width="4"/>
      <rect x="62" y="20" width="38" height="12" rx="4" fill="#e63946" stroke="#1d63b8" stroke-width="3.5"/>
      <rect x="52" y="48" width="58" height="64" rx="5" fill="#fffdf7"/>
      <text x="81" y="75" font-family="Fredoka, sans-serif" font-size="17" font-weight="700" fill="#1d63b8" text-anchor="middle">DtMF</text>
      <text x="81" y="95" font-family="Courier Prime, monospace" font-size="11" font-weight="700" fill="#e63946" text-anchor="middle">1 POSE</text>
      <path d="M118 46 H174 L162 64 L174 82 L162 100 L174 116 H118 Z" fill="#1f2937" stroke="#1d63b8" stroke-width="3"/>
      <circle cx="142" cy="81" r="11" fill="#f8d948"/>
      <rect x="125" y="51" width="6" height="4" rx="1" fill="#fff"/>
      <rect x="137" y="51" width="6" height="4" rx="1" fill="#fff"/>
      <rect x="149" y="51" width="6" height="4" rx="1" fill="#fff"/>
      <rect x="125" y="107" width="6" height="4" rx="1" fill="#fff"/>
      <rect x="137" y="107" width="6" height="4" rx="1" fill="#fff"/>
      <rect x="149" y="107" width="6" height="4" rx="1" fill="#fff"/>
    </svg>`
  },
  {
    id: 2,
    nome: "Sapo Concho de Algibeira",
    categoria: "Companhia Tropical",
    regra: "Caber em um bolso",
    carimbo: "4.0 CM · BOLSO",
    preco: 260.00,
    freteBase: 12.00,
    descricaoCurta: "Miniatura viva de 4 cm do icônico Sapo Concho de agasalho azul que cabe no bolso e coaxa ritmos de plena.",
    descricaoDetalhada: "Companheiro portátil inspirado no mascote oficial de DeBÍ TiRAR MáS FOToS. Com apenas 4 centímetros de altura, acomoda-se no bolso da camisa e emite um coaxar rítmico de plena e salsa sempre que detecta estresse ou saudade.",
    especificacoes: [
      "Regra atendida: Caber em um bolso (apenas 4 cm de altura);",
      "Material: Bio-cerâmica respirável com micro-agasalho azul e calça vermelha;",
      "Dimensões: 4,0 cm × 2,8 cm × 2,2 cm (pesa 18 gramas);",
      "Modo de uso: Carregue no bolso esquerdo; dê dois toques leves para ativar o modo pôr do sol."
    ],
    altImagem: "Sticker do Sapo Concho vestido com agasalho azul, calça vermelha e câmera no pescoço",
    svg: `<svg viewBox="0 0 220 160" width="220" height="160" role="img" aria-hidden="true">
      <rect x="82" y="76" width="56" height="40" rx="12" fill="#38bdf8" stroke="#1d63b8" stroke-width="3.5"/>
      <rect x="88" y="114" width="18" height="24" rx="6" fill="#e63946" stroke="#1d63b8" stroke-width="3.5"/>
      <rect x="114" y="114" width="18" height="24" rx="6" fill="#e63946" stroke="#1d63b8" stroke-width="3.5"/>
      <ellipse cx="110" cy="54" rx="32" ry="22" fill="#84a98c" stroke="#1d63b8" stroke-width="3.5"/>
      <circle cx="92" cy="36" r="11" fill="#84a98c" stroke="#1d63b8" stroke-width="3.5"/>
      <circle cx="128" cy="36" r="11" fill="#84a98c" stroke="#1d63b8" stroke-width="3.5"/>
      <circle cx="92" cy="36" r="4.5" fill="#111827"/>
      <circle cx="128" cy="36" r="4.5" fill="#111827"/>
      <path d="M94 58 Q110 68 126 58" fill="none" stroke="#1d63b8" stroke-width="3" stroke-linecap="round"/>
      <rect x="98" y="86" width="24" height="16" rx="4" fill="#1f2937" stroke="#ffffff" stroke-width="2"/>
      <circle cx="110" cy="94" r="5" fill="#f8d948"/>
    </svg>`
  },
  {
    id: 3,
    nome: "Monumento Duas Cadeiras Brancas",
    categoria: "Arquitetura Afetiva",
    regra: "Não caber em um avião",
    carimbo: "85M · MONUMENTO",
    preco: 142000.00,
    freteBase: 4500.00,
    descricaoCurta: "Réplica colossal de 85 metros das duas cadeiras de plástico da capa, maior que qualquer avião comercial.",
    descricaoDetalhada: "Uma homenagem monumental às conversas longas no quintal diante das bananeiras. Com 85 metros de altura e 110 metros de envergadura conjunta, estas duas cadeiras de monobloco reforçado ultrapassam o tamanho de um Boeing 747.",
    especificacoes: [
      "Regra atendida: Não caber em um avião (85 m de altura × 110 m de largura);",
      "Material: Polímero aeroespacial branco resistente a furacões caribenhos;",
      "Dimensões: 85,0 m × 110,0 m × 62,0 m (peso total de 340 toneladas);",
      "Modo de uso: Instale em terrenos abertos ou encostas; ideal para contemplar o horizonte."
    ],
    altImagem: "Sticker das duas cadeiras de plástico brancas icônicas diante de folhas de bananeira",
    svg: `<svg viewBox="0 0 220 160" width="220" height="160" role="img" aria-hidden="true">
      <path d="M22 114 Q110 92 198 114 V144 H22 Z" fill="#2d6a4f" stroke="#1d63b8" stroke-width="3"/>
      <path d="M36 90 C28 52 58 34 76 54 C56 58 46 72 44 92 Z" fill="#40916c" stroke="#1d63b8" stroke-width="2.5"/>
      <path d="M182 90 C190 52 160 34 142 54 C162 58 172 72 174 92 Z" fill="#40916c" stroke="#1d63b8" stroke-width="2.5"/>
      <g fill="#ffffff" stroke="#1d63b8" stroke-width="3.5" stroke-linejoin="round">
        <path d="M56 46 H88 L84 86 H60 Z"/>
        <rect x="54" y="86" width="40" height="9" rx="2"/>
        <line x1="58" y1="95" x2="54" y2="126"/>
        <line x1="90" y1="95" x2="94" y2="126"/>
        <path d="M124 46 H156 L152 86 H128 Z"/>
        <rect x="122" y="86" width="40" height="9" rx="2"/>
        <line x1="126" y1="95" x2="122" y2="126"/>
        <line x1="158" y1="95" x2="162" y2="126"/>
      </g>
    </svg>`
  },
  {
    id: 4,
    nome: "Câmera Analógica para Formiga",
    categoria: "Micro-Óptica",
    regra: "Servir em uma formiga",
    carimbo: "ESCALA 2.2MM",
    preco: 320.00,
    freteBase: 14.00,
    descricaoCurta: "Câmera funcional de 2 milímetros com alça de seda feita sob medida para formigas-operárias.",
    descricaoDetalhada: "Projetada com lentes de safira microscópicas e flash de LED frio, permite que formigas-cortadeiras documentem expedições pelo jardim e enviem cartões-postais em escala milimétrica para o formigueiro.",
    especificacoes: [
      "Regra atendida: Servir em uma formiga (escala 1:150, apenas 2,2 mm);",
      "Material: Titânio ultralight e alça ajustável de fio de seda natural;",
      "Dimensões: 2,2 mm × 1,5 mm × 1,1 mm (pesa 0,04 miligramas);",
      "Modo de uso: Ajuste a alça no tórax da formiga; o obturador dispara a cada antena levantada."
    ],
    altImagem: "Sticker de uma câmera retrô prateada e preta ao lado de uma pequena formiga",
    svg: `<svg viewBox="0 0 220 160" width="220" height="160" role="img" aria-hidden="true">
      <rect x="40" y="46" width="92" height="60" rx="10" fill="#cbd5e1" stroke="#1d63b8" stroke-width="3.5"/>
      <rect x="40" y="62" width="92" height="32" fill="#1f2937"/>
      <rect x="64" y="34" width="32" height="12" rx="3" fill="#e63946" stroke="#1d63b8" stroke-width="3"/>
      <circle cx="86" cy="78" r="20" fill="#fffdf7" stroke="#1d63b8" stroke-width="3.5"/>
      <circle cx="86" cy="78" r="10" fill="#111827"/>
      <circle cx="118" cy="54" r="4.5" fill="#f8d948"/>
      <circle cx="158" cy="112" r="7" fill="#111827" stroke="#1d63b8" stroke-width="2"/>
      <circle cx="171" cy="114" r="5.5" fill="#111827" stroke="#1d63b8" stroke-width="2"/>
      <circle cx="182" cy="109" r="4.5" fill="#111827" stroke="#1d63b8" stroke-width="2"/>
      <path d="M154 118 L149 128 M160 118 L161 128 M172 119 L175 128" stroke="#1d63b8" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 5,
    nome: "Vitrola Orbital Baile Inolvidable",
    categoria: "Áudio Espacial",
    regra: "Ser usado no espaço sideral",
    carimbo: "ZERO-G · ÓRBITA",
    preco: 4900.00,
    freteBase: 85.00,
    descricaoCurta: "Tocadiscos magnetizado de gravidade zero para ouvir salsa e bolero em órbita terrestre.",
    descricaoDetalhada: "No vácuo do espaço sideral o som não se propaga pelo ar. Esta vitrola utiliza suspensão magnética para manter o vinil estável em microgravidade e transmite os arranjos de metais e percussão por condução direta aos capacetes espaciais.",
    especificacoes: [
      "Regra atendida: Ser usado no espaço sideral (opera em 0G e vácuo);",
      "Material: Liga de alumínio anodizado, ímãs de neodímio e agulha de diamante;",
      "Dimensões: 34 cm × 34 cm × 11 cm (certificada para estações orbitais);",
      "Modo de uso: Trave o disco de vinil no eixo magnético e conecte o cabo ao traje espacial."
    ],
    altImagem: "Sticker de um tocadiscos espacial flutuando entre estrelas com disco de salsa",
    svg: `<svg viewBox="0 0 220 160" width="220" height="160" role="img" aria-hidden="true">
      <rect x="24" y="18" width="172" height="124" rx="16" fill="#111827" stroke="#1d63b8" stroke-width="4"/>
      <circle cx="44" cy="34" r="3" fill="#f8d948"/>
      <circle cx="176" cy="38" r="3" fill="#ffffff"/>
      <circle cx="168" cy="126" r="2.5" fill="#f8d948"/>
      <rect x="48" y="40" width="124" height="80" rx="10" fill="#fffdf7" stroke="#e63946" stroke-width="3.5"/>
      <circle cx="102" cy="80" r="30" fill="#111827"/>
      <circle cx="102" cy="80" r="11" fill="#e63946"/>
      <circle cx="102" cy="80" r="3.5" fill="#f8d948"/>
      <path d="M150 50 L132 88" stroke="#1d63b8" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="150" cy="50" r="5.5" fill="#2d6a4f"/>
    </svg>`
  },
  {
    id: 6,
    nome: "Zumbido de Plena em Ampola",
    categoria: "Acústica Efêmera",
    regra: "Começar com a letra Z",
    carimbo: "LETRA Z · 20 MIN",
    preco: 155.00,
    freteBase: 16.00,
    descricaoCurta: "Ampola selada contendo o som ao vivo de uma roda de plena em San Juan para abrir uma única vez.",
    descricaoDetalhada: "Capturado ao entardecer nas ruas do Viejo San Juan, este frasco de vidro soprado guarda a vibração acústica de pandeiros e cantos tradicionais. Ao romper o lacre, o som preenche o ambiente por 20 minutos antes de silenciar para sempre.",
    especificacoes: [
      "Regra atendida: Começar com a letra Z (e ser de uso único);",
      "Material: Vidro borossilicato selado a vácuo com rolha de cortiça natural;",
      "Dimensões: 14 cm de altura × 5 cm de diâmetro;",
      "Modo de uso: Puxe o lacre dourado no centro da sala e aproveite os 20 minutos de música."
    ],
    altImagem: "Sticker de uma ampola de vidro selada com ondas sonoras douradas e vermelhas",
    svg: `<svg viewBox="0 0 220 160" width="220" height="160" role="img" aria-hidden="true">
      <rect x="94" y="18" width="32" height="14" rx="4" fill="#e63946" stroke="#1d63b8" stroke-width="3.5"/>
      <path d="M92 32 H128 L146 66 V126 A14 14 0 0 1 132 140 H88 A14 14 0 0 1 74 126 V66 Z" fill="#e0f2fe" stroke="#1d63b8" stroke-width="4"/>
      <path d="M88 92 Q99 74 110 92 T132 92" fill="none" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M88 110 Q99 92 110 110 T132 110" fill="none" stroke="#e63946" stroke-width="4.5" stroke-linecap="round"/>
    </svg>`
  }
];

function formatarMoeda(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function buscarProdutoPorId(id) {
  return PRODUTOS_DTMF.find((item) => item.id === Number(id)) || null;
}