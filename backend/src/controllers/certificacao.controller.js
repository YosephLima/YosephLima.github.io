import { certificacaoSchema } from "../../../shared/schemas/certificacao.schema.js";

let certificacoes = [];
let nextId = 1;

function validarCertificacao(body, res) {
  const parsed = certificacaoSchema.safeParse(body);

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
      message: "Dados de certificação inválidos",
      errors: errors,
    });

    return null;
  }

  return parsed.data;
}

// GET /certificacoes
function listar(req, res) {
  res.json(certificacoes);
}

// GET /certificacoes/:id
function buscarPorId(req, res) {
  const id = Number(req.params.id);
  const item = certificacoes.find((c) => c.id === id);

  if (!item) {
    return res.status(404).json({ message: "Certificação não encontrada" });
  }

  res.json(item);
}

// POST /certificacoes
function criar(req, res) {
  const data = validarCertificacao(req.body, res);
  if (!data) {
    return;
  }
  const novo = { id: nextId++, ...data };
  certificacoes.push(novo);
  res.status(201).json(novo);
}

// PUT /certificacoes/:id
function atualizar(req, res) {
  const id = Number(req.params.id);
  const index = certificacoes.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Certificação não encontrada" });
  }

  const data = validarCertificacao(req.body, res);
  if (!data) {
    return;
  }
  const atualizado = { id, ...data };
  certificacoes[index] = atualizado;
  res.json(atualizado);
}

// DELETE /certificacoes/:id
function remover(req, res) {
  const id = Number(req.params.id);
  const index = certificacoes.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Certificação não encontrada" });
  }

  certificacoes.splice(index, 1);
  res.json({ message: "Certificação removida com sucesso" });
}

export {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
};
