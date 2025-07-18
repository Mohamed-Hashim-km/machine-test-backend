import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu-dto';
import { UpdateMenuDto } from './dto/update-menu-dto';


@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() dto: CreateMenuDto) {
    return this.menuService.create(dto);
  }

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get('/with-items')
  findAllWithItems() {
    return this.menuService.findAllWithItems();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMenuDto) {
    return this.menuService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.menuService.delete(id);
  }
}