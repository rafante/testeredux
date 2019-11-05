export default function reducer(
  estado: any = { contexto: "Teste" },
  acao: any
) {
  console.log(acao);
  if (acao.type === "TESTE") {
    return { ...estado, contexto: acao.algo };
  }
  return { estado };
}
