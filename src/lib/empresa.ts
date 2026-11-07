// Dados da empresa responsável pelo site. Único lugar para alterar: rodapé e páginas legais leem daqui.
// Nome fantasia: GOMES ANDRADE GROUP. TODO: endereço do cartão CNPJ antes de anunciar no Google Ads.

export const RAZAO_SOCIAL = "GOMES ANDRADE EMPREENDIMENTOS LIMITADA";
export const CNPJ = "44.682.759/0001-77";
// Endereço de registro (cartão CNPJ). Vazio: o endereço some do rodapé e das páginas legais.
export const ENDERECO = "";
// ", endereço" pronto para colar depois do CNPJ (vazio quando não há endereço).
export const ENDERECO_SUFIXO = ENDERECO ? `, ${ENDERECO}` : "";
export const EMAIL_CONTATO = "suporte@garimpo-vip.com";

// Linha exibida no fim de cada página legal.
export const LINHA_EMPRESA = `${RAZAO_SOCIAL} · CNPJ ${CNPJ}${ENDERECO ? ` · ${ENDERECO}` : ""} · Dúvidas: ${EMAIL_CONTATO}`;
