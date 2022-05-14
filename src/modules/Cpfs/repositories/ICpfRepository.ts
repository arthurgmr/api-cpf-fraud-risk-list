import { ICpfDTO } from "../dtos/ICpfDTO";
import { Cpf } from "../infra/typeorm/entities/Cpf";


interface ICpfRepository {
    registerCpf(data: ICpfDTO): Promise<Cpf>;
    checkCpf({ cpf }: ICpfDTO): Promise<Cpf>;
    deleteCpf({ cpf }: ICpfDTO): Promise<void>;
    findAll(): Promise<Cpf[]>;
}

export { ICpfRepository };