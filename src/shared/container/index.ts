import { container } from "tsyringe";
import { CpfRepository } from "../../modules/Cpfs/infra/repositories/CpfRepository";
import { ICpfRepository } from "../../modules/Cpfs/repositories/ICpfRepository";

container.registerSingleton<ICpfRepository>(
    "CpfRepository",
    CpfRepository
);