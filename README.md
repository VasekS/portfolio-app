# portfolio-app
Portfolio website using React app packaged using Docker and deployable to Google Cloud Provider

Getting Started


Clone the project:
git clone https://github.com/VasekS/portfolio-app.git

Navigate into the directory:
cd portfolio-app

Install node modules:
npm install

Run the app locally:
npm start

Build the docker image:
docker build -t portfolio-app:latest .

Run the docker image:
docker run -p 8080:443 portfolio-app:latest

Navigate to the url in your browser:
http://localhost:8080
