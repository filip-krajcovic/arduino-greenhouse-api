import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WindowController } from './window.controller';
import { WindowService } from './window.service';
import { Window, WindowSchema } from '../schemas/window.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Window.name, schema: WindowSchema }]),
  ],
  controllers: [WindowController],
  providers: [WindowService],
  exports: [WindowService],
})
export class WindowModule {}
