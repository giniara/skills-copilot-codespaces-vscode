# Create a web API using FastAPI with a route to products.
# Run the API using uvicorn.

from fastapi import FastAPI
app = FastAPI()

@app.get("/products")
