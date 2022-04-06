<?php

namespace Service\Cache;

class SerializeCache
{
    private $cacheTime;
    private $cachePath;

    public function __construct($cacheName, $cachePath = "cache", $cacheTime = 3600)
    {
        $this->cacheTime = $cacheTime;
        $cachePath = $_SERVER['DOCUMENT_ROOT']."/".$cachePath."/";
        if (!file_exists($cachePath)){
            mkdir($cachePath);
        }
        $this->cachePath = $cachePath.$cacheName.".php";
    }

    public function getCache() 
    {

        if (file_exists($this->cachePath)) {
            $fileContent = file_get_contents($this->cachePath);
        }

        if ($fileContent) {
            $cacheArray = unserialize($fileContent);
        }

        if (($cacheArray['createTime'] + $this->cacheTime) < time()) {
            return $cacheArray['content'];
        }

        return false;
    }

    public function setCache($content)
    {
        $cacheArray['createTime'] = time();
        $cacheArray['content'] = $content;
        file_put_contents($this->cachePath, serialize($cacheArray));
    }

}
