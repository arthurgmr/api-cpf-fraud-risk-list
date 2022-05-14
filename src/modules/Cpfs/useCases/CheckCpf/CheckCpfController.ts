import { Request, Response } from "express";
import { container } from "tsyringe";
import { CheckCpfUseCase } from "./CheckCpfUseCase";

class CheckCpfController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { cpf } = request.params;

        const checkCpfUseCase = container.resolve(CheckCpfUseCase);

        const cpfChecked = await checkCpfUseCase.execute(cpf);
        
        return response.send(cpfChecked).status(200);
    }; 
};

export { CheckCpfController };