<?php

use Illuminate\Database\Seeder;

class TruncateAll extends Seeder
{

    private function truncate($table = '') {
        DB::table($table)->truncate();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        $tables = array_map('reset', \DB::select('SHOW TABLES'));// Load all available tables
        foreach($tables as $table) {
            if ($table == 'migrations') // Skip migrations
                continue;
            $this->truncate($table);
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
