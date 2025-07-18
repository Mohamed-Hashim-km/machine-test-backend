import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { MenuModule } from './menu/menu.module';
import { MenuItemModule } from './menu-item/menu-item.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://connecthashimkm:${process.env.MONGO_DB_PASS}@cluster0.nxnboye.mongodb.net/`,
      {
        dbName: 'mydatabase',
      },
    ),
    MenuModule,
    MenuItemModule

  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
