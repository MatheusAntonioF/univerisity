import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class createForeignkeyStudentsOfferedClass1595699144394
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'students',
      new TableColumn({
        name: 'classes',
        type: 'int',
      }),
    );

    await queryRunner.addColumn(
      'offeredClass',
      new TableColumn({ name: 'students', type: 'int' }),
    );

    await queryRunner.createForeignKey(
      'students',
      new TableForeignKey({
        columnNames: ['classes'],
        referencedColumnNames: ['id'],
        referencedTableName: 'offeredClass',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    return queryRunner.createForeignKey(
      'offeredClass',
      new TableForeignKey({
        columnNames: ['students'],
        referencedColumnNames: ['id'],
        referencedTableName: 'students',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('students', 'classes');
    return queryRunner.dropColumn('offeredClass', 'students');
  }
}
