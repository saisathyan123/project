import React from "react";
import "./frontpage.css";
//import { Link } from 'react-router-dom';

function Main() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="styles.css" />
        <title>Document</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>

      <body>
        <main>
          <div class="intro">
            <h1>Accounting Application</h1>
            <p>Focus on your business and leave the accounting to us.</p>
            <button>Learn More</button>
          </div>
          <div class="achievements">
            <div class="work">
              <i class="fas fa-piggy-bank"></i>
              <p class="work-heading">Financial Reporting</p>
              <p class="work-text">
                We take care of your day-to-day financial transactions and
                prepare accurate financial statements, giving you a clear
                picture of your business's financial health.
              </p>
            </div>
            <div class="work">
              <i class="f	fas fa-balance-scale"></i>
              <p class="work-heading">Tax Planning and Compliance</p>
              <p class="work-text">
                Our tax experts stay up to date with the latest tax laws and
                regulations to minimize your tax liabilities and ensure
                compliance, giving you peace of mind during tax season.
              </p>
            </div>
            <div class="work">
              <i class="	fas fa-chart-line"></i>
              <p class="work-heading">Business Advisory</p>
              <p class="work-text">
                Our knowledgeable advisors provide valuable insights and
                strategic guidance to help you make informed financial decisions
                and drive business growth.
              </p>
            </div>
            <div class="work">
              <i class="fas fa-money-bill-alt"></i>
              <p class="work-heading">Payroll Management</p>
              <p class="work-text">
                We handle your payroll processing, ensuring timely and accurate
                payment to your employees, along with managing tax deductions
                and reporting.
              </p>
            </div>
          </div>
          <div class="about-me">
            <div class="about-me-text">
              <h2>About Us</h2>
              <p>
                At Accounting, we understand that managing your finances and
                ensuring compliance with tax regulations can be a daunting task.
                That's why we are here to simplify the accounting process and
                help your business thrive. Our team of experienced and dedicated
                accountants is committed to providing top-notch services
                tailored to meet your specific requirements. Whether you are a
                small business owner or a large corporation, we have the
                expertise to handle all your accounting needs with precision and
                efficiency.
              </p>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/652/224/original/vector-businessmen-talking-about-business-cartoon.jpg"
              alt="me"
            ></img>
          </div>
        </main>
        <footer class="footer">
          <div class="copy">© Accounting</div>
          <div class="bottom-links">
            <div class="links">
              <span>More Info</span>
              <a href="#">Terms and Conditions</a>
              <a href="#">Privacy policy</a>
              <a href="#">FAQ</a>
              <a href="#">Contact Information</a>
            </div>
            <div class="links">
              <span>Social Links</span>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default Main;
