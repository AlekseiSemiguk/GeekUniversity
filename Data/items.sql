INSERT INTO items (id,vendor_code,name,category_id,brand_id)
VALUES
  (1,'25614993-1','sit',8,2),
  (2,'26499921-9','ornare',8,6),
  (3,'8831223-6','mauris eu',11,3),
  (4,'44790746-1','facilisis',13,2),
  (5,'32909886-9','eu',17,4),
  (6,'10472248-2','vel,',17,2),
  (7,'22119763-1','imperdiet',13,6),
  (8,'30500416-2','Phasellus dolor',19,3),
  (9,'37297224-6','dui.',15,2),
  (10,'7162820-5','netus et',17,1),
  (11,'39116857-1','eget, dictum',14,5),
  (12,'2076391-4','luctus',9,1),
  (13,'48731308-4','nec',17,6),
  (14,'45476814-0','vitae dolor.',6,5),
  (15,'37835579-6','sed, facilisis',8,2),
  (16,'41886120-7','eu, ultrices',10,3),
  (17,'37806843-6','amet orci.',10,5),
  (18,'2037777-1','ut cursus',9,5),
  (19,'5574815-2','enim, sit',6,5),
  (20,'1771273-K','Curabitur consequat,',16,3),
  (21,'33304334-3','Nullam',14,4),
  (22,'43571575-3','pede.',19,2),
  (23,'6695733-0','pede.',10,3),
  (24,'42806537-9','diam nunc,',12,3),
  (25,'10679172-4','imperdiet',13,5),
  (26,'8798196-7','vestibulum',12,1),
  (27,'5236802-2','felis.',19,2),
  (28,'20155314-8','Fusce mi',17,2),
  (29,'50167778-7','augue.',14,2),
  (30,'6631511-8','Donec',19,4),
  (31,'18761788-K','nec',14,6),
  (32,'142194-8','vitae,',13,3),
  (33,'30975310-0','mauris',13,6),
  (34,'20707543-4','mattis. Cras',9,4),
  (35,'23646256-0','ullamcorper',14,4),
  (36,'3785812-9','ullamcorper',15,4),
  (37,'17109892-0','at',16,3),
  (38,'35170755-0','Quisque nonummy',13,2),
  (39,'1725146-5','nunc sed',13,1),
  (40,'6463318-K','velit',14,1),
  (41,'34647537-4','urna. Nunc',12,4),
  (42,'7314298-9','consectetuer adipiscing',10,5),
  (43,'7878159-9','sem',6,3),
  (44,'22609893-3','lectus pede,',17,3),
  (45,'39912715-7','consequat',20,5),
  (46,'2981731-6','Donec',6,3),
  (47,'772894-8','pharetra, felis',6,5),
  (48,'39116282-4','interdum.',16,1),
  (49,'38593674-5','dui.',8,4),
  (50,'36566490-0','dolor',14,2);
INSERT INTO items (id,vendor_code,name,category_id,brand_id)
VALUES
  (51,'48226699-1','egestas nunc',13,3),
  (52,'45716409-2','ac',8,4),
  (53,'5500777-2','congue',12,2),
  (54,'49109201-7','tincidunt nibh.',12,2),
  (55,'21969521-7','ante. Nunc',11,6),
  (56,'43334584-3','ac mattis',7,4),
  (57,'19723574-8','vulputate ullamcorper',8,2),
  (58,'16103811-3','a',12,5),
  (59,'1844766-5','vel,',17,3),
  (60,'38225188-1','Morbi sit',8,4),
  (61,'50991380-3','non',6,5),
  (62,'495041-0','pede',17,5),
  (63,'20600584-K','leo,',15,4),
  (64,'36171784-8','placerat eget,',18,4),
  (65,'33599991-6','auctor quis,',12,3),
  (66,'13425724-5','ut',8,5),
  (67,'43439972-6','Praesent interdum',6,3),
  (68,'2233413-1','metus.',12,2),
  (69,'40366135-K','sem,',18,2),
  (70,'28174722-3','vestibulum',7,2),
  (71,'38984624-4','vel, faucibus',11,6),
  (72,'26108365-5','mauris elit,',14,5),
  (73,'7625230-0','tristique',10,3),
  (74,'20886353-3','vestibulum',13,4),
  (75,'872972-7','arcu',13,6),
  (76,'46503879-9','Integer vitae',10,4),
  (77,'14991517-6','dui',16,5),
  (78,'26510409-6','cursus. Nunc',18,4),
  (79,'32180445-4','tellus',12,3),
  (80,'20490525-8','id, libero.',9,3),
  (81,'17249637-7','quam. Curabitur',14,1),
  (82,'1738117-2','Phasellus dolor',18,5),
  (83,'28483537-9','fringilla,',11,3),
  (84,'8322238-7','lectus convallis',15,2),
  (85,'1610862-6','sit amet',11,6),
  (86,'48956885-3','cursus in,',10,1),
  (87,'21357383-7','dui.',9,3),
  (88,'37543497-0','felis',7,1),
  (89,'34597222-6','nibh',14,3),
  (90,'6991654-6','non, dapibus',9,5),
  (91,'18859665-7','sociis',13,5),
  (92,'16849884-5','semper,',14,5),
  (93,'24206375-9','arcu',13,1),
  (94,'44509578-8','vitae dolor.',12,4),
  (95,'26283674-6','fermentum risus,',14,4),
  (96,'37667907-1','sed, est.',17,4),
  (97,'36876748-4','adipiscing non,',18,3),
  (98,'1396247-2','cursus',18,5),
  (99,'41930754-8','eget mollis',13,5),
  (100,'1454548-4','sodales.',6,2);

UPDATE items SET price = '92.42' WHERE id = 1;
UPDATE items SET price = '55.64' WHERE id = 2;
UPDATE items SET price = '6.17' WHERE id = 3;
UPDATE items SET price = '88.00' WHERE id = 4;
UPDATE items SET price = '79.41' WHERE id = 5;
UPDATE items SET price = '83.78' WHERE id = 6;
UPDATE items SET price = '13.42' WHERE id = 7;
UPDATE items SET price = '43.07' WHERE id = 8;
UPDATE items SET price = '56.28' WHERE id = 9;
UPDATE items SET price = '46.58' WHERE id = 10;
UPDATE items SET price = '93.62' WHERE id = 11;
UPDATE items SET price = '97.64' WHERE id = 12;
UPDATE items SET price = '61.90' WHERE id = 13;
UPDATE items SET price = '80.65' WHERE id = 14;
UPDATE items SET price = '16.63' WHERE id = 15;
UPDATE items SET price = '15.57' WHERE id = 16;
UPDATE items SET price = '7.37' WHERE id = 17;
UPDATE items SET price = '89.75' WHERE id = 18;
UPDATE items SET price = '91.65' WHERE id = 19;
UPDATE items SET price = '88.40' WHERE id = 20;
UPDATE items SET price = '52.88' WHERE id = 21;
UPDATE items SET price = '27.29' WHERE id = 22;
UPDATE items SET price = '57.56' WHERE id = 23;
UPDATE items SET price = '14.13' WHERE id = 24;
UPDATE items SET price = '46.68' WHERE id = 25;
UPDATE items SET price = '86.92' WHERE id = 26;
UPDATE items SET price = '66.91' WHERE id = 27;
UPDATE items SET price = '56.88' WHERE id = 28;
UPDATE items SET price = '22.56' WHERE id = 29;
UPDATE items SET price = '75.44' WHERE id = 30;
UPDATE items SET price = '6.47' WHERE id = 31;
UPDATE items SET price = '35.51' WHERE id = 32;
UPDATE items SET price = '59.04' WHERE id = 33;
UPDATE items SET price = '45.12' WHERE id = 34;
UPDATE items SET price = '86.34' WHERE id = 35;
UPDATE items SET price = '60.00' WHERE id = 36;
UPDATE items SET price = '12.20' WHERE id = 37;
UPDATE items SET price = '65.41' WHERE id = 38;
UPDATE items SET price = '39.00' WHERE id = 39;
UPDATE items SET price = '22.64' WHERE id = 40;
UPDATE items SET price = '81.90' WHERE id = 41;
UPDATE items SET price = '34.24' WHERE id = 42;
UPDATE items SET price = '12.06' WHERE id = 43;
UPDATE items SET price = '89.59' WHERE id = 44;
UPDATE items SET price = '77.59' WHERE id = 45;
UPDATE items SET price = '47.12' WHERE id = 46;
UPDATE items SET price = '39.49' WHERE id = 47;
UPDATE items SET price = '69.56' WHERE id = 48;
UPDATE items SET price = '69.50' WHERE id = 49;
UPDATE items SET price = '27.25' WHERE id = 50;
UPDATE items SET price = '43.31' WHERE id = 51;
UPDATE items SET price = '53.55' WHERE id = 52;
UPDATE items SET price = '9.13' WHERE id = 53;
UPDATE items SET price = '74.47' WHERE id = 54;
UPDATE items SET price = '89.23' WHERE id = 55;
UPDATE items SET price = '38.47' WHERE id = 56;
UPDATE items SET price = '59.26' WHERE id = 57;
UPDATE items SET price = '47.55' WHERE id = 58;
UPDATE items SET price = '27.78' WHERE id = 59;
UPDATE items SET price = '9.93' WHERE id = 60;
UPDATE items SET price = '99.30' WHERE id = 61;
UPDATE items SET price = '46.13' WHERE id = 62;
UPDATE items SET price = '45.31' WHERE id = 63;
UPDATE items SET price = '92.54' WHERE id = 64;
UPDATE items SET price = '73.57' WHERE id = 65;
UPDATE items SET price = '39.01' WHERE id = 66;
UPDATE items SET price = '98.86' WHERE id = 67;
UPDATE items SET price = '85.06' WHERE id = 68;
UPDATE items SET price = '39.80' WHERE id = 69;
UPDATE items SET price = '54.41' WHERE id = 70;
UPDATE items SET price = '56.69' WHERE id = 71;
UPDATE items SET price = '12.72' WHERE id = 72;
UPDATE items SET price = '38.01' WHERE id = 73;
UPDATE items SET price = '42.98' WHERE id = 74;
UPDATE items SET price = '34.87' WHERE id = 75;
UPDATE items SET price = '96.26' WHERE id = 76;
UPDATE items SET price = '82.84' WHERE id = 77;
UPDATE items SET price = '93.63' WHERE id = 78;
UPDATE items SET price = '57.15' WHERE id = 79;
UPDATE items SET price = '22.14' WHERE id = 80;
UPDATE items SET price = '73.21' WHERE id = 81;
UPDATE items SET price = '4.33' WHERE id = 82;
UPDATE items SET price = '29.82' WHERE id = 83;
UPDATE items SET price = '99.35' WHERE id = 84;
UPDATE items SET price = '23.17' WHERE id = 85;
UPDATE items SET price = '87.63' WHERE id = 86;
UPDATE items SET price = '81.96' WHERE id = 87;
UPDATE items SET price = '47.35' WHERE id = 88;
UPDATE items SET price = '9.85' WHERE id = 89;
UPDATE items SET price = '76.62' WHERE id = 90;
UPDATE items SET price = '24.15' WHERE id = 91;
UPDATE items SET price = '7.63' WHERE id = 92;
UPDATE items SET price = '96.29' WHERE id = 93;
UPDATE items SET price = '13.20' WHERE id = 94;
UPDATE items SET price = '80.48' WHERE id = 95;
UPDATE items SET price = '93.13' WHERE id = 96;
UPDATE items SET price = '17.70' WHERE id = 97;
UPDATE items SET price = '81.98' WHERE id = 98;
UPDATE items SET price = '48.82' WHERE id = 99;
UPDATE items SET price = '63.18' WHERE id = 100;

