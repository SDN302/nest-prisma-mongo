import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { updateUserDto, UserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Linh
  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  // Vuong
  @Post()
  create(@Body() body: UserDto): Promise<User> {
    return this.userService.create(body);
  }

  // Linh
  @Get(':id')
  getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  // Vuong
  @Put(':id')
  update(@Param('id') id: string, @Body() body: updateUserDto): Promise<User> {
    return this.userService.update(id, body);
  }

  // Linh
  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
