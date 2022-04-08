import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const isUserAlreadyExists = this.usersRepository.findById(user_id);

    if (!isUserAlreadyExists) {
      throw new Error("User not found!");
    }

    return isUserAlreadyExists;
  }
}

export { ShowUserProfileUseCase };
