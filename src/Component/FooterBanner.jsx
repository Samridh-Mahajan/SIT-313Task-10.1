import "./FooterBanner.css";

function FooterBanner() {
  return (
    <div class="Reference">
      <div class="Explore">
        <h3>Explore</h3>
        <a href="">Home</a>
        <a href="">Questions</a>
        <a href="">Articles</a>
        <a href="">Tutorials</a>
      </div>
      <div class="Support">
        <h3>Support</h3>
        <a href="">FAQs</a>
        <a href="">Help</a>
        <a href="">Contact US</a>
      </div>
      <div class="Connection">
        <h3>Stay Connected</h3>
        <a href="www.instagram.com" target="_blank">
          <img
            method="blank"
            src="https://th.bing.com/th?id=ODLS.811c55ff-001a-4532-baae-450eeda18ae8&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
          />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <img src="https://th.bing.com/th?id=ODLS.7d3063c3-cd17-4792-8d4f-4e98c892a389&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" />{" "}
        </a>
        <a href="www.twitter.com" target="_blank">
          <img src="https://th.bing.com/th?id=ODLS.622ceebf-d807-45da-bb82-707dd9e5c357&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" />{" "}
        </a>
      </div>
      <div class="DEV">
        <h3>DEV@Deakin 2023</h3>
        <div class="a">
          <a href="">Privacy Policy</a>
          <a href="">Terms</a>
          <a href="">Code of Conduct</a>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;