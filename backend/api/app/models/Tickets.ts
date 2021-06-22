import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('chamados')
class Tickets {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  mecanismo: string;

  @Column()
  solicitante: string;

  @Column()
  categoria: string;

  @Column()
  subcategoria: string;

  @Column()
  data_abertura: Date;
}

export default Tickets;
