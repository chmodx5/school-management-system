<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class StudentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $studentPassExpiryDate = $faker->optional()->dateTimeBetween('now', '+3 years');
        $statusDate = $faker->optional()->dateTimeThisYear();

        for ($i = 0; $i < 100; $i++) {
            DB::table('students')->insert([
                'registration_no' => 'REG' . $faker->unique()->numerify('###'),
                'first_name' => $faker->firstName,
                'middle_name' => $faker->optional()->firstName,
                'surname' => $faker->lastName,
                'preferred_name' => $faker->optional()->firstName,
                'nationality' => $faker->country,
                'date_of_birth' => $faker->dateTimeBetween('-20 years', '-5 years')->format('Y-m-d'),
                'gender' => $faker->randomElement(['Male', 'Female']),
                'birth_certificate_no' => $faker->optional()->numerify('BC###'),
                'passport_no' => $faker->optional()->numerify('P###'),
                'passport_photo' => $faker->optional()->imageUrl(),
                'student_pass_number' => $faker->optional()->numerify('SP###'),
                'student_pass_expiry_date' => $studentPassExpiryDate ? $studentPassExpiryDate->format('Y-m-d') : null,
                'age_at_admission' => $faker->numberBetween(5, 18),
                'current_status' => $faker->randomElement(['Active', 'Inactive', 'Graduated']),
                'status_date' => ($statusDate = $faker->optional()->dateTimeThisYear()) ? $statusDate->format('Y-m-d') : null,
                'anticipated_year_level' => 'Year ' . $faker->numberBetween(1, 12),
                'proposed_entry_date' => $faker->dateTimeBetween('-1 years', 'now')->format('Y-m-d'),
                'actual_entry_date' => $faker->dateTimeBetween('-1 years', 'now')->format('Y-m-d'),

                // General information
                'special_things_about_child' => $faker->optional()->text,
                'child_medical_conditions' => $faker->optional()->text,
                'former_school' => $faker->optional()->company,
                'home_residents' => $faker->address,
                'primary_language_home' => $faker->languageCode,
                'has_other_children_enrolled' => $faker->boolean,
                'other_children_details' => $faker->optional()->text,
                'referred_by_family' => $faker->boolean,
                'referrer_details' => $faker->optional()->name,
                'employer_contribution' => $faker->boolean,
                'contribution_percentage' => $faker->optional()->numberBetween(10, 100),

                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
