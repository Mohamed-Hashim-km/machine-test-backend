import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuItem, MenuItemDocument } from './schema/menu-item';
import { CreateMenuItemDto } from './dto/create-menu-item-dto';
import { UpdateMenuItemDto } from './dto/update-menu-item-dto';


@Injectable()
export class MenuItemService {
  constructor(@InjectModel(MenuItem.name) private itemModel: Model<MenuItemDocument>) {}

  create(dto: CreateMenuItemDto) {
    return this.itemModel.create(dto);
  }

  findByMenu(menuId: string) {
    return this.itemModel.find({ menu: menuId });
  }

  update(id: string, dto: UpdateMenuItemDto) {
    return this.itemModel.findByIdAndUpdate(id, dto, { new: true });
  }

  delete(id: string) {
    return this.itemModel.findByIdAndDelete(id);
  }
}
