import { getRepository, Repository } from "typeorm";
import { ICpfDTO } from "../../dtos/ICpfDTO";
import { ICpfRepository } from "../../repositories/ICpfRepository";
import { Cpf } from "../typeorm/entities/Cpf";


class CpfRepository implements ICpfRepository {
    private repository: Repository<Cpf>;

    constructor() {
        this.repository = getRepository(Cpf);
    }

    async registerCpf(data: ICpfDTO): Promise<Cpf> {
        const cpfRegistered = this.repository.create(data);
        await this.repository.save(cpfRegistered);
        return cpfRegistered;
    }
    async checkCpf({ cpf }: ICpfDTO): Promise<Cpf> {
        const checkCpf = await this.repository.findOne({ where: { cpf } });
        return checkCpf;
    }
    async deleteCpf({ cpf }: ICpfDTO): Promise<void> {
        await this.repository.createQueryBuilder().delete().from(Cpf).where("cpf = :cpf", { cpf }).execute();
    }
    async findAll(): Promise<Cpf[]> {
        return await this.repository.find();
    }
};

export { CpfRepository };