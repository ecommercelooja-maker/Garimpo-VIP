import { CelularGrupo, GradeAchados } from "@/components/Achados";
import { Indicar, VideoLoop } from "@/components/Cliente";
import { Gema } from "@/components/Marca";
import { Anim, Brilhos, Foto } from "@/components/Midia";
import { Botoes, Cabecalho, Globais, Rodape } from "@/components/Site";
import { LOJAS, LOJAS_TEXTO, TELEGRAM, TEXTO_AFILIADO } from "@/config";

// A peneira: cada camada tira o que não presta. A largura diminui a cada etapa.
const PENEIRA = [
  { emoji: "olhos", etapa: "Garimpo", titulo: "Vasculhamos as lojas", texto: `Olhamos ${LOJAS_TEXTO} ao longo do dia, atrás de queda de preço.` },
  { emoji: "alvo", etapa: "1ª peneira", titulo: "Desconto de verdade?", texto: "Comparamos com o histórico de preço. Desconto inflado fica na peneira." },
  { emoji: "check", etapa: "2ª peneira", titulo: "Cupom e vendedor", texto: "Testamos o cupom no carrinho e priorizamos vendedores bem avaliados." },
  { emoji: "diamante", etapa: "Pepita", titulo: "Chega no grupo", texto: "O achadinho vai com foto e link da loja. Você compra direto no site dela, se quiser." },
];

const CATEGORIAS = [
  { foto: "sala", alt: "Sala de estar decorada com sofá e plantas", emoji: "casa", titulo: "Casa e cozinha", texto: "Organizadores, utensílios e aquele item que resolve a rotina." },
  { foto: "fone", alt: "Fone de ouvido sobre fundo amarelo", emoji: "relampago", titulo: "Eletrônicos", texto: "Fones, carregadores, câmeras e gadgets com desconto conferido." },
  { foto: "serum", alt: "Frasco de sérum com conta-gotas", emoji: "coracao-brilho", titulo: "Beleza e cuidados", texto: "Skincare, cabelo e perfumaria quando o preço cai de verdade." },
  { foto: "garrafa", alt: "Garrafa térmica verde", emoji: "lampada", titulo: "Utilidades", texto: "Achadinhos baratos e úteis que ninguém sabia que precisava." },
];

// Faixa de fotos em movimento: [foto, legenda, emoji, texto alternativo]
const GALERIA: [string, string, string, string][] = [
  ["sofa", "Casa e cozinha", "casa", "Sofá verde em uma sala clara"],
  ["fone", "Eletrônicos", "relampago", "Fone de ouvido sobre fundo amarelo"],
  ["maquiagem", "Beleza e cuidados", "coracao-brilho", "Pincéis e itens de maquiagem"],
  ["garrafa", "Utilidades", "lampada", "Garrafa térmica verde"],
  ["cozinhando", "Casa e cozinha", "festejando", "Casal cozinhando junto"],
  ["relogios", "Eletrônicos", "relampago", "Dois relógios inteligentes brancos"],
  ["serum", "Beleza e cuidados", "brilho", "Frasco de sérum com conta-gotas"],
  ["poltrona", "Casa e cozinha", "casa", "Poltrona amarela em uma sala"],
  ["bolsa", "Utilidades", "estrelas", "Bolsa vermelha"],
  ["cozinha", "Casa e cozinha", "joinha", "Cozinha organizada"],
];

const VIP: [string, string, string][] = [
  ["coroa", "VIP é o filtro, não o preço", "O grupo é gratuito: sem mensalidade, sem assinatura e sem área paga. O VIP está na seleção."],
  ["maos", "Grupo silencioso", "Só o administrador envia mensagens. Ninguém te chama no privado e dá para deixar no silencioso."],
  ["medalha", "Poucas e boas", "Melhor mandar menos e só o que vale a pena do que lotar seu celular de oferta repetida."],
];

const MANTEMOS = [
  ["A loja é quem paga", "Quando você compra pelo nosso link, a loja nos repassa uma comissão. Seu preço é exatamente o mesmo."],
  ["Só vale se o achadinho for bom", "Oferta ruim ninguém compra. Nosso interesse é o mesmo que o seu: desconto que valha a pena."],
  ["Não vendemos nada", "Sem estoque, sem pagamento, sem cadastro. Quem vende, cobra e entrega é a loja."],
  ["Gratuito de verdade", "Não existe plano pago nem conteúdo exclusivo para assinante. Entra e sai quando quiser."],
];

const COMPROMISSOS: [string, string][] = [
  ["Ninguém te chama no privado.", "Só o administrador envia e o grupo é fechado para conversa."],
  ["Sem e-mail, sem CPF, sem cadastro.", "Você entra pelo convite do próprio WhatsApp."],
  ["Desconto falso fica na peneira.", "Se o preço não caiu de verdade, o achadinho não é enviado."],
  ["A compra é na loja.", "Pagamento, entrega e garantia são da loja onde você comprar."],
];

const DUVIDAS: [string, string][] = [
  [
    "Se é VIP, é pago?",
    "Não. O Garimpo VIP é gratuito, sem mensalidade e sem área exclusiva para assinante. O “VIP” é o nosso critério: só enviamos o que passou na peneira.",
  ],
  [
    "Vocês ganham alguma coisa com os links?",
    `Sim. Participamos dos programas de afiliados de lojas como ${LOJAS_TEXTO} e recebemos uma comissão quando você compra pelo nosso link, sem nenhum custo extra para você. É isso que mantém o grupo funcionando.`,
  ],
  ["Vocês vendem os produtos?", "Não. Não somos loja. A compra, o pagamento, a entrega e a garantia são da loja, e qualquer questão do pedido é resolvida direto com ela."],
  [
    "Meu número fica visível?",
    "O grupo é fechado para conversa: só o administrador envia mensagens, então ninguém te chama no privado. Como em qualquer grupo do WhatsApp, os participantes podem ver o número uns dos outros.",
  ],
  ["Quantas mensagens por dia?", "Só o que vale a pena. Se achar muito, dá para silenciar o grupo sem sair, o próprio WhatsApp permite."],
  ["Como faço para sair?", "Pelo próprio WhatsApp, em dois toques, quando quiser. Sem precisar avisar ninguém."],
];

export default function Home() {
  return (
    <>
      <Cabecalho home />

      {/* Topo: chamada + celular com mensagens chegando */}
      <header className="hero" data-origem="hero">
        <div className="hero-fundo" aria-hidden="true">
          <VideoLoop nome="hero" className="hero-video" />
        </div>
        <Brilhos n={18} />
        <div className="wrap hero-grade">
          <div className="hero-texto">
            <p className="selo">
              <span className="selo-ponto" aria-hidden="true" /> Grupo gratuito de achadinhos no WhatsApp{TELEGRAM && " e no Telegram"}
            </p>
            <h1>
              Achadinhos garimpados a dedo.
              <em> Só as pepitas chegam até você.</em>
            </h1>
            <p className="hero-sub">
              A gente vasculha as lojas online atrás de achadinhos de <b>casa, cozinha, beleza e eletrônicos</b>, confere
              se o desconto é real e manda só o que passou na peneira.
            </p>
            <Botoes escuro texto="Quero receber os achadinhos" />
            <ul className="hero-garantias">
              <li>Gratuito</li>
              <li>Sem cadastro</li>
              <li>Só o admin envia</li>
            </ul>
          </div>

          <div className="hero-celular">
            <span className="hero-gema hero-gema-1" aria-hidden="true">
              <Gema />
            </span>
            <span className="hero-gema hero-gema-2" aria-hidden="true">
              <Gema />
            </span>
            <figure className="hero-foto">
              <Foto nome="mulher-sacolas" alt="Mulher sorrindo com sacolas de compras" sizes="(min-width: 900px) 300px, 62vw" prioridade />
            </figure>
            <CelularGrupo />
            <span className="chip chip-1" aria-hidden="true">
              <Anim n="fogo" t={26} /> Desconto conferido
            </span>
            <span className="chip chip-2" aria-hidden="true">
              <Anim n="check" t={24} /> Cupom testado
            </span>
            <Anim n="brilho" t={56} className="hero-brilho" />
          </div>
        </div>
      </header>

      {/* Lojas: só o nome, em texto (sem logotipos) */}
      <section className="lojas" aria-label="Lojas onde garimpamos">
        <div className="lojas-trilho" aria-hidden="true">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              {LOJAS.map((l) => (
                <span key={l} className="lojas-nome">
                  <Gema /> {l}
                </span>
              ))}
            </span>
          ))}
        </div>
        <p className="sr">Lojas onde garimpamos achadinhos: {LOJAS_TEXTO}.</p>
      </section>

      {/* Galeria de fotos em movimento (decorativa) */}
      <section className="galeria" aria-label="Achadinhos de casa, cozinha, beleza e eletrônicos">
        <div className="galeria-linha">
          {[...GALERIA, ...GALERIA].map(([foto, legenda, emoji, alt], i) => (
            // A segunda metade repete a primeira só para a rolagem contínua: fica oculta para leitores de tela.
            <figure key={i} className="galeria-item" aria-hidden={i >= GALERIA.length || undefined}>
              <Foto nome={foto} alt={alt} sizes="(min-width: 900px) 300px, 62vw" />
              <figcaption>
                <Anim n={emoji} t={22} /> {legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <main>
        {/* Como funciona: a peneira */}
        <section className="secao" id="peneira">
          <div className="wrap">
            <p className="sobretitulo rv">Como funciona</p>
            <h2 className="titulo rv">A peneira do Garimpo</h2>
            <p className="sub rv">Muita coisa entra, pouca coisa sai. Cada etapa tira o que não vale o seu dinheiro.</p>
            <ol className="peneira">
              {PENEIRA.map((p, i) => (
                <li key={p.etapa} className="camada rv" style={{ ["--i" as string]: i, transitionDelay: `${i * 90}ms` }}>
                  <span className="camada-anim">
                    <Anim n={p.emoji} t={44} />
                  </span>
                  <span className="camada-etapa">{p.etapa}</span>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Faixa de vídeo: do garimpo até a sua casa */}
        <section className="cinema" aria-label="Do garimpo até a sua casa">
          <VideoLoop nome="unboxing" className="cinema-video" />
          <div className="cinema-veu" aria-hidden="true" />
          <div className="wrap cinema-texto" aria-hidden="true">
            <Anim n="presente" t={64} />
            <span>Do garimpo</span>
            <em>até a sua casa.</em>
          </div>
        </section>

        {/* Categorias */}
        <section className="secao secao-creme">
          <div className="wrap">
            <p className="sobretitulo rv">Onde a gente garimpa</p>
            <h2 className="titulo rv">Achadinhos pra casa toda</h2>
            <div className="categorias">
              {CATEGORIAS.map((c, i) => (
                <article key={c.titulo} className="categoria rv" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="categoria-foto">
                    <Foto nome={c.foto} alt={c.alt} sizes="(min-width: 1000px) 280px, (min-width: 640px) 45vw, 92vw" />
                    <Anim n={c.emoji} t={52} className="categoria-anim" />
                  </div>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Exemplos estáticos */}
        <section className="secao" id="exemplos" data-origem="exemplos">
          <div className="wrap">
            <p className="sobretitulo rv">
              <Anim n="fogo" t={22} /> Exemplos
            </p>
            <h2 className="titulo rv">Pepitas que já passaram pelo grupo</h2>
            <p className="sub rv">
              Alguns achadinhos que já divulgamos. Os do dia, com preço e link da loja, são enviados dentro do grupo.
            </p>
            <GradeAchados />
            <div className="centro">
              <Botoes texto="Participar do grupo gratuito" />
            </div>
          </div>
        </section>

        {/* Por que VIP */}
        <section className="secao secao-escura vip" id="vip">
          <Brilhos n={12} />
          <div className="wrap">
            <div className="vip-cabeca">
            <div className="vip-topo">
              <span className="vip-gema rv" aria-hidden="true">
                <Gema />
              </span>
              <div>
                <p className="sobretitulo claro esquerda rv">Por que VIP?</p>
                <h2 className="titulo claro esquerda rv">
                  VIP de critério,
                  <br />
                  <em>não de preço.</em>
                </h2>
              </div>
            </div>
              <div className="vip-midia rv">
                <VideoLoop nome="arara" rotulo="Mulher escolhendo roupas em uma arara" />
                <span className="vip-selo">
                  <Anim n="coroa" t={30} /> Seleção VIP
                </span>
              </div>
            </div>
            <div className="vip-grade">
              {VIP.map(([e, t, p], i) => (
                <article key={t} className="vip-card rv" style={{ transitionDelay: `${i * 90}ms` }}>
                  <Anim n={e} t={48} />
                  <h3>{t}</h3>
                  <p>{p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Como nos mantemos (divulgação de afiliados) */}
        <section className="secao secao-creme" id="como-nos-mantemos">
          <div className="wrap mantemos">
            <div className="mantemos-texto rv">
              <p className="sobretitulo esquerda">A pergunta de todo mundo</p>
              <h2 className="titulo esquerda">&ldquo;Se é grátis, como vocês ganham?&rdquo;</h2>
              <p className="mantemos-aviso">
                <Anim n="cem" t={32} /> {TEXTO_AFILIADO}
              </p>
              <div className="mantemos-foto">
                <Foto nome="compra-cartao" alt="Pessoa fazendo uma compra online com cartão no notebook" sizes="(min-width: 900px) 460px, 92vw" />
                <span className="mantemos-selo">
                  <Anim n="joinha" t={36} />
                  <span>
                    <b>Comissão da loja</b>
                    <small>o seu preço não muda</small>
                  </span>
                </span>
              </div>
            </div>
            <ol className="mantemos-lista">
              {MANTEMOS.map(([t, p], i) => (
                <li key={t} className="rv" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Compromissos */}
        <section className="secao">
          <div className="wrap compromisso rv">
            <div>
              <p className="sobretitulo esquerda">Combinado</p>
              <h2 className="titulo esquerda">Nosso compromisso com você</h2>
              <div className="compromisso-midia">
                <VideoLoop nome="entrega" rotulo="Pessoa recebendo uma encomenda" />
              </div>
            </div>
            <ul>
              {COMPROMISSOS.map(([b, t]) => (
                <li key={b}>
                  <Gema />
                  <span>
                    <b>{b}</b> {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Indique */}
        <section className="secao secao-creme" id="indique">
          <div className="wrap indique-grade">
          <div className="indique-midia rv">
            <VideoLoop nome="presente" rotulo="Pessoa entregando um presente a outra" />
            <Anim n="coracao-brilho" t={64} className="indique-coracao" />
          </div>
          <div className="indique rv">
            <Anim n="presente" t={72} className="indique-anim" />
            <p className="sobretitulo">Divida o tesouro</p>
            <h2 className="titulo">Conhece alguém que ama um achadinho?</h2>
            <p className="sub">
              Mande o link do grupo para a família, os amigos ou aquele grupo do trabalho. Ajude quem você gosta a pagar
              menos.
            </p>
            <Indicar />
          </div>
          </div>
        </section>

        {/* Dúvidas */}
        <section className="secao" id="duvidas">
          <div className="wrap estreito">
            <p className="sobretitulo rv">Dúvidas</p>
            <h2 className="titulo rv">Ficou alguma dúvida?</h2>
            <div className="duvidas rv">
              {DUVIDAS.map(([q, r], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}</summary>
                  <p>{r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Fechamento */}
        <section className="fechamento" data-origem="fechamento">
          <VideoLoop nome="amigas" className="fechamento-video" />
          <div className="fechamento-veu" aria-hidden="true" />
          <Brilhos n={22} />
          <div className="wrap fechamento-conteudo">
            <span className="fechamento-gema" aria-hidden="true">
              <Gema />
            </span>
            <h2>
              Deixa o garimpo com a gente.
              <br />
              <em>Você só pega as pepitas.</em>
            </h2>
            <p>Gratuito e sem cadastro. Deixe silenciado e abra quando for comprar alguma coisa.</p>
            <Botoes escuro />
          </div>
        </section>
      </main>

      <Rodape home />
      <Globais />
    </>
  );
}
