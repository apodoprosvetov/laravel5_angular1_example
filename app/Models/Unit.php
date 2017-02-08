<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unit extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'rental_amount',
        'rental_type',
        'sqfeet',
        'bedrooms',
        'bathrooms',
        'unit_number'
    ];

    protected $table = 'unit';

    function property(){
        return $this->belongsTo('App\Models\Property');
    }
}
