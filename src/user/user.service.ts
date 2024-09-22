import { Injectable } from '@nestjs/common';
import { updateUserDto, UserDto } from './dtos/user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    // Linh
    async getAll() {}
    
    // Linh
    async getById(id: string) {}
    
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
    async delete(id: string) {}
    
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
