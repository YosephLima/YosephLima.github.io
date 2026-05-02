import { z } from "zod";

export const formaContatoSchema = z.object({
    img: z.string().min(1, "Imagem é obrigatória"),
    url: z.string().min(1, "URL é obrigatória"),
});
