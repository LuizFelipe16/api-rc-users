import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    const user_id = String(id);

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(user);

    } catch (err) {

      return response.status(404).json({
        error: "error message!"
      });
    }
  }
}

export { TurnUserAdminController };
