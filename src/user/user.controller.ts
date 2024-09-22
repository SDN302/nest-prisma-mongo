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

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Vuong
  @Post()
  create(@Body() body: UserDto): Promise<User> {}

  // Linh
  @Get()
  getAll() {}

  // Linh
  @Get(':id')
  getById(@Param('id') id: string): Promise<User> {}

  // Vuong
  @Put(':id')
  update(@Param('id') id: string, @Body() body: updateUserDto): Promise<User> {}

  // Linh
  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {}
}
