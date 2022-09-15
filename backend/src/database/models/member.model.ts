import {
  AutoIncrement,
  Column,
  Model,
  NotNull,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Member extends Model {
  @PrimaryKey
  @AutoIncrement
  @NotNull
  @Column({ allowNull: false })
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
