-- у свойства типа числовой диапазон минимальное значение не должно быть больше максимального
CREATE OR REPLACE FUNCTION check_range_value_property_trigger() 
RETURNS TRIGGER AS 
$$
BEGIN
  IF NEW.min_value > NEW.max_value THEN
    RAISE EXCEPTION 'Max value must be greater than the min value';
  END IF;
  RETURN NEW;
END
$$ 
LANGUAGE PLPGSQL;

CREATE TRIGGER check_range_value_property BEFORE INSERT OR UPDATE ON property_range_values 
  FOR EACH ROW 
  EXECUTE FUNCTION check_range_value_property_trigger();