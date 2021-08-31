# shop-be

Link for retrieving products        https://9n0h4zw18l.execute-api.eu-west-1.amazonaws.com/dev/getProducts

Example result:
{
    "goods": [
        {
            "count": 4,
            "description": "Short Product Description1",
            "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
            "price": 2.4,
            "title": "ProductOne"
        },
    ...],
}


Link for retrieving products by ID  https://9n0h4zw18l.execute-api.eu-west-1.amazonaws.com/dev/getProductById?id=exampleId

Example result:
{
    "product": {
        "count": 4,
        "description": "Short Product Description1",
        "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        "price": 2.4,
        "title": "ProductOne"
    }
}

FE part in progress).