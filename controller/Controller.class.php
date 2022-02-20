<?php

class Controller
{
    public $view = 'admin';
    public $title;
    protected $onlyAdmin = false;

    function __construct()
    {
        $this->title = Config::get('sitename');
        if ($this->onlyAdmin && !\User::checkAdmin()) {
            header('Location: /public/index.php');
        }
    }

    public function index($data) {
        return [];
    }
}