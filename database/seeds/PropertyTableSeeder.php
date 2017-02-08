<?php

use Illuminate\Database\Seeder;

class PropertyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $properties = [
            [
                'name' => "Hill at Woodway",
                'description'  => "Welcome to Hill at Woodway, a beautiful place to live. Our property features lush landscaping in a quiet, peaceful environment. 
                                    You will enjoy the spacious apartments and wonderful neighbors. This gated community is professionally managed with excellent 
                                    management and maintenance staff. Call our leasing office today for more information on your new home at Hill at Woodway.
                                    Come check out our Fishing Special!!",
                'address1' => "10951 Laureate Dr.",
                'country' => "United States",
                'city' => "San Antonio",
                'state' => "Texas",
                'zipcode' => 78249,
                'units' => [
                    [
                        'rental_amount' => 749,
                        'rental_type' => 'month',
                        'sqfeet' => 781,
                        'bedrooms' => 1,
                        'bathrooms' => 1,
                        'unit_number' => '1510'
                    ],
                    [
                        'rental_amount' => 623,
                        'rental_type' => 'month',
                        'sqfeet' => 566,
                        'bedrooms' => 1,
                        'bathrooms' => 1,
                        'unit_number' => '1914'
                    ]
                ]
            ],
            [
                'name' => "Stratford Place",
                'description' => "A haven from the rush of daily living... Nestled between urban sophistication and suburban living, 
                                    Stratford Place provides a quality community that gives you a true sense of belonging, 
                                    with resort-style amenities and comfortable living spaces. The elegant architecture and beautiful landscaping 
                                    are designed for the comfort you need after a long day. 
                                    You will enjoy the convenience of Stratford Places' location. An abundance of shopping and dining options can be found just moments away.
                                    With quick access to both the expressways and the train, you can get downtown, to the airports, or anywhere else you need to go quickly and easily.",
                'address1' => "232 Butterfield Dr.",
                'country' => "United States",
                'city' => "Bloomingdale",
                'state' => "Illinois",
                'zipcode' => 60108,
                'units' => [
                    [
                        'rental_amount' => 1800,
                        'rental_type' => 'month',
                        'sqfeet' => 1230,
                        'bedrooms' => 2,
                        'bathrooms' => 2,
                        'unit_number' => '2202'
                    ],
                    [
                        'rental_amount' => 800,
                        'rental_type' => 'month',
                        'sqfeet' => 780,
                        'bedrooms' => 1,
                        'bathrooms' => 1,
                        'unit_number' => '456'
                    ],
                    [
                        'rental_amount' => 1650,
                        'rental_type' => 'month',
                        'sqfeet' => 1110,
                        'bedrooms' => 2,
                        'bathrooms' => 1,
                        'unit_number' => '2100'
                    ]
                ]
            ],
            [
                'name' => "Westchester Square",
                'description' => "We have exactly what you're looking for at Westchester Square Apartment Homes in Des Moines, Iowa! 
                                    Looking for easy access to Johnston schools? We are located in the Johnston School district! 
                                    Our spacious one and two bedroom apartment homes are perfect for spreading out and entertaining your best friends. 
                                    Our extremely close proximity to the shopping, entertainment and conveniences of Merle Hay puts 
                                    all of your desires right at your fingertips. Close enough to walk to Dahl's and more!",
                'country' => "United States",
                'city' => "Des Moines",
                'state' => "Iowa",
                'zipcode' => 50310,
                'units' => [
                    [
                        'rental_amount' => 750,
                        'rental_type' => 'month',
                        'sqfeet' => 560,
                        'bedrooms' => 1,
                        'bathrooms' => 1,
                        'unit_number' => '15'
                    ],
                    [
                        'rental_amount' => 1450,
                        'rental_type' => 'month',
                        'sqfeet' => 860,
                        'bedrooms' => 2,
                        'bathrooms' => 1,
                        'unit_number' => '19'
                    ],
                    [
                        'rental_amount' => 1650,
                        'rental_type' => 'month',
                        'sqfeet' => 980,
                        'bedrooms' => 2,
                        'bathrooms' => 2,
                        'unit_number' => '22'
                    ]
                ]

            ]
        ];

        foreach ($properties as $property){
            $units = $property['units'];
            unset($property['units']);
            $propertyId = DB::table('property')->insertGetId($property);
            foreach ($units as $unit){
                $unit['property_id'] = $propertyId;
                DB::table('unit')->insert($unit);
            }
        }
    }
}
