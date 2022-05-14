import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Cpf } from "../../infra/typeorm/entities/Cpf";
import { ICpfRepository } from "../../repositories/ICpfRepository";

@injectable()
class CheckCpfUseCase {

    constructor (
        @inject("CpfRepository")
        private cpfRepository: ICpfRepository) 
    {};
    
    async execute(cpf: string): Promise<Cpf> {
        
        const cpfChecked = await this.cpfRepository.checkCpf({ cpf: parseInt(cpf) })
        //validation
        if(!cpfChecked) {
            throw new AppError("InvalidCpfException", "CPF not found!", 404)
        };

        return cpfChecked;
    };
};

export { CheckCpfUseCase };
