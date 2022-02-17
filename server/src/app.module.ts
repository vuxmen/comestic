import {TypeOrmModule} from '@nestjs/typeorm';
import {Module} from '@nestjs/common'
import {ConfigModule, ConfigService} from 'nestjs-config'
import {AppService} from './app.service'
import {AppController} from './app.controller'
import {ProductsModule} from './products/products.module'
import * as  path from 'path'

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService]
    }),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {}
