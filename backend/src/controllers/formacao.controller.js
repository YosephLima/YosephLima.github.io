import { formacaoSchema } from "../../../shared/schemas/formacao.schema.js";

let formacoes = [];
let nextId = 1;

function validarFormacao(body, res) {
  const parsed = formacaoSchema.safeParse(body);

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
      message: "Dados de formação inválidos",
      errors: errors,
    });

    return null;
  }

  return parsed.data;
}

// GET /formacoes
function listar(req, res) {
  res.json(formacoes);
}

// GET /formacoes/:id
function buscarPorId(req, res) {
  const id = Number(req.params.id);
  const item = formacoes.find((f) => f.id === id);

  if (!item) {
    return res.status(404).json({ message: "Formacao nao encontrada" });
  }

  res.json(item);
}

// POST /formacoes
function criar(req, res) {
  const data = validarFormacao(req.body, res);
  if (!data) {
    return;
  }
  const novo = { id: nextId++, ...data };
  formacoes.push(novo);
  res.status(201).json(novo);
}

// PUT /formacoes/:id
function atualizar(req, res) {
  const id = Number(req.params.id);
  const index = formacoes.findIndex((f) => f.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Formacao nao encontrada" });
  }

  const data = validarFormacao(req.body, res);
  if (!data) {
    return;
  }
  const atualizado = { id, ...data };
  formacoes[index] = atualizado;
  res.json(atualizado);
}

// DELETE /formacoes/:id
function remover(req, res) {
  const id = Number(req.params.id);
  const index = formacoes.findIndex((f) => f.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Formacao nao encontrada" });
  }

  formacoes.splice(index, 1);
  res.json({ message: "Formacao removida com sucesso" });
}

export {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
};