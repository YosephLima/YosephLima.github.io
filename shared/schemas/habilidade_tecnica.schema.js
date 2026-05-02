import { z } from "zod";

const categorias = ["Front-End", "Back-End", "Ferramentas"];

export const habilidadeTecnicaSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    categoria: z
        .string()
        .min(1, "Categoria é obrigatória")
        .refine((value) => categorias.includes(value), {
            message: "Categoria inválida",
        }),
    img: z.string().min(1, "Imagem é obrigatória"),
});
