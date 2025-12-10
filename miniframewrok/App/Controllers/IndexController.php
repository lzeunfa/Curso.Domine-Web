<?php 

    namespace App\Controllers;

    use MF\Controller\Action;

    class IndexController extends Action{

        public function index(){
            $this->view->dados = ['Notebook', 'Computador'];
            $this->render('index', 'index');
        }

        public function sobreNos(){
            $this->view->dados = ['Sofá', 'Cadeira'];
            $this->render('sobreNos','index');
        }

    }

?>