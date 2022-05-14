import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveCpfUseCase } from "./RemoveCpfUseCase";

class RemoveCpfController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { cpf } = request.params;

        const removeCpfUseCase = container.resolve(RemoveCpfUseCase);

        await removeCpfUseCase.execute(cpf);
        
        return response.send().status(200);
    }; 
};

export { RemoveCpfController };