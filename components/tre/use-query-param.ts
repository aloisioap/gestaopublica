"use client";
import { useCallback, useEffect, useState } from "react";

export function useQueryParam(chave: string, padrao: string) {
  const [valor, setValor] = useState(padrao);

  useEffect(() => {
    const inicial = new URLSearchParams(window.location.search).get(chave);
    if (inicial) setValor(inicial);
  }, [chave]);

  const atualizar = useCallback(
    (novo: string) => {
      setValor(novo);
      const url = new URL(window.location.href);
      if (novo === padrao || novo === "") url.searchParams.delete(chave);
      else url.searchParams.set(chave, novo);
      window.history.replaceState(null, "", url);
    },
    [chave, padrao],
  );

  return [valor, atualizar] as const;
}
