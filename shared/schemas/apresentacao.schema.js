import { z } from "zod";

export const apresentacaoSchema = z.object({
    titulo: z.string().min(1, "Título é obrigatório"),
    descricao: z.string().min(1, "Descrição é obrigatória"),
});
