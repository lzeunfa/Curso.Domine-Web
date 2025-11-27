<?php 

    require_once "../vendor/autoload.php";

    $route = new \App\Route;
    echo 'Isso está funcionando';

    echo '<hr>';
    
    echo '<hr>';
    
    print_r($route->getRoutes());

?>