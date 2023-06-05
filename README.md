# Jejaknesia API Documentation

This documentation provides information and examples for using the Jejaknesia API.

## Base URL

The base URL for all API endpoints is:<br>

```sh
https://jejaknesia-capstoneproject.et.r.appspot.com/api
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

```sh
{
  "email": "adity123a@gmail.com",
  "password": "120120",
  "name": "Sujarwo",
  "id_itinerary": 1
}
```

### Login

Endpoint: `/login`<br>
Method: `POST`<br>
Description: Authenticate and log in a user.<br>
Example:<br>

```sh
{
  "email": "adity123a@gmail.com",
  "password": "120120"
}
```

### Blogs

Endpoint: `api/blogs`<br>
Method: `GET`<br>
Description: blogs<br>
