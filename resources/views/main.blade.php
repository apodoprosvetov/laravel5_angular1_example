<!DOCTYPE html>
<html ng-app="app.main">
<head>
    <title>Laravel5 -  Angular v1 Example</title>
    <link href="{{ elixir('css/common.css') }}" rel="stylesheet">
    <link href="{{ elixir('css/styles.css') }}" rel="stylesheet">
    <script src="{{ elixir('js/common.js') }}" type="text/javascript"></script>
    <script src="{{ elixir('js/app/angular-main-app.js') }}" type="text/javascript"></script>

    <style>
        html, body {
            height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            width: 100%;
            display: table;
            font-weight: 100;
            font-family: 'Lato';
        }

        .container {
            display: table-cell;
            vertical-align: middle;
        }

        .content {
            display: inline-block;
        }

        .title {
            font-size: 96px;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="container" style="margin-top: 50px">
        <div class="row">
            <div class="col-xs-12" ui-view></div>
        </div>
    </div>
</div>
</body>
</html>
