import express from "express";
import {
  buscarPorId,
  atualizar,
  remover,
} from "../controllers/apresentacao.controller.js";

const router = express.Router();

router.get("/:id", buscarPorId);
router.put("/:id", atualizar);
router.delete("/:id", remover);

export default router;
