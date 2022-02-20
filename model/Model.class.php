<?php

abstract class Model {

    protected static $table;
    protected static $properties = [
        'id' => [
            'type' => 'int',
            'autoincrement' => true,
            'readonly' => true,
            'unsigned' => true
        ],
        'created_at' => [
            'type' => 'datetime',
            'readonly' => true,
        ],
        'updated_at' => [
            'type' => 'datetime',
            'readonly' => true,
        ],
        'status' => [
            'type' => 'int',
            'size' => 2,
            'unsigned' => true
        ]
    ];

    public function __construct(array $values)
    {
        static::setProperties();

        foreach ($values as $key => $value) {
            $this->$key = $value;
        }
    }

    /**
     * Вызывается в конструкторе и при генерации, чтобы дополнить базовый набор свойств
     */
    protected static function setProperties()
    {
        return true;
    }

    public final static function generate()
    {
        if (self::tableExists()) throw new Exception('Table already exists');
        static::setProperties();
        $query = 'CREATE TABLE ' . static::$table . ' (';
        foreach (static::$properties as $property => $params) {
            if (!isset($params['type'])) {
                throw new Exception('Property ' . $property . 'has no type');
            }
            $query .= ' `' . $property . '`';

            $query .= ' ' . $params['type'];
            if ( isset($params['size'])) {
                $query .= '(' .$params['size'] .')';
            }

            if( isset ($params['unsigned']) && $params['unsigned']) {
                $query .= ' UNSIGNED';
            }

            if( isset ($params['autoincrement']) && $params['autoincrement']) {
                $query .= ' AUTO_INCREMENT';
            }
            $query .= ',' . "\n";

        }
        $query .= ' PRIMARY KEY (`id`))';
        db::getInstance()->Query($query);
        return true;
    }

    protected final static function tableExists()
    {
        return count(db::getInstance()->select('SHOW TABLES LIKE "' . static::$table . '"')) > 0;
    }

    protected final function checkProperty($name)
    {
        if (!isset(static::$properties[$name])) {
            throw new Exception('Undefined property ' . $name);
        }
        if (!isset(static::$properties[$name]['type'])) {
            throw new Exception('Undefined type for property ' . $name);
        }
    }
}
?>