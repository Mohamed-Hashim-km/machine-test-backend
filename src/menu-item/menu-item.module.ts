import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuItemService } from './menu-item.service';
import { MenuItemController } from './menu-item.controller';
import { MenuItem, MenuItemSchema } from './schema/menu-item';

@Module({
  imports: [MongooseModule.forFeature([{ name: MenuItem.name, schema: MenuItemSchema }])],
  providers: [MenuItemService],
  controllers: [MenuItemController],
})
export class MenuItemModule { }
