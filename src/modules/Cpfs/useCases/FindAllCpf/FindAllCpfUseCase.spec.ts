import { Cpf } from "../../infra/typeorm/entities/Cpf";
import { CpfRepositoryInMemory } from "../../repositories/in-memory/CpfRepositoryInMemory";
import { FindAllCpfUseCase } from "./FindAllCpfUseCase";


let findAllCpfUseCase: FindAllCpfUseCase;
let cpfRepositoryInMemory: CpfRepositoryInMemory;

describe("Check all CPF to the fraud risk list", () => {
    beforeEach (() => {
        cpfRepositoryInMemory = new CpfRepositoryInMemory();
        findAllCpfUseCase = new FindAllCpfUseCase(cpfRepositoryInMemory);
    });

    it("Should be able to check ala cpfs in the list", async () => {

        const fraudRiskList = [
            {
                cpf: 38273896668
            },
            {
                cpf: 11895092612
            },
            {
                cpf:44142056700
            }
        ];

        fraudRiskList.forEach(async (cpf) => await cpfRepositoryInMemory.registerCpf({cpf: 11895092612}));        

        const findAllCpfs = await findAllCpfUseCase.execute();

        expect(findAllCpfs.length).toEqual(fraudRiskList.length);
    });
});