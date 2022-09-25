import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {
  getHelloWorld(): string {
    return 'Hello World!';
  }
}
