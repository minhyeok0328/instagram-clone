import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Member extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  userId: string;

  @Column
  password: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  registerDate: Date;

  @Column
  loginDate: Date;
}
