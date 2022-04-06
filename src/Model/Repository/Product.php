<?php

declare(strict_types = 1);

namespace Model\Repository;

use Model\Entity;
use Service\Cache;

class Product
{
    /**
     * Поиск продуктов по массиву id
     *
     * @param int[] $ids
     * @return Entity\Product[]
     */
    public function search(array $ids = []): array
    {
        if (!count($ids)) {
            return [];
        }

        $cache = new Cache\SerializeCache(md5(__FUNCTION__.serialize($ids)), __CLASS__);
        
        if (!$productList = $cache->getCache()) {
            $productList = [];
            foreach ($this->getDataFromSource(['id' => $ids]) as $item) {
                $productList[] = new Entity\Product($item['id'], $item['name'], $item['price']);
            }
            $cache->setCache($productList);
        }

        return $productList;
    }

    /**
     * Получаем все продукты
     *
     * @return Entity\Product[]
     */
    public function fetchAll(): array
    {
        $cache = new Cache\SerializeCache(md5(__FUNCTION__), __CLASS__);

        if (!$productList = $cache->getCache()) {
            $productList = [];
            foreach ($this->getDataFromSource() as $item) {
                $productList[] = new Entity\Product($item['id'], $item['name'], $item['price']);
            }
            $cache->setCache($productList);
        }

        return $productList;
    }

    /**
     * Получаем продукты из источника данных
     *
     * @param array $search
     *
     * @return array
     */
    private function getDataFromSource(array $search = [])
    {

        $cache = new Cache\SerializeCache(md5(__FUNCTION__.serialize($search)), __CLASS__);

        if (!$data = $cache->getCache()) {

            $dataSource = [
                [
                    'id' => 1,
                    'name' => 'PHP',
                    'price' => 15300,
                ],
                [
                    'id' => 2,
                    'name' => 'Python',
                    'price' => 20400,
                ],
                [
                    'id' => 3,
                    'name' => 'C#',
                    'price' => 30100,
                ],
                [
                    'id' => 4,
                    'name' => 'Java',
                    'price' => 30600,
                ],
                [
                    'id' => 5,
                    'name' => 'Ruby',
                    'price' => 18600,
                ],
                [
                    'id' => 8,
                    'name' => 'Delphi',
                    'price' => 8400,
                ],
                [
                    'id' => 9,
                    'name' => 'C++',
                    'price' => 19300,
                ],
                [
                    'id' => 10,
                    'name' => 'C',
                    'price' => 12800,
                ],
                [
                    'id' => 11,
                    'name' => 'Lua',
                    'price' => 5000,
                ],
            ];

            if (!count($search)) {
                $data = $dataSource;
            } else {

                $productFilter = function (array $dataSource) use ($search): bool {
                    return in_array($dataSource[key($search)], current($search), true);
                };

                $data = array_filter($dataSource, $productFilter);
            }
            $cache->setCache($data);
        }

        return $data;
    }
}
