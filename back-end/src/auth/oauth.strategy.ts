import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/services/user.service';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      // Put config in `.env`
      clientID:
        '',
      clientSecret: '',
      callbackURL: '',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {
    console.log(profile.id);
    const { name, emails } = profile;
    const user = {
      email: emails[0].value,
      password: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      accessToken,
      refreshToken,
    };

    done(null, user);
  }
}
