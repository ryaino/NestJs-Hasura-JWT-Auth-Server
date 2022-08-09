import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdEB0ZXN0LmNvbSIsInN1YiI6MSwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOjEsIngtaGFzdXJhLW9yZy1pZCI6IjEyMyIsIngtaGFzdXJhLWN1c3RvbSI6ImN1c3RvbS12YWx1ZSIsIngtaGFzdXJhLXJvbGUiOiJhbm9ueW1vdXMifSwiaWF0IjoxNjYwMDY3MTM4LCJleHAiOjE2NjAwNjcxOTh9.Gf5DKl57w17LRbTbqtx1rn_H3c5qDP2UYN3o22aD9MY',
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
