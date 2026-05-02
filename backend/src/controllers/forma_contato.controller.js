import { formaContatoSchema } from "../../../shared/schemas/forma_contato.schema.js";

let formasContato = [];
let nextId = 1;

function validarFormaContato(body, res) {
  const parsed = formaContatoSchema.safeParse(body);

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
      message: "Dados de forma de contato inválidos",
      errors: errors,
    });

    return null;
  }

  return parsed.data;
}

// GET /formas-contato
function listar(req, res) {
  res.json(formasContato);
}

// GET /formas-contato/:id
function buscarPorId(req, res) {
  const id = Number(req.params.id);
  const item = formasContato.find((f) => f.id === id);

  if (!item) {
    return res.status(404).json({ message: "Forma de contato não encontrada" });
  }

  res.json(item);
}

// POST /formas-contato
function criar(req, res) {
  const data = validarFormaContato(req.body, res);
  if (!data) {
    return;
  }
  const novo = { id: nextId++, ...data };
  formasContato.push(novo);
  res.status(201).json(novo);
}

// PUT /formas-contato/:id
function atualizar(req, res) {
  const id = Number(req.params.id);
  const index = formasContato.findIndex((f) => f.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Forma de contato não encontrada" });
  }

  const data = validarFormaContato(req.body, res);
  if (!data) {
    return;
  }
  const atualizado = { id, ...data };
  formasContato[index] = atualizado;
  res.json(atualizado);
}

// DELETE /formas-contato/:id
function remover(req, res) {
  const id = Number(req.params.id);
  const index = formasContato.findIndex((f) => f.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Forma de contato não encontrada" });
  }

  formasContato.splice(index, 1);
  res.json({ message: "Forma de contato removida com sucesso" });
}

export {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
};
