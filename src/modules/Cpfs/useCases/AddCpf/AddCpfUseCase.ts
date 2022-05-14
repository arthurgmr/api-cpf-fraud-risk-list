import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICpfDTO } from "../../dtos/ICpfDTO";
import { Cpf } from "../../infra/typeorm/entities/Cpf";
import { ICpfRepository } from "../../repositories/ICpfRepository";
import { cpf } from "cpf-cnpj-validator";

@injectable()
class AddCpfUseCase {

    constructor(
        @inject("CpfRepository")
        private cpfRepository: ICpfRepository
    ) {};

    async execute(data: ICpfDTO): Promise<Cpf> {
        // check cpf template;
        if(!cpf.isValid(data.cpf.toString())) {
            throw new AppError("InvalidCpfException", "Cpf invalid!", 400)
        }
        // check if Cpf already exists;
        const cpfExists = await this.cpfRepository.checkCpf(data);
        if(cpfExists) {
            throw new AppError("InvalidCpfException", "Cpf already exists!", 400)
        }
        // create a Cpf;
        const cpfRegistered = await this.cpfRepository.registerCpf(data);
        return cpfRegistered;
    }
};

export { AddCpfUseCase };