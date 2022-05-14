import { AppError } from "../../../../shared/errors/AppError";
import { CpfRepositoryInMemory } from "../../repositories/in-memory/CpfRepositoryInMemory";
import { CheckCpfUseCase } from "./CheckCpfUseCase";


let checkCpfUseCase: CheckCpfUseCase;
let cpfRepositoryInMemory: CpfRepositoryInMemory;

describe("Check a CPF to the fraud risk list", () => {
    beforeEach (() => {
        cpfRepositoryInMemory = new CpfRepositoryInMemory();
        checkCpfUseCase = new CheckCpfUseCase(cpfRepositoryInMemory);
    });

    it("Should be able to check a cpf in the list", async () => {
        await cpfRepositoryInMemory.registerCpf({cpf: 11895092612});

        const cpfAdded = await checkCpfUseCase.execute("11895092612");

        expect(cpfAdded).toHaveProperty("id");
    });

    it("Should not be able to check a cpf in the list with invalid numbers", async () => {
        await expect(
            checkCpfUseCase.execute("99999999")
        ).rejects.toEqual(new AppError("InvalidCpfException", "CPF not found!", 404));
    });
});