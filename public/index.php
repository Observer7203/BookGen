<?php

use App\Kernel;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

// Обрабатываем API-запросы
$request = Request::createFromGlobals();
$path = $request->getPathInfo();

if (str_starts_with($path, '/api')) {
    return function (array $context) {
        return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
    };
}

// Обслуживаем React
$indexFile = __DIR__ . '/build/index.html';

if (file_exists($indexFile)) {
    readfile($indexFile);
    exit;
}

// Если React не собран — ошибка 500
header("HTTP/1.1 500 Internal Server Error");
echo "React build not found. Run 'npm run build' first.";
exit;
