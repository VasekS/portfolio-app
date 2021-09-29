# portfolio-app
Portfolio website using React app packaged using Docker and deployable to Google Cloud Provider

[live site](https://vaclavsekret.dev)

<h1>Getting Started</h1>


Clone the project:
git clone https://github.com/VasekS/portfolio-app.git

Navigate into the directory:
`<addr>`cd portfolio-app

Install node modules:
`<addr>`npm install

Run the app locally:
`<addr>`npm start

Build the docker image:
`<addr>`docker build -t portfolio-app:latest .

Run the docker image:
`<addr>`docker run -p 8080:443 portfolio-app:latest

Navigate to the url in your browser:
`<addr>`http://localhost:8080
