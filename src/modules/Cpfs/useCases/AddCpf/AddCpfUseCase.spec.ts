import { AppError } from "../../../../shared/errors/AppError";
import { CpfRepositoryInMemory } from "../../repositories/in-memory/CpfRepositoryInMemory";
import { AddCpfUseCase } from "./AddCpfUseCase";


let addCpfUseCase: AddCpfUseCase;
let cpfRepositoryInMemory: CpfRepositoryInMemory;

describe("Add a CPF to the fraud risk list", () => {
    beforeEach (() => {
        cpfRepositoryInMemory = new CpfRepositoryInMemory();
        addCpfUseCase = new AddCpfUseCase(cpfRepositoryInMemory);
    });

    it("Should be able to register a new cpf in the list", async () => {
        const cpf = {
            cpf: 11895092612,
        };
        const cpfAdded = await addCpfUseCase.execute(cpf);

        expect(cpfAdded).toHaveProperty("id");
    });

    it("Should not be able to register a new cpf in the list with invalid numbers", async () => {
        await expect(
            addCpfUseCase.execute({ cpf: 1111 })
        ).rejects.toEqual(new AppError("InvalidCpfException", "Cpf invalid!", 400));
    });

    it("Should not be able to register a new cpf that already exists in the list!", async () => {
        const cpf = {
            cpf: 44142056700
        }
        await addCpfUseCase.execute(cpf);

        await expect(
            addCpfUseCase.execute({ cpf: 44142056700 })
        ).rejects.toEqual(new AppError("InvalidCpfException", "Cpf already exists!", 400));
    });
});