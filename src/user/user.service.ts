import { Injectable } from '@nestjs/common';
import { updateUserDto, UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
    // Linh
    async getAll() {}
    
    // Linh
    async getById(id: string) {}
    
    // Vuong
    async update(id: string, body: updateUserDto) {}
    
    // Linh
    async delete(id: string) {}
    
    // Vuong
    async create(body: UserDto) {}
}
