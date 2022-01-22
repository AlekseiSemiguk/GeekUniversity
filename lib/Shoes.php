<?php
include "Product.php";
class Shoes extends Product{
    private $gender;
    private $color;
    private $season;
    
    public function __construct($title, $price, $gender, $color, $season)
    {
        parent::__construct($title, $price);
        $this->gender = $gender;
        $this->color = $color;
        $this->season = $season;
    }
}