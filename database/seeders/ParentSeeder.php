<?php

namespace Database\Seeders;

use App\Models\Parents;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ParentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create an instance of Faker for generating random data
        $faker = Faker::create();

        // Create 10 parents with sample data
        foreach (range(1, 80) as $index) {
            Parents::create([
                'full_name' => $faker->name,
                'occupation' => $faker->jobTitle,
                'residential_address' => $faker->address,
                'contact_phone' => $faker->phoneNumber,
                'whatsapp_number' => $faker->phoneNumber,
                'email_address' => $faker->unique()->safeEmail,
                'preferred_contact' => $faker->randomElement(['Phone', 'Email', 'WhatsApp']),
            ]);
        }
    }
}
