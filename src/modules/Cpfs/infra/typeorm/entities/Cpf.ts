import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("riskFraudCpfs")
class Cpf {
    @PrimaryColumn()
    id: string;
    
    @Column()
    cpf: Number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
          this.id = uuidV4();
        };
    };
};

export { Cpf };