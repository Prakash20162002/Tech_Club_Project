<h1>Random User Data Generator & PDF Generator with QR Code</h1>
Description
This repository contains two web applications:

Random User Data Generator: Generates random user information and stores it in a CSV file.
PDF Generator with QR Code: Converts user input into a PDF document, which includes a QR code that holds the provided information.
Features
Random User Data Generator:

Generates random names, emails, and addresses.
Saves the generated data in a CSV file for future use.
PDF Generator with QR Code:

Converts any input text into a PDF.
Embeds a QR code in the PDF that displays the provided text.
Tech Stack
Backend: Node.js, Express
Frontend: HTML, CSS, JavaScript
Libraries:
For CSV handling: csv-writer
For PDF generation: pdf-lib
For QR code generation: qrcode
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/your-repo-name.git
Navigate to the project folder:

bash
Copy code
cd your-repo-name
Install the dependencies for both applications:

bash
Copy code
npm install
Running the Applications
To run the Random User Data Generator:

bash
Copy code
cd random-user-data-generator
node app.js
To run the PDF Generator with QR Code:

bash
Copy code
cd pdf-qr-generator
node app.js
Usage
Random User Data Generator
Open the app in your browser at http://localhost:3000.
Click on "Generate Data" to generate random user data.
The data is saved to a data.csv file in the root directory.
PDF Generator with QR Code
Open the app in your browser at http://localhost:3001.
Input the information you want to encode.
Download the generated PDF, which will include a QR code containing the input information.
License
This project is licensed under the MIT License.
