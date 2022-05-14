import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Cpf } from "../../infra/typeorm/entities/Cpf";
import { ICpfRepository } from "../../repositories/ICpfRepository";

@injectable()
class FindAllCpfUseCase {

    constructor (
        @inject("CpfRepository")
        private cpfRepository: ICpfRepository) 
    {};
    
    async execute(): Promise<Cpf[]> {
        
        const allCpf = await this.cpfRepository.findAll();

        return allCpf;
    };
};

export { FindAllCpfUseCase };
