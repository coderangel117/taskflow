import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  bar() {
    return 'bar';
  }
}
