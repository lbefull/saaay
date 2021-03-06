import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

// Class 이름 = 테이블 이름
@Entity()
export class Oauth {
  @PrimaryGeneratedColumn() // PK, Auto Increment
  id: number;

  @Column()
  userId: string;

  @Column()
  version: string;

  @Column()
  accessToken: string;

  @Column()
  provider: string;

  // 일대일 단방향 매핑 (user <-> oauth), oauth 쪽에만 데이터
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
