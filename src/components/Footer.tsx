// app/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* About Us Links */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>About Us</h4>
              <ul>
                <li><i className="ion-ios-arrow-forward"></i> <Link href="#">Home</Link></li>
                <li><i className="ion-ios-arrow-forward"></i> <Link href="#about">About Us</Link></li>
                <li><i className="ion-ios-arrow-forward"></i> <Link href="#fabrics">Our Fabrics</Link></li>
                <li><i className="ion-ios-arrow-forward"></i> <Link href="#journey">Our Journey</Link></li>
                <li><i className="ion-ios-arrow-forward"></i> <Link href="#contact">Contact</Link></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="ion-ios-arrow-forward"></i> <Link href="#team">Our Founder</Link></li>
                <li><i className="ion-ios-arrow-forward"></i> <Link href="#faq">FAQ</Link></li>
                {/* Add additional links here if needed */}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Nairobi, Kenya<br />
                <strong>Phone:</strong> +254 721 888 887<br />
                <strong>Email:</strong> info@daimamkenyaafrica.com<br />
                <strong>Email:</strong> zahra@daimamkenyaafrica.com<br />
              </p>
              <div className="social-links">
                <a href="#"><i className="ion-logo-facebook"></i></a>
                <a href="#"><i className="ion-logo-twitter"></i></a>
                <a href="#"><i className="ion-logo-linkedin"></i></a>
                <a href="#"><i className="ion-logo-instagram"></i></a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Subscription</h4>
              <p>Subscribe to our newsletter to get the latest updates on our products and initiatives.</p>
              <form action="#" method="post">
                <input type="email" name="email" placeholder="Your Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 copyright">
            Copyright &copy; 2023 Daima Mkenya Africa. All Rights Reserved.
          </div>
        </div>
      </div>

      <a href="#" className="back-to-top"><i className="ion-ios-arrow-up"></i></a>
    </div>
  );
};

export default Footer;
