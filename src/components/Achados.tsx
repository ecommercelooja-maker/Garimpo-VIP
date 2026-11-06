/* eslint-disable @next/next/no-img-element */
import { MARCA, MOSTRAR_PRECOS, NICHOS, type Nicho } from "@/config";
import { Gema } from "@/components/Marca";
import dados from "@/data/ofertas.json";

type Exemplo = {
  ativo: boolean;
  nome: string;
  imagem: string;
  loja: string;
  nicho: Nicho;
  precoDe: string;
  precoPor: string;
};

const EXEMPLOS = (dados.ofertas as Exemplo[]).filter((o) => o.ativo);

// Placeholder "R$ 0,00" nunca vai para a página, mesmo com MOSTRAR_PRECOS ligado.
const temPreco = (o: Exemplo) => MOSTRAR_PRECOS && !/^R\$\s*0,00$/.test(o.precoPor.trim());

function Precos({ o }: { o: Exemplo }) {
  if (!temPreco(o)) return null;
  return (
    <p className="achado-precos">
      <s>
        <span className="sr">De </span>
        {o.precoDe}
      </s>
      <b>
        <span className="sr">Por </span>
        {o.precoPor}
      </b>
    </p>
  );
}

/* Grade de exemplos estáticos: sem link, sem botão por card. */
export function GradeAchados() {
  return (
    <div className="achados">
      {EXEMPLOS.map((o, i) => (
        <article key={o.imagem} className="achado rv" style={{ transitionDelay: `${i * 80}ms` }}>
          <div className="achado-foto">
            <img src={o.imagem} alt={o.nome} loading="lazy" />
            <span className="achado-selo">
              <Gema /> Pepita
            </span>
          </div>
          <div className="achado-corpo">
            <span className="achado-nicho">{NICHOS[o.nicho]}</span>
            <h3>{o.nome}</h3>
            <Precos o={o} />
            <p className="achado-loja">Loja: {o.loja}</p>
            <p className="achado-nota">Exemplo ilustrativo de achadinho já divulgado. Preço e estoque mudam na loja.</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/* Celular do topo: como uma mensagem chega no grupo. Ilustrativo, sem preço e sem link. */
export function CelularGrupo() {
  const itens = EXEMPLOS.slice(0, 2);
  return (
    <div className="celular" role="img" aria-label={`Ilustração de mensagens de achadinhos chegando no grupo do ${MARCA}`}>
      <div className="celular-tela" aria-hidden="true">
        <div className="celular-topo">
          <span className="celular-avatar">
            <Gema />
          </span>
          <span>
            <b>{MARCA}</b>
            <small>Só o administrador envia mensagens</small>
          </span>
        </div>
        <div className="celular-conversa">
          <span className="celular-dia">Hoje</span>
          {itens.map((o, i) => (
            <div key={o.imagem} className="msg" style={{ animationDelay: `${0.4 + i * 0.9}s` }}>
              <img src={o.imagem} alt="" />
              <p>
                <b>💎 Achadinho garimpado</b>
                {o.nome}
              </p>
              <p className="msg-loja">Loja: {o.loja}</p>
              <span className="msg-hora">{["09:12", "12:40"][i]}</span>
            </div>
          ))}
          <div className="msg msg-curta" style={{ animationDelay: "2.2s" }}>
            <p>
              <b>✅ Desconto conferido no histórico</b>
              Cupom testado no carrinho. Compra direto no site da loja.
            </p>
            <span className="msg-hora">12:41</span>
          </div>
        </div>
        <p className="celular-legenda">Exemplo ilustrativo</p>
      </div>
    </div>
  );
}
