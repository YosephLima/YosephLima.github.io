import { habilidadeTecnicaSchema } from "../../../shared/schemas/habilidade_tecnica.schema.js";

let habilidadesTecnicas = [];
let nextId = 1;

function validarHabilidadeTecnica(body, res) {
  const parsed = habilidadeTecnicaSchema.safeParse(body);

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
      message: "Dados de habilidade técnica inválidos",
      errors: errors,
    });

    return null;
  }

  return parsed.data;
}

// GET /habilidades-tecnicas
function listar(req, res) {
  res.json(habilidadesTecnicas);
}

// GET /habilidades-tecnicas/:id
function buscarPorId(req, res) {
  const id = Number(req.params.id);
  const item = habilidadesTecnicas.find((h) => h.id === id);

  if (!item) {
    return res.status(404).json({ message: "Habilidade técnica não encontrada" });
  }

  res.json(item);
}

// POST /habilidades-tecnicas
function criar(req, res) {
  const data = validarHabilidadeTecnica(req.body, res);
  if (!data) {
    return;
  }
  const novo = { id: nextId++, ...data };
  habilidadesTecnicas.push(novo);
  res.status(201).json(novo);
}

// PUT /habilidades-tecnicas/:id
function atualizar(req, res) {
  const id = Number(req.params.id);
  const index = habilidadesTecnicas.findIndex((h) => h.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Habilidade técnica não encontrada" });
  }

  const data = validarHabilidadeTecnica(req.body, res);
  if (!data) {
    return;
  }
  const atualizado = { id, ...data };
  habilidadesTecnicas[index] = atualizado;
  res.json(atualizado);
}

// DELETE /habilidades-tecnicas/:id
function remover(req, res) {
  const id = Number(req.params.id);
  const index = habilidadesTecnicas.findIndex((h) => h.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Habilidade técnica não encontrada" });
  }

  habilidadesTecnicas.splice(index, 1);
  res.json({ message: "Habilidade técnica removida com sucesso" });
}

export {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
};
