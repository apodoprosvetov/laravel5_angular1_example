<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Property;

use App\Http\Requests;

class PropertyController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        //$this->middleware('');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $properties = Property::all();
        return response()->json($properties);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        $property = Property::with('units')->find($id);
        if ($property){
            return response()->json($property);
        }else{
            return \App::abort(404);
        }
    }


}
