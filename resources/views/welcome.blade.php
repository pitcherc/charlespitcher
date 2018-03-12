<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
</head>
<body class="bg-brand-lightest font-sans font-normal">
    <div id="app" class="flex flex-col">

        <app>
            <h1 slot="title" class="text-grey-darker text-center font-hairline tracking-wide text-5xl mb-6">
                {{ config('app.name', 'Laravel') }}
            </h1>
        </app>

    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
