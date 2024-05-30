import Container from "../layout/Container";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

import "../App.css";
import "../components/Navbar.css";

function HomePage() {
  return (
    <>
      <Container className="heading">
        <Navbar
          item1={"Home"}
          item2={"Projects"}
          item3={"About"}
          item1href={"#"}
          item2href={"#/projects"}
          item3href={"#/about"}
        />
      </Container>

      <Container className="featuredProjects">
        <h1>Featured Projects</h1>
        <Carousel />
      </Container>
      <Container className="footer">
        <Navbar
          item1={"LinkedIn"}
          item2={"Github"}
          item1href={"https://www.linkedin.com/in/mitchellrn/"}
          item2href={"https://github.com/mitchellxz"}
        />
      </Container>
    </>
  );
}

export default HomePage;
