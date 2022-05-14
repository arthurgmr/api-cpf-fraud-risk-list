import { Router } from "express";
import { cpfRoutes } from "./cpf.routes";

const router = Router();

router.use("/cpf", cpfRoutes);

export { router };