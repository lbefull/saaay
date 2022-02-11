import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entity/role.entity';
import { User } from 'src/entity/user.entity';
import { UserDto } from 'src/models/user.dto';
import { UserRepository } from 'src/repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { Record, Result } from 'neo4j-driver';
@Injectable()
export class UserService {
  private saltRounds = 10;

  public async signinUser(userDto: UserDto): Promise<UserDto> {
    const foundUser = await this.userRepository.findByEmail(userDto.email);

    const password = foundUser.password;
    const hash = await bcrypt.hash(password, this.saltRounds);

    const isMatch = await bcrypt.compare(password, hash);
    foundUser.password = undefined;
    return foundUser;
  }
  private readonly userRepository: UserRepository = new UserRepository();

  public async findUserByUsername(userName: string): Promise<Result> {
    try {
      const userDto = await this.userRepository.findByUsername(userName);
      return userDto;
    } catch (err) {
      throw err;
    }
  }

  public async createUser(userDto: UserDto): Promise<UserDto> {
    const password = userDto.password;
    const hash = await bcrypt.hash(password, this.saltRounds);
    userDto.password = hash;
    const result = await this.userRepository.createUser(userDto);
    result.password = undefined;
    return result;
  }
}
