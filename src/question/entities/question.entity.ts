import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  type: string;

  @UpdateDateColumn()
  updateDate: Date;

  @CreateDateColumn()
  createDate: Date;
}
