import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service'; 
import { updateUserDto, UserDto } from './dtos/user.dto';
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
    async update(id: string, body: updateUserDto) {
        const user = await this.prisma.user.update({
            where: {
                id: id,
            },
            data: {
                ...body,
            },
        });
        return user;
    }
    
    // Linh
    async delete(id: string): Promise<User> {
        return this.prisma.user.delete({
            where: { id }
        });
      }
    
    // Vuong
    async create(body: UserDto) {
        const user = await this.prisma.user.create({
            data: {
                ...body,
            },
        });
        return user;
    }
}
