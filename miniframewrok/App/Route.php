<?php 

    namespace App;

    class Route{

        public function initRoutes(){
            $routes['home'] = [
                'route' => '/', 'controller' => 'index_controller', 'action' => 'index'
            ];

            $routes['sobre_nos'] = [
                'route' => '/sobre_nos', 'controller' => 'index_controller', 'action' => 'sobreNos'
            ];
        }

        public function getUrl(){
            return parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        }

    }

?>