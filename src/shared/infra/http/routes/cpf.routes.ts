import { Router } from "express";
import { AddCpfController } from "../../../../modules/Cpfs/useCases/AddCpf/AddCpfController";
import { CheckCpfController } from "../../../../modules/Cpfs/useCases/CheckCpf/CheckCpfController";
import { FindAllCpfController } from "../../../../modules/Cpfs/useCases/FindAllCpf/FindAllCpfController";
import { RemoveCpfController } from "../../../../modules/Cpfs/useCases/RemoveCpf/RemoveCpfController";

const cpfRoutes = Router();

const addCpfController = new AddCpfController();
const checkCpfController = new CheckCpfController();
const removeCpfController = new RemoveCpfController();
const findAllCpfController = new FindAllCpfController();

cpfRoutes.post("/", addCpfController.handle);
cpfRoutes.get("/:cpf", checkCpfController.handle);
cpfRoutes.delete("/:cpf", removeCpfController.handle);
cpfRoutes.get("/", findAllCpfController.handle);

export { cpfRoutes };