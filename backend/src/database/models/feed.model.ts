import {
  AutoIncrement,
  Column,
  Model,
  NotNull,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Feed extends Model {
  @Column
  @PrimaryKey
  @AutoIncrement
  @NotNull
  id: number;

  @Column
  userId: number;

  @Column
  userName: string;

  @Column
  title: string;

  @Column
  content: string;

  @Column
  uploadImages: JSON;

  @Column
  email: string;

  @Column
  registerDate: Date;

  @Column
  updateDate: Date;

  @Column
  like: number;
}
