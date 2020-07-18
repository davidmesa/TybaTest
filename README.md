### Tyba Tecnical Test
###### by David Mesa

#### Created Endpoints

|Endpoint|Use Example|
|---|---|
|v1/auth/login| curl --location --request POST 'localhost:3000/v1/auth/login' --header 'Content-Type: application/json' --data-raw '{ "email": "example@c.com", "password": "XXXXXX"}' |
|v1/auth/register| curl --location --request POST 'localhost:3000/v1/auth/register' --header 'Content-Type: application/json' --data-raw '{ "email": "example@c.com", "password": "XXXXXX"}' |
|v1/restaurants/:coordinates|curl --location --request GET 'localhost:3000/v1/restaurants/-33.8670522,151.1957362' --header 'Authorization: Bearer access-token'|
|v1/users/:userID/search-log|curl --location --request GET 'localhost:3000/v1/users/:userID/search-log' --header 'Authorization: Bearer access-token'|

#### MongoDB

MongoDB is configure locally, change the configuration on --root--/.env
