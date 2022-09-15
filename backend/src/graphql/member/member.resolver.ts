import { Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { Inject } from '@nestjs/common';

@Resolver()
export class MemberResolver {
  @Inject()
  private readonly memberService: MemberService;

  @Query((_) => String)
  hello(): string {
    return this.memberService.getHelloWorld();
  }
}
