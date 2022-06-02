--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-1.pgdg16.04+1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-1.pgdg16.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: property_type; Type: TYPE; Schema: public; Owner: gb_user
--

CREATE TYPE public.property_type AS ENUM (
    'string',
    'numeric',
    'range'
);


ALTER TYPE public.property_type OWNER TO gb_user;

--
-- Name: check_range_value_property_trigger(); Type: FUNCTION; Schema: public; Owner: gb_user
--

CREATE FUNCTION public.check_range_value_property_trigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  IF NEW.min_value > NEW.max_value THEN
    RAISE EXCEPTION ' Max value must be greater than the min value';
  END IF;
  RETURN NEW;
END
$$;


ALTER FUNCTION public.check_range_value_property_trigger() OWNER TO gb_user;

--
-- Name: top_item_in_user_orders(integer); Type: FUNCTION; Schema: public; Owner: gb_user
--

CREATE FUNCTION public.top_item_in_user_orders(user_id integer) RETURNS integer
    LANGUAGE sql
    AS $$
  SELECT 
	items.id
	FROM orders
		JOIN order_items
			ON orders.id = order_items.order_id
		JOIN items
			ON order_items.item_id = items.id
	WHERE orders.user_id = 50
	ORDER BY quantity DESC
	LIMIT 1; 
$$;


ALTER FUNCTION public.top_item_in_user_orders(user_id integer) OWNER TO gb_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brands; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.brands OWNER TO gb_user;

--
-- Name: brands_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brands_id_seq OWNER TO gb_user;

--
-- Name: brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(50),
    parent_category_id integer
);


ALTER TABLE public.categories OWNER TO gb_user;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO gb_user;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: categories_properties; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.categories_properties (
    category_id integer NOT NULL,
    property_id integer NOT NULL
);


ALTER TABLE public.categories_properties OWNER TO gb_user;

--
-- Name: items; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.items (
    id integer NOT NULL,
    vendor_code character varying(15),
    name character varying(50),
    category_id integer,
    brand_id integer,
    price real
);


ALTER TABLE public.items OWNER TO gb_user;

--
-- Name: order_items; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.order_items (
    id integer NOT NULL,
    order_id integer NOT NULL,
    item_id integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.order_items OWNER TO gb_user;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    status_id integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone
);


ALTER TABLE public.orders OWNER TO gb_user;

--
-- Name: items_bought_last_month; Type: VIEW; Schema: public; Owner: gb_user
--

CREATE VIEW public.items_bought_last_month AS
 SELECT items.id,
    items.name
   FROM ((public.orders
     JOIN public.order_items ON ((orders.id = order_items.order_id)))
     JOIN public.items ON ((order_items.item_id = items.id)))
  WHERE (orders.created_at > (CURRENT_TIMESTAMP - '1 mon'::interval));


ALTER TABLE public.items_bought_last_month OWNER TO gb_user;

--
-- Name: profiles; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.profiles (
    user_id integer NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    patronymic_name character varying(50),
    city character varying(50),
    address character varying(150),
    created_at timestamp without time zone
);


ALTER TABLE public.profiles OWNER TO gb_user;

--
-- Name: users; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(120) NOT NULL,
    phone character varying(15)
);


ALTER TABLE public.users OWNER TO gb_user;

--
-- Name: items_bought_users_after_register; Type: VIEW; Schema: public; Owner: gb_user
--

CREATE VIEW public.items_bought_users_after_register AS
 SELECT items.id AS item_id,
    items.name,
    users.id AS user_id
   FROM ((((public.orders
     JOIN public.order_items ON ((orders.id = order_items.order_id)))
     JOIN public.items ON ((order_items.item_id = items.id)))
     JOIN public.users ON ((orders.user_id = users.id)))
     JOIN public.profiles ON ((profiles.user_id = users.id)))
  WHERE (orders.created_at < (profiles.created_at + '100 days'::interval));


ALTER TABLE public.items_bought_users_after_register OWNER TO gb_user;

--
-- Name: items_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.items_id_seq OWNER TO gb_user;

--
-- Name: items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.items_id_seq OWNED BY public.items.id;


--
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.order_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_items_id_seq OWNER TO gb_user;

--
-- Name: order_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.order_items_id_seq OWNED BY public.order_items.id;


--
-- Name: order_statuses; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.order_statuses (
    id integer NOT NULL,
    name character varying(30)
);


ALTER TABLE public.order_statuses OWNER TO gb_user;

--
-- Name: order_statuses_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.order_statuses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_statuses_id_seq OWNER TO gb_user;

--
-- Name: order_statuses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.order_statuses_id_seq OWNED BY public.order_statuses.id;


--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO gb_user;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: properties; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.properties (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    property_type public.property_type,
    is_use_in_filter boolean
);


ALTER TABLE public.properties OWNER TO gb_user;

--
-- Name: properties_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.properties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.properties_id_seq OWNER TO gb_user;

--
-- Name: properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.properties_id_seq OWNED BY public.properties.id;


--
-- Name: property_numeric_values; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.property_numeric_values (
    id integer NOT NULL,
    item_id integer NOT NULL,
    property_id integer NOT NULL,
    value integer NOT NULL
);


ALTER TABLE public.property_numeric_values OWNER TO gb_user;

--
-- Name: property_numeric_values_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.property_numeric_values_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.property_numeric_values_id_seq OWNER TO gb_user;

--
-- Name: property_numeric_values_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.property_numeric_values_id_seq OWNED BY public.property_numeric_values.id;


--
-- Name: property_range_values; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.property_range_values (
    id integer NOT NULL,
    item_id integer NOT NULL,
    property_id integer NOT NULL,
    min_value integer,
    max_value integer
);


ALTER TABLE public.property_range_values OWNER TO gb_user;

--
-- Name: property_range_values_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.property_range_values_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.property_range_values_id_seq OWNER TO gb_user;

--
-- Name: property_range_values_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.property_range_values_id_seq OWNED BY public.property_range_values.id;


--
-- Name: property_string_values; Type: TABLE; Schema: public; Owner: gb_user
--

CREATE TABLE public.property_string_values (
    id integer NOT NULL,
    item_id integer NOT NULL,
    property_id integer NOT NULL,
    value character varying(50) NOT NULL
);


ALTER TABLE public.property_string_values OWNER TO gb_user;

--
-- Name: property_string_values_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.property_string_values_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.property_string_values_id_seq OWNER TO gb_user;

--
-- Name: property_string_values_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.property_string_values_id_seq OWNED BY public.property_string_values.id;


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: gb_user
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO gb_user;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gb_user
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: brands id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: items id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.items ALTER COLUMN id SET DEFAULT nextval('public.items_id_seq'::regclass);


--
-- Name: order_items id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.order_items ALTER COLUMN id SET DEFAULT nextval('public.order_items_id_seq'::regclass);


--
-- Name: order_statuses id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.order_statuses ALTER COLUMN id SET DEFAULT nextval('public.order_statuses_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: properties id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.properties ALTER COLUMN id SET DEFAULT nextval('public.properties_id_seq'::regclass);


--
-- Name: property_numeric_values id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_numeric_values ALTER COLUMN id SET DEFAULT nextval('public.property_numeric_values_id_seq'::regclass);


--
-- Name: property_range_values id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_range_values ALTER COLUMN id SET DEFAULT nextval('public.property_range_values_id_seq'::regclass);


--
-- Name: property_string_values id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_string_values ALTER COLUMN id SET DEFAULT nextval('public.property_string_values_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.brands (id, name) FROM stdin;
1	Sed
2	elit
3	nunc
4	Duis
5	amet
6	Donec
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.categories (id, name, parent_category_id) FROM stdin;
1	facilisis eget,	\N
2	feugiat placerat	\N
3	ante dictum	\N
4	tellus. Phasellus	\N
5	non nisi.	\N
6	lorem ac	2
7	iaculis odio.	5
8	eget odio.	1
9	porta elit,	2
10	Integer urna.	5
11	sem egestas	1
12	pede et	1
13	est ac	3
14	sed, hendrerit	2
15	dolor egestas	4
16	lorem tristique	2
17	Nullam scelerisque	3
18	Suspendisse aliquet,	2
19	Nunc mauris	3
20	ornare, lectus	2
\.


--
-- Data for Name: categories_properties; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.categories_properties (category_id, property_id) FROM stdin;
9	8
19	14
14	14
6	9
19	12
10	7
11	9
16	11
10	8
8	13
9	11
15	2
19	2
19	13
9	13
6	4
15	12
16	8
8	7
11	11
6	5
16	9
7	8
14	6
10	14
6	8
15	5
16	3
16	4
7	10
11	6
19	15
19	9
10	13
18	8
18	14
11	1
19	5
19	7
11	13
\.


--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.items (id, vendor_code, name, category_id, brand_id, price) FROM stdin;
13	48731308-4	nec	17	6	61.9
14	45476814-0	vitae dolor.	6	5	80.65
15	37835579-6	sed, facilisis	8	2	16.63
1	25614993-1	sit	8	2	92.42
2	26499921-9	ornare	8	6	55.64
3	8831223-6	mauris eu	11	3	6.17
4	44790746-1	facilisis	13	2	88
5	32909886-9	eu	17	4	79.41
6	10472248-2	vel,	17	2	83.78
7	22119763-1	imperdiet	13	6	13.42
8	30500416-2	Phasellus dolor	19	3	43.07
9	37297224-6	dui.	15	2	56.28
10	7162820-5	netus et	17	1	46.58
11	39116857-1	eget, dictum	14	5	93.62
12	2076391-4	luctus	9	1	97.64
16	41886120-7	eu, ultrices	10	3	15.57
17	37806843-6	amet orci.	10	5	7.37
18	2037777-1	ut cursus	9	5	89.75
19	5574815-2	enim, sit	6	5	91.65
20	1771273-K	Curabitur consequat,	16	3	88.4
21	33304334-3	Nullam	14	4	52.88
22	43571575-3	pede	19	2	27.29
23	6695733-0	ped	10	3	57.56
24	42806537-9	diam nunc,	12	3	14.13
25	10679172-4	imperdet	13	5	46.68
26	8798196-7	vestibulum	12	1	86.92
27	5236802-2	felis.	19	2	66.91
28	20155314-8	Fusce mi	17	2	56.88
29	50167778-7	augue.	14	2	22.56
30	6631511-8	Donec	19	4	75.44
31	18761788-K	nc	14	6	6.47
32	142194-8	vitae,	13	3	35.51
33	30975310-0	mauris	13	6	59.04
34	20707543-4	mattis. Cras	9	4	45.12
35	23646256-0	ullamcorer	14	4	86.34
36	3785812-9	ullamcorper	15	4	60
37	17109892-0	at	16	3	12.2
38	35170755-0	Quisque nonummy	13	2	65.41
39	1725146-5	nunc sed	13	1	39
40	6463318-K	velit	14	1	22.64
41	34647537-4	urna. Nunc	12	4	81.9
42	7314298-9	consectetuer adipiscing	10	5	34.24
43	7878159-9	sem	6	3	12.06
44	22609893-3	lectus pede,	17	3	89.59
45	39912715-7	consequat	20	5	77.59
46	2981731-6	Doec	6	3	47.12
47	772894-8	pharetra, felis	6	5	39.49
48	39116282-4	interdum.	16	1	69.56
49	38593674-5	du	8	4	69.5
50	36566490-0	dolor	14	2	27.25
51	48226699-1	egestas nunc	13	3	43.31
52	45716409-2	ac	8	4	53.55
53	5500777-2	congue	12	2	9.13
54	49109201-7	tincidunt nibh.	12	2	74.47
55	21969521-7	ante. Nunc	11	6	89.23
56	43334584-3	ac mattis	7	4	38.47
57	19723574-8	vulputate ullamcorper	8	2	59.26
58	16103811-3	a	12	5	47.55
59	1844766-5	ve	17	3	27.78
60	38225188-1	Morbi sit	8	4	9.93
61	50991380-3	non	6	5	99.3
62	495041-0	pde	17	5	46.13
63	20600584-K	leo,	15	4	45.31
64	36171784-8	placerat eget,	18	4	92.54
65	33599991-6	auctor quis,	12	3	73.57
66	13425724-5	ut	8	5	39.01
67	43439972-6	Praesent interdum	6	3	98.86
68	2233413-1	metus.	12	2	85.06
69	40366135-K	sem,	18	2	39.8
70	28174722-3	vesibulum	7	2	54.41
71	38984624-4	vel, faucibus	11	6	56.69
72	26108365-5	mauris elit,	14	5	12.72
73	7625230-0	tristique	10	3	38.01
74	20886353-3	vestiblum	13	4	42.98
75	872972-7	arcu	13	6	34.87
76	46503879-9	Integer vitae	10	4	96.26
77	14991517-6	dui	16	5	82.84
78	26510409-6	cursus. Nunc	18	4	93.63
79	32180445-4	tellus	12	3	57.15
80	20490525-8	id, libero.	9	3	22.14
81	17249637-7	quam. Curabitur	14	1	73.21
82	1738117-2	Phasellus olor	18	5	4.33
83	28483537-9	fringilla,	11	3	29.82
84	8322238-7	lectus convallis	15	2	99.35
85	1610862-6	sit amet	11	6	23.17
86	48956885-3	cursus in,	10	1	87.63
87	21357383-7	dju	9	3	81.96
88	37543497-0	felis	7	1	47.35
89	34597222-6	nibh	14	3	9.85
90	6991654-6	non, dapibus	9	5	76.62
91	18859665-7	sociis	13	5	24.15
92	16849884-5	semper,	14	5	7.63
93	24206375-9	aru	13	1	96.29
94	44509578-8	vitae dol	12	4	13.2
95	26283674-6	fermentum risus,	14	4	80.48
96	37667907-1	sed, est.	17	4	93.13
97	36876748-4	adipiscing non,	18	3	17.7
98	1396247-2	cursus	18	5	81.98
99	41930754-8	eget mollis	13	5	48.82
100	1454548-4	sodales.	6	2	63.18
\.


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.order_items (id, order_id, item_id, quantity) FROM stdin;
1	69	59	5
2	54	59	4
3	69	30	4
4	65	52	2
5	30	14	4
6	86	75	1
7	47	38	2
8	91	96	2
9	34	24	2
10	84	63	2
11	87	11	4
12	62	76	4
13	73	16	2
14	32	32	3
15	57	99	4
16	46	50	1
17	9	71	3
18	40	88	2
19	14	40	3
20	33	84	4
21	76	90	4
22	95	65	4
23	2	48	1
24	54	99	1
25	68	93	4
26	64	77	5
27	66	20	2
28	39	26	3
29	62	4	4
30	42	53	5
31	68	25	2
32	45	39	1
33	31	30	3
34	76	78	4
35	31	74	4
36	40	94	3
37	34	69	4
38	89	84	3
39	93	12	5
40	61	89	1
41	42	15	2
42	88	22	4
43	7	61	4
44	40	43	2
45	72	14	2
46	95	81	4
47	69	40	4
48	62	41	4
49	99	95	2
50	9	51	1
51	90	12	4
52	59	16	1
53	36	27	5
54	39	79	2
55	84	75	2
56	78	64	3
57	25	36	3
58	92	20	2
59	80	20	3
60	62	30	4
61	39	79	3
62	53	5	2
63	37	61	2
64	59	83	5
65	57	76	1
66	69	98	5
67	71	56	2
68	61	17	4
69	28	87	3
70	72	14	3
71	46	16	3
72	54	49	2
73	6	80	3
74	100	72	2
75	74	42	2
76	51	30	2
77	81	87	4
78	16	11	2
79	78	58	4
80	1	32	1
81	78	49	1
82	94	41	2
83	25	64	4
84	99	30	1
85	49	27	1
86	44	75	3
87	59	6	4
88	21	61	2
89	90	86	4
90	95	21	1
91	41	32	4
92	90	32	4
93	35	43	4
94	98	57	4
95	36	70	5
96	37	6	2
97	20	33	4
98	16	66	3
99	88	29	3
100	49	92	3
101	45	69	4
102	72	59	3
103	26	19	3
104	75	96	2
105	59	24	5
106	34	13	5
107	88	71	2
108	86	49	2
109	40	62	2
110	63	24	1
111	31	64	3
112	42	65	3
113	86	41	2
114	8	59	1
115	3	47	1
116	66	80	4
117	11	78	3
118	43	13	1
119	20	41	4
120	11	30	4
121	34	46	2
122	4	47	4
123	22	28	2
124	78	48	4
125	67	84	4
126	89	25	5
127	100	84	3
128	55	84	2
129	52	21	3
130	43	17	3
131	25	21	5
132	98	66	3
133	73	38	3
134	32	63	4
135	34	76	3
136	98	60	4
137	61	89	2
138	83	49	1
139	46	93	2
140	4	83	3
141	25	50	5
142	54	90	1
143	69	29	4
144	35	91	3
145	44	59	5
146	8	79	3
147	97	64	4
148	40	11	2
149	94	24	1
150	94	65	4
151	51	20	5
152	97	16	4
153	24	34	4
154	82	55	2
155	90	94	3
156	33	69	5
157	64	44	3
158	34	14	4
159	5	42	2
160	57	6	3
161	22	27	4
162	66	94	2
163	31	15	2
164	17	41	1
165	6	21	1
166	50	49	2
167	26	52	4
168	31	80	4
169	37	49	3
170	82	25	1
171	82	49	3
172	28	7	2
173	19	65	5
174	44	55	2
175	78	98	4
176	14	64	4
177	65	81	3
178	38	64	3
179	58	73	3
180	21	88	5
181	6	23	5
182	63	40	2
183	85	85	3
184	44	83	4
185	74	36	2
186	81	22	3
187	4	93	3
188	42	36	1
189	47	10	2
190	40	1	4
191	27	86	5
192	19	86	3
193	16	28	4
194	77	27	3
195	23	94	1
196	78	55	2
197	11	94	5
198	56	7	4
199	14	35	4
200	77	69	5
201	25	61	2
202	80	9	2
203	67	57	3
204	18	11	2
205	86	70	4
206	23	37	3
207	87	33	3
208	98	5	2
209	9	85	2
210	82	21	3
211	37	28	4
212	68	35	3
213	32	73	2
214	87	53	1
215	36	8	3
216	64	55	5
217	51	33	3
218	52	72	2
219	3	93	2
220	72	93	2
221	66	29	5
222	10	89	2
223	75	47	3
224	33	38	5
225	7	96	1
226	14	75	4
227	67	14	4
228	78	1	2
229	26	31	5
230	57	13	1
231	94	71	4
232	99	75	3
233	31	73	3
234	52	9	4
235	59	38	4
236	70	19	3
237	89	73	2
238	48	87	2
239	7	47	5
240	58	15	1
241	51	13	1
242	20	57	1
243	73	78	2
244	92	42	3
245	5	34	4
246	76	78	4
247	47	30	3
248	10	47	4
249	24	96	3
250	35	55	2
251	40	94	3
252	44	41	2
253	18	24	4
254	67	46	1
255	67	11	1
256	41	13	3
257	55	2	1
258	49	91	1
259	22	6	5
260	22	10	2
261	56	80	2
262	60	95	5
263	59	24	3
264	71	68	3
265	53	38	2
266	78	6	3
267	81	67	3
268	24	94	2
269	91	52	3
270	39	75	4
271	12	72	1
272	40	56	4
273	46	45	1
274	4	53	5
275	57	13	2
276	13	3	3
277	89	43	5
278	11	72	2
279	86	37	3
280	20	2	1
281	38	88	3
282	10	33	1
283	13	6	3
284	53	99	4
285	66	85	3
286	56	25	4
287	74	48	3
288	90	58	2
289	65	13	2
290	71	51	3
291	54	27	2
292	97	66	4
293	78	25	3
294	66	1	3
295	10	27	4
296	8	87	3
297	30	87	1
298	23	7	4
299	48	91	4
300	47	63	4
\.


--
-- Data for Name: order_statuses; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.order_statuses (id, name) FROM stdin;
1	sagittis
2	justo
3	scelerisque
4	vitae
5	sit
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.orders (id, status_id, user_id, created_at) FROM stdin;
1	4	19	2023-01-17 22:02:04
2	3	73	2023-04-27 23:04:25
3	3	83	2021-08-25 11:03:47
4	2	50	2022-05-21 15:06:55
5	1	94	2022-11-02 00:03:24
6	1	27	2022-09-29 14:04:51
7	1	45	2021-07-27 10:02:54
8	5	62	2022-12-22 15:04:54
9	2	60	2022-08-01 09:01:12
10	2	44	2022-01-15 06:06:21
11	2	51	2023-01-25 11:03:02
12	2	45	2022-12-30 00:05:53
13	3	20	2021-11-29 01:01:03
14	1	18	2022-09-10 14:06:11
15	5	3	2021-08-31 05:02:26
16	4	35	2022-02-17 17:04:38
17	2	74	2022-01-10 22:01:26
18	1	19	2023-01-14 05:06:11
19	2	88	2022-09-20 22:02:57
20	4	40	2022-07-27 21:03:18
21	4	57	2021-12-13 23:01:56
22	4	17	2021-11-04 17:04:02
23	1	81	2022-11-05 11:06:52
24	4	4	2023-05-15 04:01:48
25	4	4	2021-06-15 22:02:41
26	2	37	2022-02-09 17:03:20
27	3	47	2023-02-01 02:03:51
28	3	41	2021-11-28 10:07:50
29	5	52	2023-03-14 05:02:27
30	2	33	2023-04-01 15:06:34
31	4	87	2021-08-31 03:02:34
32	3	85	2022-03-21 11:01:20
33	3	90	2022-03-26 23:06:52
34	5	52	2023-03-16 09:04:26
35	5	77	2022-09-19 15:01:04
36	3	71	2021-06-04 17:05:13
37	2	59	2021-06-10 16:04:15
38	4	85	2022-02-28 00:01:11
39	3	48	2022-05-29 14:07:40
40	2	36	2022-11-30 17:03:27
41	2	98	2022-06-11 21:06:34
42	2	65	2022-10-09 18:07:53
43	3	89	2023-03-05 12:07:51
44	3	25	2021-10-20 11:03:32
45	2	91	2022-07-22 21:05:33
46	4	61	2022-11-08 15:02:28
47	4	15	2021-12-26 18:07:35
48	5	75	2023-01-25 03:03:44
49	4	84	2021-12-11 10:06:35
50	4	34	2022-05-12 08:04:05
51	3	77	2022-08-21 17:07:58
52	4	28	2023-04-23 09:07:44
53	3	50	2022-07-12 10:02:25
54	1	40	2022-10-15 11:06:37
55	4	62	2022-09-25 08:07:44
56	2	93	2021-08-19 14:04:34
57	2	79	2022-07-12 13:02:29
58	3	89	2022-11-20 14:07:14
59	2	57	2022-06-20 04:01:57
60	1	93	2022-12-13 15:02:11
61	4	37	2021-11-25 00:04:47
62	4	71	2021-09-11 12:06:11
63	2	36	2021-12-02 11:04:03
64	3	50	2022-06-30 11:04:11
65	2	55	2021-07-22 22:04:08
66	4	36	2022-10-01 21:06:30
67	4	55	2022-09-28 15:03:37
68	1	74	2023-04-15 00:06:55
69	3	8	2023-05-10 15:03:55
70	2	43	2022-10-12 18:03:37
71	1	15	2022-06-12 00:07:19
72	3	43	2021-06-18 18:05:56
73	2	97	2021-08-27 18:05:06
74	1	81	2021-06-18 20:05:44
75	4	77	2022-05-30 00:01:00
76	2	97	2023-03-16 23:04:28
77	2	44	2022-03-24 22:04:04
78	2	5	2022-01-29 16:06:05
79	3	11	2021-09-15 09:03:03
80	1	94	2022-02-03 09:04:36
81	3	56	2021-07-24 10:06:16
82	2	47	2022-05-02 20:01:56
83	5	46	2022-08-12 06:05:34
84	2	47	2023-05-22 05:01:40
85	2	47	2021-12-02 04:04:36
86	4	56	2022-04-26 11:02:02
87	3	83	2023-03-02 01:04:02
88	2	48	2022-05-18 12:03:11
89	3	9	2022-08-26 04:05:58
90	4	29	2022-11-05 05:06:16
91	4	10	2022-12-25 11:07:36
92	4	17	2021-07-27 04:02:52
93	5	53	2022-05-27 01:05:33
94	2	65	2022-04-04 17:01:52
95	1	92	2023-01-14 12:06:22
96	4	14	2023-04-29 22:06:47
97	2	7	2022-08-17 16:03:53
98	1	66	2021-11-09 21:02:13
99	3	78	2022-10-09 02:07:54
100	3	87	2022-05-17 18:02:15
\.


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.profiles (user_id, first_name, last_name, patronymic_name, city, address, created_at) FROM stdin;
1	Nathan	Aguilar	Atkinson	İzmit	Ap #628-8282 Varius Road	2021-01-15 01:05:24
2	Hanna	Valenzuela	Knight	Anglet	8162 Vitae St.	2021-05-23 06:07:22
3	Hoyt	Small	Nixon	Rockingham	972-4429 Hendrerit. Avenue	2021-03-26 23:05:14
4	Leila	Burris	Myers	Aschaffenburg	469-502 Egestas. Avenue	2020-12-20 17:07:14
5	Raya	Kelley	Barr	Cao Lãnh	P.O. Box 999, 462 Hendrerit Street	2021-05-20 07:04:16
6	Erasmus	Greer	Mendez	Upplands Väsby	8047 Luctus Street	2021-03-04 06:04:05
7	Steel	Randolph	Hamilton	Cork	803-5337 Purus, Rd.	2021-02-27 12:06:12
8	Elijah	Moran	Ayala	Canino	3942 Et Avenue	2021-05-20 18:04:30
9	Malik	Cardenas	Ayers	Tanjung Pinang	Ap #613-3963 Tellus Street	2021-04-04 16:07:51
10	Hayes	Ortiz	Dotson	Mexico City	P.O. Box 270, 2837 Non Road	2021-01-18 08:01:32
11	Clark	Randall	Gillespie	Falkirk	3149 Mollis. Street	2021-05-05 01:03:22
12	Raymond	Richard	Horton	Fort McPherson	101-8968 Id Road	2021-03-05 22:05:48
13	Zelenia	Warner	Baldwin	Dieppe	Ap #727-3976 Ipsum St.	2021-05-30 22:07:53
14	Rebecca	Jenkins	Lambert	Castanhal	911-122 Eget Rd.	2021-04-14 20:03:22
15	Chastity	Greer	Emerson	Shaheed Benazirabad	Ap #980-3724 In Av.	2021-02-08 13:01:35
16	Sigourney	Wilkerson	Levy	Manokwari	977-5691 Massa Rd.	2021-01-29 10:05:23
17	Blythe	Houston	Velasquez	Oberwart	615-3754 Suspendisse St2021-04-20 10:02:57
18	Ursula	Carr	Strong	Inner Mongolia	Ap #296-2792 Eget, St.	2021-04-09 10:05:46
19	Yasir	Turner	Merritt	Jurong East	P.O. Box 233, 4955 Suspendisse Ave	2021-02-03 19:03:07
20	Tatum	Hernandez	Sears	Maringá	5635 Facilisis, Rd.	2021-01-17 10:07:59
21	Ila	Meyers	Bender	Haveli	Ap #629-9829 Tempor Ave	2021-03-14 04:07:51
22	Fulton	Roberson	Fuller	Baton Rouge	8784 Urna Avenue	2020-12-15 09:02:40
23	Noble	Burnett	Sullivan	Sambalpur	195-2363 Pharetra Avenu2021-03-12 22:05:01
24	Bevis	Delaney	Wilkerson	Levanger	Ap #356-1008 Donec Ave	2021-02-10 12:03:11
25	Ivor	Mccarty	Greene	Dornoch	557-2780 Arcu Ave	2021-01-20 16:03:26
26	Lucy	Mercado	Brady	Chimbote	Ap #749-4589 Fringilla Ave	2021-04-03 04:06:49
27	Trevor	Sharp	Ellis	Navojoa	853-6919 Auctor Ave	2021-04-18 17:07:45
28	Geraldine	Britt	Gomez	Missoula	P.O. Box 600, 6541 Sapien St.	2021-01-03 19:07:10
29	Ora	Williams	Olson	Przemyśl	P.O. Box 783, 6628 Risus. Rd.	2021-03-20 03:06:41
30	Danielle	Lowery	Trujillo	Akşehir	192-1560 Aptent Street	2021-04-05 16:01:31
31	Dalton	Bonner	Keith	Guadalupe	Ap #365-978 In Street	2020-12-20 15:07:43
32	Quentin	Gonzalez	Taylor	Daman	597-4591 Sodales Road	2021-01-30 01:06:39
33	Penelope	Gallegos	Barker	Chihuahua	Ap #972-5766 Erat, St.	2021-01-16 14:06:10
34	Veronica	Gamble	Cabrera	Newcastle	Ap #608-6069 At Rd.	2020-12-07 23:01:42
35	Jolie	Solomon	Wyatt	Emalahleni	537-8377 Ut Street	2021-02-04 01:04:07
36	Valentine	Weaver	Ayers	Schwechat	Ap #485-1747 Eu Rd.	2021-04-06 21:02:48
37	Ethan	Luna	Kirkland	Moscow	P.O. Box 302, 8060 Magnis Rd.	2021-05-10 05:01:18
38	Leigh	George	Kramer	Woodlands	P.O. Box 360, 6145 Purus. Av.	2021-04-27 11:02:36
39	Levi	Copeland	Pace	Abingdon	Ap #571-6932 Ac Ave	2021-03-04 21:04:01
40	Xander	Castro	Randall	Toowoomba	3705 Ac Av.	2021-05-12 01:03:33
41	Tanek	Guthrie	Russo	Kohlu	405-353 Fringilla Rd.	2021-04-04 19:07:46
42	Hammett	Kaufman	Reilly	Värnamo	Ap #807-100 Nec, Street	2021-03-11 16:04:55
43	Hayden	Allen	Madden	Mannheim	Ap #239-319 Mauris Rd.	2021-01-11 13:01:26
44	Adrian	Bentley	Riggs	Caxias	Ap #360-3005 Vel Rd.	2021-02-12 13:05:00
45	Kelsey	Duncan	Salinas	Drammen	P.O. Box 431, 829 Egestas St.	2021-01-14 07:04:29
46	Deacon	Tanner	Henderson	Castel Maggiore	Ap #621-8646 Tempor Rd.2021-02-11 13:04:23
47	Hector	Mcguire	Beard	Galway	Ap #412-8954 Dui, Av.	2021-04-17 21:06:33
48	Evelyn	Smith	Cleveland	Ulloa (Barrial]	131-6634 Ac Av.	2021-01-08 04:05:16
49	Oren	Barker	Terry	Siheung	P.O. Box 588, 7884 Ac Av.	2021-04-21 04:03:58
50	Declan	Long	Woodard	Melilla	3383 Eget Rd.	2021-01-12 16:02:27
51	Summer	Wooten	Huber	Bridgeport	2501 Sed St.	2021-02-01 01:01:26
52	Eaton	Parks	Le	Belfast	1389 Non Ave	2021-01-19 06:02:47
53	Violet	Rice	Fischer	Cabildo	118-5979 Ac Rd.	2020-12-17 20:04:04
54	Hop	Suarez	Sanford	Jecheon	873-2482 Pede. Rd.	2021-04-16 23:05:07
55	Alfonso	Roy	Salas	Crotta dAdda	Ap #876-1531 Felis. St.	2021-04-20 11:02:44
56	Francis	Larsen	Chang	Canning	Ap #731-8312 Aliquam Rd.	2021-05-13 06:04:19
57	Heidi	Mcleod	Flynn	Gaziantep	925-8236 Lorem Rd.	2021-04-23 06:05:34
58	Odessa	Dillon	Weeks	Mamuju	P.O. Box 392, 904 Ut Av.	2021-03-07 14:07:00
59	Madonna	Long	Norris	Kakisa	694-5472 Fringilla St.	2021-04-15 20:04:39
60	Dillon	Hoffman	Blankenship	Massimino	340-1305 Fermentum Ave	2021-03-02 14:02:37
61	Nichole	York	Bean	Luhansk	P.O. Box 269, 3745 Ligula. Avenue	2021-02-26 02:05:21
62	Lee	Dennis	Hunter	Garzón	Ap #229-2830 Cras Avenue	2020-12-03 00:04:03
63	Dean	Livingston	Martin	Pangkalpinang	640-5981 Rutrum. Avenue2021-01-13 21:03:47
64	Dalton	Walter	Garrett	Bressoux	398 Duis Avenue	2021-04-19 06:01:19
65	Julian	Sweet	Ochoa	Parchim\tCity	Ap #982-5668 Enim Avenue	2021-03-29 16:01:49
66	Lavinia	Dominguez	Greene	Canberra	Ap #762-2264 Fringilla Avenue	2020-12-13 22:07:44
67	Ria	Davenport	Hobbs	Balanga	3177 At, Avenue	2021-04-25 23:07:46
68	Jamal	Alvarez	Hewitt	Primavera	341-8655 In Rd.	2021-05-30 11:07:35
69	Gemma	Reese	Mccullough	Limoges	Ap #212-6345 Mauris Av.	2021-04-21 02:03:18
70	Xantha	Russell	Snyder	Katsina	328-2745 Cras Road	2021-05-20 23:04:12
71	Kermit	Glenn	Padilla	Mohmand Agency	P.O. Box 126, 4785 Facilisis. Rd.	2021-03-11 01:04:43
72	Lance	Leach	Travis	Whitehorse	P.O. Box 565, 9277 Dui Road	2021-03-22 09:01:23
73	Yasir	Ward	Ellison	Hattem	453-2155 Nullam Ave	2021-01-27 19:03:13
74	Kaye	Riley	Patrick	Sokoto	Ap #683-5019 Nec, St.	2021-02-25 18:04:24
75	Barbara	Duncan	Miles	Woodlands	P.O. Box 511, 5931 Cursus Rd.	2021-05-07 05:05:47
76	Carissa	Barnett	Weaver	Almelo	P.O. Box 826, 1342 Justo. Rd.	2020-12-27 22:07:49
77	Anjolie	Hubbard	Casey	Spijkenisse	5742 Risus. Rd.	2021-01-07 00:04:26
78	Kitra	Langley	Diaz	Inner Mongolia	4371 Molestie Avenue	2021-05-05 02:03:00
79	Steel	Fry	Webb	Maiduguri	168-7084 Et St.	2021-04-15 20:04:12
80	Katell	Winters	Lester	Nelson	767-4635 Lorem Ave	2021-05-12 15:03:35
81	Sawyer	Stanton	Bruce	Jaboatão dos Guararapes	Ap #814-4004 Cras Av.	2021-01-27 00:03:35
82	Lawrence	Mccormick	Mendoza	Khyber Agency	P.O. Box 248, 4232 At, Ave	2021-01-13 09:03:31
83	Doris	Kirk	Pratt	Kano	Ap #861-2514 Donec Road	2021-01-19 13:02:53
84	Claudia	Farley	Kirk	Ang Mo Kio	468-9495 Est Road	2021-02-06 07:06:25
85	Chanda	Rivers	Boyer	Calbayog	374-7465 Cursus Ave	2021-03-22 00:01:39
86	Nathan	Kidd	Tate	Jagersfontein	852-9162 Mattis Road	2021-03-07 04:07:37
87	Jameson	Shelton	Burke	Queenstown	P.O. Box 684, 9053 Pharetra. Street	2021-02-16 14:02:07
88	Denton	Brooks	Ingram	Gifhorn	2650 Aliquam Road	2021-04-14 02:03:53
89	Rooney	David	Mcclain	Olongapo	825 Sed St.	2020-12-20 07:07:54
90	Damian	Hendrix	Ayers	Kinh Môn	5762 Non Rd.	2020-12-26 01:06:56
91	Carter	Richmond	Rowe	Lelystad	2615 Ultricies Street	2021-03-02 21:02:27
92	Scott	Walls	Farmer	Gliwice	8251 Curae Road	2021-02-17 11:03:52
93	Talon	Frazier	Kerr	Blind River	3969 Mi. Avenue	2020-12-25 09:05:45
94	Giselle	Matthews	Lindsey	Liberia	9938 Interdum. Rd.	2021-05-03 13:01:23
95	Melvin	Benson	Clark	Lambersart	668-3565 Erat Road	2021-04-26 22:01:52
96	Henry	Hatfield	Calhoun	Alta	7324 Consectetuer, Rd.	2021-05-07 22:05:12
97	Jaden	Wilkins	Day	Marabá	Ap #106-1332 Fringilla St.	2021-05-01 01:06:21
98	Hasad	Todd	Head	Sandefjord	236-4061 Proin St.	2021-01-18 04:01:26
99	Brennan	Andrews	Singleton	Cagnes-sur-Mer	2244 Consectetuer Ave	2021-02-04 04:04:33
100	Kasper	Warren	Hurst	Chiclayo	Ap #801-4450 Mi. St.	2021-05-18 18:02:31
\.


--
-- Data for Name: properties; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.properties (id, name, property_type, is_use_in_filter) FROM stdin;
1	Duis mi	string	f
2	cursus a,	string	t
3	enim. Nunc	string	t
4	nibh.	string	f
5	Nam consequat	string	f
6	sagittis	numeric	t
7	sociis	numeric	f
8	dictum sapien.	numeric	f
9	vitae	numeric	t
10	ridiculus mus.	numeric	t
11	euismod	range	f
12	ligula	range	t
13	gravida sagittis.	range	f
14	elit	range	f
15	ac sem	range	f
\.


--
-- Data for Name: property_numeric_values; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.property_numeric_values (id, item_id, property_id, value) FROM stdin;
1	25	9	535
2	38	10	610
3	17	9	667
4	95	7	555
5	58	8	561
6	35	9	708
7	2	9	448
8	59	9	908
9	52	10	449
10	71	10	407
11	7	7	652
12	2	7	878
13	80	6	459
14	5	9	858
15	70	7	704
16	57	10	209
17	90	6	567
18	64	7	324
19	68	7	251
20	2	8	450
21	28	7	740
22	70	7	209
23	8	9	662
24	67	9	868
25	42	9	348
26	3	8	127
27	49	7	655
28	44	9	358
29	52	8	683
30	35	10	315
31	24	8	334
32	69	9	938
33	79	9	277
34	86	7	276
35	16	7	604
36	65	7	260
37	88	6	242
38	74	9	536
39	41	9	757
40	4	8	675
41	49	6	284
42	100	10	990
43	17	6	105
44	22	7	968
45	25	10	292
46	46	6	315
47	33	10	123
48	38	6	187
49	60	9	684
50	23	10	868
\.


--
-- Data for Name: property_range_values; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.property_range_values (id, item_id, property_id, min_value, max_value) FROM stdin;
1	13	15	65	483
2	51	12	55	945
3	49	14	78	574
4	63	13	41	365
5	9	13	19	555
6	87	12	56	235
7	70	14	89	279
8	11	15	87	295
9	57	12	92	471
10	62	14	39	193
11	24	13	7	251
12	30	14	88	681
13	51	14	25	518
14	2	11	50	859
15	54	14	84	642
16	12	11	42	934
17	73	13	96	678
18	25	14	19	332
19	5	11	1	717
20	82	13	20	220
21	63	11	13	753
22	5	11	74	156
23	7	13	48	288
24	15	14	54	294
25	38	12	48	311
26	64	14	88	944
27	64	13	75	706
28	66	13	64	232
29	25	14	71	561
30	90	13	5	351
31	12	14	33	530
32	73	13	44	113
33	78	14	80	135
34	76	13	84	654
35	10	13	5	271
36	48	12	76	926
37	82	12	76	646
38	4	11	80	372
39	69	15	3	349
40	63	11	32	634
41	57	13	69	637
42	100	13	90	652
43	53	12	18	949
44	88	14	95	893
45	35	15	6	253
46	46	13	21	667
47	74	13	90	481
48	64	11	31	681
49	44	12	16	271
50	9	13	5	296
\.


--
-- Data for Name: property_string_values; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.property_string_values (id, item_id, property_id, value) FROM stdin;
1	17	5	est,
2	58	2	sit amet, risus.
3	82	3	netus et malesuada
4	30	3	eget varius
5	61	2	sed dolor. Fusce
6	19	4	quam vel
7	12	3	Nullam ut
8	8	3	dapibus rutrum, justo.
9	25	3	enim nec
10	93	4	sit amet,
11	4	4	augue ac ipsum.
12	37	4	est.
13	10	2	Nam ac
14	10	4	facilisi. Sed neque.
15	23	4	tempus eu, ligula.
16	7	4	mi
17	14	4	ipsum cursus
18	87	3	hendrerit consectetuer,
19	46	4	Etiam
20	11	1	tellus sem
21	42	2	nec, cursus a,
22	42	4	dolor egestas rhoncus.
23	69	1	Curae Phasellus
24	39	3	cursus et,
25	40	4	pede, ultrices
26	28	1	orci luctus et
27	76	2	neque sed
28	56	4	Donec tincidunt.
29	76	3	amet
30	98	5	bibendum. Donec
31	16	3	ante
32	58	4	ullamcorper.
33	41	3	Pellentesque habitant
34	46	5	sociosqu
35	69	3	sed
36	64	1	ullamcorper.
37	74	4	Vivamus non lorem
38	41	4	sapien, cursus
39	39	3	ligula
40	42	1	porta elit, a
41	10	3	tempor diam
42	32	4	a, auctor
43	61	3	et magnis dis
44	50	2	mauris
45	55	2	dictum
46	44	5	Duis gravida.
47	95	2	diam. Proin
48	45	5	sodales nisi
49	90	3	erat volutpat. Nulla
50	55	2	nec, eleifend non,
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gb_user
--

COPY public.users (id, email, phone) FROM stdin;
1	morbi.non@protonmail.net	1-621-222-1723
2	augue.sed.molestie@protonmail.couk	1-346-465-5812
3	pellentesque.habitant@yahoo.couk	1-863-585-7743
4	ante.vivamus@protonmail.ca	1-298-487-6746
5	amet.massa.quisque@google.ca	1-597-787-9853
6	eu.elit@aol.edu	1-722-544-9249
7	odio.nam@icloud.com	1-976-857-4843
8	mattis@protonmail.ca	1-743-912-8521
9	nascetur.ridiculus@aol.org	1-639-475-3416
10	varius.et@icloud.com	1-748-740-3737
11	netus.et.malesuada@icloud.com	1-663-706-7296
12	donec.est.mauris@icloud.ca	1-308-662-9561
13	in.nec@icloud.com	1-318-995-3228
14	lacus@yahoo.org	1-940-607-5344
15	ullamcorper.eu.euismod@yahoo.net	1-311-245-2156
16	sociis@icloud.org	1-447-386-7861
17	magna.praesent.interdum@hotmail.ca	1-219-637-3632
18	purus.nullam@yahoo.edu	1-398-645-6897
19	proin.mi@hotmail.edu	1-360-466-5847
20	eu.augue@icloud.ca	1-748-583-3236
21	gravida@google.edu	1-471-465-5405
22	dolor.dapibus@icloud.couk	1-871-408-6572
23	praesent@icloud.com	1-535-407-3153
24	ac.ipsum.phasellus@aol.ca	1-367-817-6896
25	at.auctor@google.ca	1-317-786-9447
26	pharetra@aol.couk	1-141-478-5142
27	suspendisse@aol.net	1-913-561-4876
28	suspendisse.aliquet@google.com	1-618-262-7888
29	sapien@aol.ca	1-856-744-0861
30	pede.cum.sociis@hotmail.edu	1-733-555-3688
31	lorem@yahoo.edu	1-211-473-4687
32	erat@yahoo.ca	1-225-748-7313
33	donec.egestas@hotmail.edu	1-285-626-8475
34	cras.convallis@protonmail.net	1-278-485-6048
35	enim.sit@outlook.com	1-784-357-7304
36	ultrices.mauris@protonmail.org	1-861-583-8954
37	ridiculus@outlook.com	1-603-172-2911
38	tincidunt@yahoo.couk	1-581-145-7667
39	lacus.pede.sagittis@google.edu	1-319-317-3731
40	erat.volutpat@google.ca	1-150-823-5182
41	non.vestibulum@yahoo.net	1-553-838-3621
42	amet.risus@aol.org	1-889-532-0636
43	auctor.velit@protonmail.couk	1-717-886-4840
44	orci.phasellus@yahoo.net	1-647-813-1362
45	mauris.integer@hotmail.couk	1-301-830-2933
46	amet@hotmail.com	1-520-241-5081
47	congue.turpis@yahoo.com	1-941-805-8432
48	metus.urna@yahoo.edu	1-673-526-8344
49	non@icloud.edu	1-791-274-7622
50	molestie@google.net	1-817-543-6377
51	sollicitudin.commodo@yahoo.org	1-722-544-6292
52	phasellus.nulla.integer@aol.net	1-225-482-6467
53	pharetra.felis@yahoo.edu	1-567-809-7164
54	facilisis@hotmail.org	1-345-603-1726
55	donec.luctus.aliquet@outlook.couk	1-885-353-0717
56	ut.pellentesque.eget@hotmail.edu	1-581-147-3683
57	nunc.sed@icloud.com	1-279-735-3146
58	sagittis@yahoo.ca	1-504-573-8402
59	mi@outlook.edu	1-881-411-4593
60	suspendisse.aliquet.sem@google.net	1-651-653-9914
61	nulla.in@yahoo.com	1-737-411-2736
62	eu.dolor@aol.edu	1-663-700-0247
63	amet.ultricies@icloud.edu	1-574-125-2327
64	ornare.facilisis@yahoo.edu	1-273-434-0884
65	integer@hotmail.couk	1-749-571-6531
66	ut@hotmail.edu	1-387-273-4435
67	netus@protonmail.org	1-501-162-3540
68	et.magnis@hotmail.org	1-643-678-6258
69	aliquet.libero.integer@hotmail.net	1-271-285-3411
70	nibh.aliquam@icloud.com	1-925-493-4879
71	eu@outlook.ca	1-354-628-1759
72	mauris@protonmail.ca	1-339-844-4612
73	scelerisque.sed.sapien@google.edu	1-569-408-0736
74	morbi.sit@icloud.net	1-572-411-7132
75	pellentesque.habitant@icloud.net	1-688-888-2206
76	dictum.eu@outlook.couk	1-414-236-2136
77	lectus.pede.et@outlook.ca	1-164-534-1466
78	laoreet@hotmail.org	1-346-671-9656
79	curabitur.consequat@yahoo.ca	1-886-785-5245
80	orci@aol.org	1-534-371-7512
81	nec.enim@protonmail.edu	1-221-417-6638
82	amet@google.couk	1-879-684-5517
83	praesent.eu@hotmail.edu	1-997-808-4767
84	lorem.ut@hotmail.net	1-526-826-6586
85	enim.consequat.purus@aol.com	1-882-589-8737
86	aliquam.rutrum.lorem@google.net	1-720-213-2243
87	commodo.tincidunt@google.com	1-685-577-7635
88	augue.scelerisque.mollis@outlook.edu	1-693-462-2592
89	lorem.vitae@protonmail.com	1-374-361-5378
90	vitae@icloud.com	1-741-861-3853
91	viverra.maecenas@yahoo.net	1-801-217-7624
92	blandit.mattis@icloud.couk	1-337-176-2816
93	sed.dolor.fusce@protonmail.com	1-826-144-4833
94	est.ac@google.couk	1-888-866-2322
95	mattis.cras@protonmail.couk	1-134-285-8234
96	risus.in@protonmail.ca	1-453-647-8768
97	proin@icloud.edu	1-177-738-3821
98	aliquam.erat@google.edu	1-721-438-6461
99	varius.orci@icloud.com	1-922-448-1307
100	mus@hotmail.org	1-477-381-2946
\.


--
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.brands_id_seq', 1, false);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.categories_id_seq', 1, false);


--
-- Name: items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.items_id_seq', 1, false);


--
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.order_items_id_seq', 1, false);


--
-- Name: order_statuses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.order_statuses_id_seq', 1, false);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, false);


--
-- Name: properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.properties_id_seq', 1, false);


--
-- Name: property_numeric_values_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.property_numeric_values_id_seq', 1, false);


--
-- Name: property_range_values_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.property_range_values_id_seq', 1, false);


--
-- Name: property_string_values_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.property_string_values_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gb_user
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: brands brands_name_key; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_name_key UNIQUE (name);


--
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: categories_properties categories_properties_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.categories_properties
    ADD CONSTRAINT categories_properties_pkey PRIMARY KEY (category_id, property_id);


--
-- Name: items items_name_key; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_name_key UNIQUE (name);


--
-- Name: items items_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- Name: items items_vendor_code_key; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_vendor_code_key UNIQUE (vendor_code);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: order_statuses order_statuses_name_key; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.order_statuses
    ADD CONSTRAINT order_statuses_name_key UNIQUE (name);


--
-- Name: order_statuses order_statuses_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.order_statuses
    ADD CONSTRAINT order_statuses_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (user_id);


--
-- Name: properties properties_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_pkey PRIMARY KEY (id);


--
-- Name: property_numeric_values property_numeric_values_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_numeric_values
    ADD CONSTRAINT property_numeric_values_pkey PRIMARY KEY (id);


--
-- Name: property_range_values property_range_values_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_range_values
    ADD CONSTRAINT property_range_values_pkey PRIMARY KEY (id);


--
-- Name: property_string_values property_string_values_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_string_values
    ADD CONSTRAINT property_string_values_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_phone_key; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phone_key UNIQUE (phone);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: order_items_item_id_fk_idx; Type: INDEX; Schema: public; Owner: gb_user
--

CREATE INDEX order_items_item_id_fk_idx ON public.order_items USING btree (item_id);


--
-- Name: order_items_order_id_fk_idx; Type: INDEX; Schema: public; Owner: gb_user
--

CREATE INDEX order_items_order_id_fk_idx ON public.order_items USING btree (order_id);


--
-- Name: property_range_values check_range_value_property; Type: TRIGGER; Schema: public; Owner: gb_user
--

CREATE TRIGGER check_range_value_property BEFORE INSERT OR UPDATE ON public.property_range_values FOR EACH ROW EXECUTE FUNCTION public.check_range_value_property_trigger();


--
-- Name: categories categories_parent_category_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_parent_category_id_fk FOREIGN KEY (parent_category_id) REFERENCES public.categories(id);


--
-- Name: categories_properties categories_properties_category_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.categories_properties
    ADD CONSTRAINT categories_properties_category_id_fk FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: categories_properties categories_properties_property_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.categories_properties
    ADD CONSTRAINT categories_properties_property_id_fk FOREIGN KEY (property_id) REFERENCES public.properties(id);


--
-- Name: items items_brand_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_brand_id_fk FOREIGN KEY (brand_id) REFERENCES public.brands(id);


--
-- Name: items items_category_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_category_id_fk FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: order_items order_items_item_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_item_id_fk FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: order_items order_items_order_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fk FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: orders orders_status_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_status_id_fk FOREIGN KEY (status_id) REFERENCES public.order_statuses(id);


--
-- Name: orders orders_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: profiles profiles_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_user_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: property_numeric_values property_numeric_values_item_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_numeric_values
    ADD CONSTRAINT property_numeric_values_item_id_fk FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: property_numeric_values property_numeric_values_property_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_numeric_values
    ADD CONSTRAINT property_numeric_values_property_id_fk FOREIGN KEY (property_id) REFERENCES public.properties(id);


--
-- Name: property_range_values property_range_values_item_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_range_values
    ADD CONSTRAINT property_range_values_item_id_fk FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: property_range_values property_range_values_property_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_range_values
    ADD CONSTRAINT property_range_values_property_id_fk FOREIGN KEY (property_id) REFERENCES public.properties(id);


--
-- Name: property_string_values property_string_values_item_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_string_values
    ADD CONSTRAINT property_string_values_item_id_fk FOREIGN KEY (item_id) REFERENCES public.items(id);


--
-- Name: property_string_values property_string_values_property_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: gb_user
--

ALTER TABLE ONLY public.property_string_values
    ADD CONSTRAINT property_string_values_property_id_fk FOREIGN KEY (property_id) REFERENCES public.properties(id);


--
-- PostgreSQL database dump complete
--