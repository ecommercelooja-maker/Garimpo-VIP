// Dados da empresa responsável pelo site. Único lugar para alterar: rodapé e páginas legais leem daqui.
// Nome fantasia: TEC CONNECT. TODO: endereço do cartão CNPJ e e-mail de contato antes de anunciar no Google Ads.

export const RAZAO_SOCIAL = "TEC CONNECT CONECTIVIDADE URBANA LTDA";
export const CNPJ = "50.429.871/0001-01";
// Endereço de registro (cartão CNPJ). Vazio: o endereço some do rodapé e das páginas legais.
export const ENDERECO = "";
// ", endereço" pronto para colar depois do CNPJ (vazio quando não há endereço).
export const ENDERECO_SUFIXO = ENDERECO ? `, ${ENDERECO}` : "";
export const EMAIL_CONTATO = "[e-mail de contato]";

// Linha exibida no fim de cada página legal.
export const LINHA_EMPRESA = `${RAZAO_SOCIAL} · CNPJ ${CNPJ}${ENDERECO ? ` · ${ENDERECO}` : ""} · Dúvidas: ${EMAIL_CONTATO}`;
