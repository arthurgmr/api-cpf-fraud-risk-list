import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllCpfUseCase } from "./FindAllCpfUseCase";

class FindAllCpfController {
    async handle(request: Request, response: Response): Promise<Response> {
        const findAllCpfUseCase = container.resolve(FindAllCpfUseCase);

        const allCpf = await findAllCpfUseCase.execute();
        
        return response.send(allCpf).status(200);
    }; 
};

export { FindAllCpfController };