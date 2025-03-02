<?php

namespace App\Controller;

use Faker\Factory;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class BookController
{
    #[Route('/api/books', name: 'get_books', methods: ['GET'])]
    public function getBooks(Request $request): JsonResponse
    {
        $seed = $request->query->getInt('seed', 42);
        $language = $request->query->get('lang', 'en_US');
        $likes = floatval($request->query->get('likes', 5.0));
        $reviews = floatval($request->query->get('reviews', 5.0));
        $count = intval($request->query->get('count', 20));

        $faker = Factory::create($language);
        $faker->seed($seed);

        $books = [];

        for ($i = 1; $i <= $count; $i++) {
            $books[] = [
                'index' => $i,
                'isbn' => $faker->isbn13(),
                'title' => $faker->sentence(3),
                'authors' => $faker->name(),
                'publisher' => $faker->company(),
                'likes' => $this->fractionalCount($likes),
                'reviews' => $this->fractionalCount($reviews),
            ];
        }

        return new JsonResponse($books);
    }

    private function fractionalCount(float $value): int
    {
        return floor($value) + (mt_rand(0, 100) < ($value - floor($value)) * 100 ? 1 : 0);
    }
}
