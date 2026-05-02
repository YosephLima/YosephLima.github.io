import { z } from "zod";

export const formacaoSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    status: z.boolean(),
    local: z.string().min(1, "Local é obrigatório"),    
    inicio: z.number().int(),
    fim: z.number().int(),
}).refine((data) => data.fim > data.inicio, {
    message: "A data de fim deve ser maior que a de início",
    path: ["fim"],
});
