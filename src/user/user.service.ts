import { Injectable } from '@nestjs/common';
// import { updateUserDto, UserDto } from './dtos/user.dto';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service'; 


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
    // Linh
    async getAll(): Promise<User[]> {
        return this.prisma.user.findMany(); // Fetch all users
      }
    
    // Linh
    async getById(id: string): Promise<User> {
        return this.prisma.user.findUnique({
            where: { id },
        });
      }
    
    // Vuong
    // async update(id: string, body: updateUserDto) {}
    
    // Linh
    async delete(id: string): Promise<User> {
        return this.prisma.user.delete({
            where: { id }
        });
      }
    
    // Vuong
    // async create(body: UserDto) {}
}
