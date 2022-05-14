import { AppError } from "../../../../shared/errors/AppError";
import { Cpf } from "../../infra/typeorm/entities/Cpf";
import { CpfRepositoryInMemory } from "../../repositories/in-memory/CpfRepositoryInMemory";
import { RemoveCpfUseCase } from "./RemoveCpfUseCase";


let removeCpfUseCase: RemoveCpfUseCase;
let cpfRepositoryInMemory: CpfRepositoryInMemory;

describe("Remove a CPF to the fraud risk list", () => {
    beforeEach (() => {
        cpfRepositoryInMemory = new CpfRepositoryInMemory();
        removeCpfUseCase = new RemoveCpfUseCase(cpfRepositoryInMemory);
    });

    it("Should be able to remove a cpf in the list", async () => {
        await cpfRepositoryInMemory.registerCpf({ cpf: 11895092612 });

        expect(await removeCpfUseCase.execute("11895092612")).toBeUndefined();
    });

    it("Should not be able to remove a cpf in the list with invalid numbers", async () => {
        await expect(
            removeCpfUseCase.execute("99999999")
        ).rejects.toEqual(new AppError("InvalidCpfException", "CPF not found!", 404));
    });
});