import { ICpfDTO } from "../../dtos/ICpfDTO";
import { Cpf } from "../../infra/typeorm/entities/Cpf";
import { ICpfRepository } from "../ICpfRepository";


class CpfRepositoryInMemory implements ICpfRepository {

    riskFraudCpfs: Cpf[] = [];

    async registerCpf(data: ICpfDTO): Promise<Cpf> {
        const cpf = new Cpf();

        Object.assign(cpf, data);

        this.riskFraudCpfs.push(cpf);

        return cpf;
    }
    async checkCpf({ cpf }: ICpfDTO): Promise<Cpf> {
        return this.riskFraudCpfs.find((cpfChecked) => cpfChecked.cpf === cpf);
    }
    async deleteCpf({ cpf }: ICpfDTO): Promise<void> {
        const indexCpf = this.riskFraudCpfs.indexOf(this.riskFraudCpfs.find((cpfRegistered) => cpfRegistered.cpf === cpf));
        this.riskFraudCpfs.slice(indexCpf);
    }
    async findAll(): Promise<Cpf[]> {
        return this.riskFraudCpfs;
    };
};

export { CpfRepositoryInMemory };