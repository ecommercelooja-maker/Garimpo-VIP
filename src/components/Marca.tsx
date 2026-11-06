// Gema lapidada do logo. `cor` é a pedra e `brilho` as facetas claras.
export function Gema({ cor = "#e9b949", brilho = "#fff3c4", sombra = "#b8862b" }: { cor?: string; brilho?: string; sombra?: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 10h28l12 15-26 31L6 25z" fill={cor} />
      <path d="M18 10l8 15h12l8-15z" fill={brilho} />
      <path d="M6 25h20l6 31z" fill={sombra} />
      <path d="M38 25h20L32 56z" fill={sombra} opacity=".55" />
      <path d="M26 25h12l-6 31z" fill={brilho} opacity=".45" />
      <path d="M18 10L6 25h20zM46 10l12 15H38z" fill={cor} />
    </svg>
  );
}

export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className={`logo${claro ? " claro" : ""}`}>
      <span className="logo-icone">
        <Gema />
      </span>
      <span className="logo-texto">
        Garimpo<b>VIP</b>
      </span>
    </span>
  );
}

export function IconeWhats() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
    </svg>
  );
}

export function IconeTelegram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M21.4 3.6 2.9 10.7c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.4.8.8.8s.6-.2.9-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.9-1.4-1.5zM9.6 14.4l-.4 4-1.4-4.6 10.4-6.6z" />
    </svg>
  );
}
