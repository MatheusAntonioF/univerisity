import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  Table,
} from 'typeorm';

export class createForeignkeyStudentsOfferedClass1595699144394
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students_offeredClass',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isNullable: false,
          },
          {
            name: 'student_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'offeredClass_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestampz',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestampz',
            default: 'now()',
            isNullable: false,
          },
        ],
      }),
    );

    const studentForeignKey = new TableForeignKey({
      columnNames: ['student_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'students',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    const offeredClassForeignKey = new TableForeignKey({
      columnNames: ['offeredClass_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'offeredClass',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    return queryRunner.createForeignKeys('students_offeredClass', [
      studentForeignKey,
      offeredClassForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('students_offeredClass');
  }
}
