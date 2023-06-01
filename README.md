# Jejaknesia API Documentation

This documentation provides information and examples for using the Jejaknesia API.

## Base URL

The base URL for all API endpoints is:<br>

```sh
https://jejaknesia-capstoneproject.et.r.appspot.com/
```

sample data:<br>

```sh
[
{
"place_id": "C001",
"place_name": "Benteng Rotterdam",
"city": "Sulawesi Selatan",
"address": "Bulo Gading, Kec. Ujung Pandang, Kota Makassar",
"Lon": 119.406,
"Lat": -5.13564,
"desc_place": "Fort Rotterdam atau Benteng Ujung Pandang adalah sebuah benteng peninggalan Kerajaan Gowa-Tallo.",
"price": 0,
"category_1": "Seni & Budaya",
"category_2": "Tempat Bersejarah",
"category_3": "Museum",
"category_4": "",
"category_5": "",
"category_6": "",
"category_7": "",
"combine_category": "Seni & Budaya, Tempat Bersejarah, Museum"
},
{
"place_id": "C002",
"place_name": "Taman Nasional Lore Lindu",
"city": "Sulawesi Tengah",
"address": "Dodolo, Sulawesi Tengah",
"Lon": 120.24,
"Lat": -1.4733,
"desc_place": "Taman Nasional Lore Lindu merupakan salah satu taman nasional di Indonesia yang terletak di provinsi Sulawesi Tengah.",
"price": 10000,
"category_1": "Ruang Terbuka",
"category_2": "Relaxing",
"category_3": "Gunung",
"category_4": "Hutan / Flora",
"category_5": "Margasatwa / Fauna",
"category_6": "",
"category_7": "",
"combine_category": "Ruang Terbuka, Relaxing, Gunung, Hutan / Flora, Margasatwa / Fauna"
},
{
"place_id": "C003",
"place_name": "Tana Toraja",
"city": "Sulawesi Selatan",
"address": "Lemo, Kec. Makale Utara, Kab. Tana Toraja",
"Lon": 119.887,
"Lat": -3.04892,
"desc_place": "Lokasi ini terkenal akan budaya uniknya yang berupa ritual pemakaman warga.",
"price": 0,
"category_1": "Seni & Budaya",
"category_2": "Tempat Bersejarah",
"category_3": "Spiritual / Religi",
"category_4": "",
"category_5": "",
"category_6": "",
"category_7": "",
"combine_category": "Seni & Budaya, Tempat Bersejarah, Spiritual / Religi"
}
]
```

## Authentication

To access protected endpoints, you need to include the authentication token in the request headers.

### Register

Endpoint: `/register`<br>
Method: `POST`<br>
Description: Register a new user.<br>
Example:<br>
`{
  "email": "adity123a@gmail.com",
  "password": "120120",
  "name": "Sujarwo",
  "id_itinerary": 1
}`

### Login

Endpoint: `/login`<br>
Method: `POST`<br>
Description: Authenticate and log in a user.<br>
Example:<br>
`{
  "email": "adity123a@gmail.com",
  "password": "120120"
}`
