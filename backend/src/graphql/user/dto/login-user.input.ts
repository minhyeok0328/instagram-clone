import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class LoginUserInput {
  @Field(() => String, { description: '회원 아이디(이메일)' })
  @IsNotEmpty({ message: '아이디를 입력해 주세요.' })
  @IsEmail({}, { message: '이메일 주소 양식이 올바르지 않습니다.' })
  @Length(5, 50, { message: '이메일 주소 길이가 올바르지 않습니다.' })
  userId: string;

  @Field(() => String, { description: '회원 비밀번호' })
  @IsNotEmpty({ message: '비밀번호를 입력해 주세요.' })
  password: string;
}
