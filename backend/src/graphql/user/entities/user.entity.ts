import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int, { description: '회원 고유 번호' })
  @PrimaryGeneratedColumn()
  index: number;

  @Field(() => String, { description: '회원 아이디(이메일)' })
  @Column({ length: 50 })
  userId: string;

  @Field(() => String, { description: '비밀번호' })
  @Column({ length: 255 })
  password: string;

  @Field(() => String, { description: '회원 이름' })
  @Column({ length: 50 })
  userName: string;

  @Field(() => String, { description: '인스타 아이디' })
  @Column({ length: 30 })
  userAccountId: string;

  @Field(() => String, { description: '휴대폰 번호' })
  @Column({ length: 30 })
  phoneNumber: string;

  @Field(() => String, { description: '프로필 사진' })
  @Column({ length: 255 })
  profileImage: string;

  @Field(() => Date, { description: '회원가입 날짜' })
  @CreateDateColumn()
  registerDate: string;

  @Field(() => Date, { description: '마지막 로그인 날짜' })
  @CreateDateColumn()
  loginDate: string;
}
