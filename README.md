# Sparkpost Technical Exercise

This API server listens for HTTP REST requests.

The server will accept the JSON payload and store it locally in the server.

## Getting Started
1. `git clone https://github.com/EdkChow/sparkpost-technical.git`
2. `cd sparkpost-technical`
3. Start the server:
    - `npm install`
    - `node server/server.js`

    OR using Docker example below:

    - `docker build --tag sparkpost-technical:1.0 .`
    - `docker run --publish 8000:8000 sparkpost-technical:1.0`
    
4. Use an API client to test the server endpoints, such as Postman

## The Payload Object
### Attributes
- name [_string_]
  - name of the user
- age [_number_]
  - age of the user
  
`{
  "name": "x",
  "age": 4
}`

## Endpoints
- POST /sparkpost
  - Request Body: provide [_payload object_]
  - Response: [_payload object_]
  ![POST](https://github.com/EdkChow/sparkpost-technical/blob/main/DOCUMENTATION/images/POST.jpg)
- PUT /sparkpost/:id
  - Parameters: id name must exist in local server and must be the same name as the payload object
  - Request Body: provide [_payload object_]
  - Response: updated [_payload object_]
  ![PUT](https://github.com/EdkChow/sparkpost-technical/blob/main/DOCUMENTATION/images/PUT.jpg)
- GET /sparkpost/:id
  - Parameters: id name must exist in local server
  - Response: [_payload object_]
  ![GET](https://github.com/EdkChow/sparkpost-technical/blob/main/DOCUMENTATION/images/GET.jpg)
