import { projetoSchema } from "../../../shared/schemas/projeto.schema.js";

let projetos = [];
let nextId = 1;

function validarProjeto(body, res) {
  const parsed = projetoSchema.safeParse(body);

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
      message: "Dados de projeto inválidos",
      errors: errors,
    });

    return null;
  }

  return parsed.data;
}

// GET /projetos
function listar(req, res) {
  res.json(projetos);
}

// GET /projetos/:id
function buscarPorId(req, res) {
  const id = Number(req.params.id);
  const item = projetos.find((p) => p.id === id);

  if (!item) {
    return res.status(404).json({ message: "Projeto não encontrado" });
  }

  res.json(item);
}

// POST /projetos
function criar(req, res) {
  const data = validarProjeto(req.body, res);
  if (!data) {
    return;
  }
  const novo = { id: nextId++, ...data };
  projetos.push(novo);
  res.status(201).json(novo);
}

// PUT /projetos/:id
function atualizar(req, res) {
  const id = Number(req.params.id);
  const index = projetos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Projeto não encontrado" });
  }

  const data = validarProjeto(req.body, res);
  if (!data) {
    return;
  }
  const atualizado = { id, ...data };
  projetos[index] = atualizado;
  res.json(atualizado);
}

// DELETE /projetos/:id
function remover(req, res) {
  const id = Number(req.params.id);
  const index = projetos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Projeto não encontrado" });
  }

  projetos.splice(index, 1);
  res.json({ message: "Projeto removido com sucesso" });
}

export {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
};
