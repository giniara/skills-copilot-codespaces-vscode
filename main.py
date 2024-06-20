import base64
import os

class Text(BaseModel):

text: str

# Create a FastAPI endpoint that accepts a POST request with a JSON body containing a single field called "text" and returns a checksum of the text
