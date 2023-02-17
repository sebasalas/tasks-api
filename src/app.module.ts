import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sebas',
      password: 'sebas123',
      database: 'my_db',
      entities: [Task],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
