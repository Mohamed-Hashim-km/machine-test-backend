import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { CreateMenuItemDto } from './dto/create-menu-item-dto';
import { UpdateMenuItemDto } from './dto/update-menu-item-dto';


@Controller('menu-item')
export class MenuItemController {
  constructor(private readonly itemService: MenuItemService) {}

  @Post()
  create(@Body() dto: CreateMenuItemDto) {
    return this.itemService.create(dto);
  }

  @Get('/menu/:menuId')
  findByMenu(@Param('menuId') menuId: string) {
    return this.itemService.findByMenu(menuId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMenuItemDto) {
    return this.itemService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.itemService.delete(id);
  }
}