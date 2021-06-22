import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTickets1624394472632 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'chamados',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'mecanismo',
            type: 'varchar',
          },
          {
            name: 'solicitante',
            type: 'varchar',
          },
          {
            name: 'categoria',
            type: 'varchar',
          },
          {
            name: 'subcategoria',
            type: 'varchar',
          },
          {
            name: 'data_abertura',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chamados');
  }
}
