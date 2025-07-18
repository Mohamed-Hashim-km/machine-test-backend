import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from './schema/menu-schema';
import { CreateMenuDto } from './dto/create-menu-dto';
import { UpdateMenuDto } from './dto/update-menu-dto';


@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

  create(dto: CreateMenuDto) {
    return this.menuModel.create(dto);
  }

  findAll() {
    return this.menuModel.find();
  }

  findAllWithItems() {
    return this.menuModel.aggregate([
      {
        $lookup: {
          from: 'menuitems',
          localField: '_id',
          foreignField: 'menu',
          as: 'items',
        },
      },
    ]);
  }

  update(id: string, dto: UpdateMenuDto) {
    return this.menuModel.findByIdAndUpdate(id, dto, { new: true });
  }

  delete(id: string) {
    return this.menuModel.findByIdAndDelete(id);
  }
}