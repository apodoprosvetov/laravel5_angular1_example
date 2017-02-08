<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Property extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'address1',
        'address2',
        'country',
        'city',
        'state',
        'zipcode'
    ];

    protected $table = 'property';

    public function units(){
        return $this->hasMany('App\Models\Unit');
    }
}
