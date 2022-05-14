import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddCpfUseCase } from "./AddCpfUseCase";

class AddCpfController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { cpf  } = request.body;

        const addCpfUseCase = container.resolve(AddCpfUseCase);

        const registeredCpf = await addCpfUseCase.execute({ cpf });

        return response.status(201).send(registeredCpf);
    }
};
    
export { AddCpfController };
    