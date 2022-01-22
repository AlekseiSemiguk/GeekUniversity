<?php

class Product
{
    protected $title;
    protected $price;
    protected $barcode;

    function __construct($title,$price)
    {
        $this->title = $title;
        $this->price = $price;
        $this->barcode = $this->generateBarcode();
    }
    
    function getTitle()
    {
        return $this->title;
    }

    function getPrice()
    {
        return $this->price;
    }

    function generateBarcode()
    {
        return rand(10000,99999);
    }
}