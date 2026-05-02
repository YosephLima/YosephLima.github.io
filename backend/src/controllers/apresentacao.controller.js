import { apresentacaoSchema } from "../../../shared/schemas/apresentacao.schema.js";

let apresentacao = [
  {
    id: 1,
    titulo: "Olá - sou Yoseph Levi",
    descricao: `Sou um Desenvolvedor de Software focado em criar aplicações web que
                automatizam e organizam processos nos mais variados setores. Meu Fascínio pela
                Tecnologia
                (Principalmente na Computação) tem me levado a entender cada vez mais as camadas mais
                profundas do funcionamento das tecnologias atuais`,
  },
];

function validarApresentacao(body, res) {
  const parsed = apresentacaoSchema.safeParse(body);

  if (!parsed.success) {

    const errors = {};

    parsed.error.issues.forEach((err) => {
      const field = err.path[0];
      if (!errors[field]) {
        errors[field] = [];
      }
      errors[field].push(err.message);
    });

    res.status(400).json({
      message: "Dados de apresentação inválidos",
      errors: errors,
    });

    return null;
  }

  return parsed.data;
}

// GET /apresentacao/:id
function buscarPorId(req, res) {
  const id = Number(req.params.id);
  const item = apresentacao.find((a) => a.id === id);

  if (!item) {
    return res.status(404).json({ message: "Apresentação não encontrada" });
  }

  res.json(item);
}

// PUT /apresentacao/:id
function atualizar(req, res) {
  const id = Number(req.params.id);
  const index = apresentacao.findIndex((a) => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Apresentação não encontrada" });
  }

  const data = validarApresentacao(req.body, res);
  if (!data) {
    return;
  }
  const atualizado = { id, ...data };
  apresentacao[index] = atualizado;
  res.json(atualizado);
}

// DELETE /apresentacao/:id
function remover(req, res) {
  const id = Number(req.params.id);
  const index = apresentacao.findIndex((a) => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Apresentação não encontrada" });
  }

  apresentacao.splice(index, 1);
  res.json({ message: "Apresentação removida com sucesso" });
}

export {
  buscarPorId,
  atualizar,
  remover,
};
