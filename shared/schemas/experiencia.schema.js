import { z } from "zod";

export const experienciaSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    local: z.string().min(1, "Local é obrigatório"),
    atual: z.boolean(),
    inicio: z.string().min(1, "Início é obrigatório"),
    fim: z.string().min(1, "Fim é obrigatório"),
    descricao: z.string().min(1, "Descrição é obrigatória"),
    tecnologias: z
        .array(z.string().min(1, "Tecnologia é obrigatória"))
        .min(1, "Tecnologias são obrigatórias"),
});
