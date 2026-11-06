/* eslint-disable @next/next/no-img-element */

/* Emoji animado (Google Noto Animated Emoji, CC BY 4.0), em /public/anim. Decorativo. */
export function Anim({ n, t = 40, className = "" }: { n: string; t?: number; className?: string }) {
  return <img className={`anim ${className}`} src={`/anim/${n}.webp`} alt="" aria-hidden="true" width={t} height={t} loading="lazy" />;
}

/* Brilhos dourados espalhados (decorativos). Posições fixas para o HTML do servidor e do navegador serem iguais. */
export function Brilhos({ n = 14 }: { n?: number }) {
  return (
    <div className="brilhos" aria-hidden="true">
      {Array.from({ length: n }, (_, i) => (
        <i
          key={i}
          style={{
            left: `${(i * 41 + 7) % 100}%`,
            top: `${(i * 67 + 13) % 100}%`,
            animationDelay: `${(i % 7) * -0.6}s`,
            ["--s" as string]: 0.5 + (i % 4) * 0.25,
          }}
        />
      ))}
    </div>
  );
}
