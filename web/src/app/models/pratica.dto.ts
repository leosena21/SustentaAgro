import { etapaDTO } from "./etapa.dto";

export interface praticaDTO{
  nome: string;
  descricao: string;
  url: string;
  passos: etapaDTO[];
}