<?php

namespace Sprint\Migration;


class create_table_comments20251108230232 extends Version
{
    protected $author = "admin";

    protected $description = "Создание таблицы комментариев";

    protected $moduleVersion = "5.5.2";

    public function up()
    {
        $helper = $this->getHelperManager();
        $tableName = 'my_comments_table';

        // Создаем таблицу через прямой SQL запрос
        $sql = "
            CREATE TABLE IF NOT EXISTS `{$tableName}` (
                `ID` INT NOT NULL AUTO_INCREMENT,
                `NAME` VARCHAR(255) NOT NULL,
                `DATE_CREATE` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (`ID`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci
        ";

        $helper->Sql()->query($sql);
        $this->outSuccess("Таблица {$tableName} создана успешно");
    }

    public function down()
    {
        $helper = $this->getHelperManager();
        $tableName = 'my_comments_table';

        $helper->Sql()->query("DROP TABLE IF EXISTS `{$tableName}`");
        $this->outSuccess("Таблица {$tableName} удалена");
    }
}
