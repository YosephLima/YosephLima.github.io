import { experienciaSchema } from "../../../shared/schemas/experiencia.schema.js";

let experiencias = [];
let nextId = 1;

function validarExperiencia(body, res) {
  const parsed = experienciaSchema.safeParse(body);

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
      message: "Dados de experiência inválidos",
      errors: errors,
    });

    return null;
  }

  return parsed.data;
}

// GET /experiencias
function listar(req, res) {
  res.json(experiencias);
}

// GET /experiencias/:id
function buscarPorId(req, res) {
  const id = Number(req.params.id);
  const item = experiencias.find((e) => e.id === id);

  if (!item) {
    return res.status(404).json({ message: "Experiência não encontrada" });
  }

  res.json(item);
}

// POST /experiencias
function criar(req, res) {
  const data = validarExperiencia(req.body, res);
  if (!data) {
    return;
  }
  const novo = { id: nextId++, ...data };
  experiencias.push(novo);
  res.status(201).json(novo);
}

// PUT /experiencias/:id
function atualizar(req, res) {
  const id = Number(req.params.id);
  const index = experiencias.findIndex((e) => e.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Experiência não encontrada" });
  }

  const data = validarExperiencia(req.body, res);
  if (!data) {
    return;
  }
  const atualizado = { id, ...data };
  experiencias[index] = atualizado;
  res.json(atualizado);
}

// DELETE /experiencias/:id
function remover(req, res) {
  const id = Number(req.params.id);
  const index = experiencias.findIndex((e) => e.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Experiência não encontrada" });
  }

  experiencias.splice(index, 1);
  res.json({ message: "Experiência removida com sucesso" });
}

export {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
};
