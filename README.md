alx-project-0x14
CineSeek is a modern movie discovery application built with Next.js, TypeScript, and Tailwind CSS. The application allows users to browse movies from the MoviesDatabase API, view movie details, and search for films by year or genre. The project focuses on creating a responsive, well-structured web application with proper API integration and TypeScript typing.

API Overview
This project uses the OpenAI Image Generation API to create images from user-provided prompts.
The API allows you to send text descriptions and receive high-quality AI-generated images in return.
It supports different image sizes, formats, and models, making it flexible for creative applications.

API Version
The current API version used in this project is 2025-01-01 (latest stable version as referenced in the OpenAI documentation).

Available Endpoints
1. POST /v1/images/generations
Generates an image based on a text prompt.
You send a description, and the API responds with a URL or Base64 data of the generated image.

2. POST /v1/images/edits
Allows you to upload an existing image and apply edits based on a new prompt.

3. POST /v1/images/variations
Takes an uploaded image and returns multiple variations of it.

Note: The main endpoint for this project is /v1/images/generations.

Request and Response Format
A typical request looks like this:

POST /v1/images/generations
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "model": "gpt-image-1",
  "prompt": "A futuristic city at sunset",
  "size": "1024x1024"
}
