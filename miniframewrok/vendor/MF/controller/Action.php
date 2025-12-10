<?php 

    namespace MF\Controller;

    abstract Class Action{
        protected $view;

        public function __construct(){
            $this->view = new \stdClass();
        }

        protected function render($view, $classAtual){
            require_once "../App/Views/".$classAtual."/".$view.".phtml";
        }
    }

    

?>