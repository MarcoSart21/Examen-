import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PaginaController } from './pagina/pagina.controller';

@Module({
  imports: [],
  controllers: [PaginaController],
  providers: [AppService],
})
export class AppModule {}
