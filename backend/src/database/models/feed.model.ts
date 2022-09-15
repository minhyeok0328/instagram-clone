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
  @PrimaryKey
  @AutoIncrement
  @NotNull
  @Column({ allowNull: false })
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
  uploadImages: string;

  @Column
  email: string;

  @Column
  registerDate: Date;

  @Column
  updateDate: Date;

  @Column
  likeCount: number;
}
