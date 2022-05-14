import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICpfRepository } from "../../repositories/ICpfRepository";

@injectable()
class RemoveCpfUseCase {

    constructor (
        @inject("CpfRepository")
        private cpfRepository: ICpfRepository) 
    {};
    
    async execute(cpf: string): Promise<void> {
        //validation
        const cpfChecked = await this.cpfRepository.checkCpf({ cpf: parseInt(cpf) })
        if(!cpfChecked) {
            throw new AppError("InvalidCpfException", "CPF not found!", 404)
        };

        await this.cpfRepository.deleteCpf({ cpf: parseInt(cpf) });

        return;
    };
};

export { RemoveCpfUseCase };
