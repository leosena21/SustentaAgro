import { alunoDTO } from "./aluno.dto";
import { etapaDTO } from "./etapa.dto";
import { professorDTO } from "./professor.dto";

export interface realizadoDTO{
  dt_realizado?: string;
  pontuacao?: string;
  motivo?: string;
  conformidade?: boolean;
  avaliado: boolean;
  alunos?: alunoDTO[];
  etapa: etapaDTO;
  professor?: professorDTO;
}