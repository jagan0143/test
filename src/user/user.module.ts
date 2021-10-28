import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAuthenticate } from './auth/user.authenticate';
import { UsersController } from './user.controller';
import { userSchema } from './user.model';
import { UsersService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: userSchema}]),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: { expiresIn: configService.get('JWT_TTL', '3600s') },
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [UsersController],
  providers: [UsersService, UserAuthenticate]
})
export class UsersModule {}
