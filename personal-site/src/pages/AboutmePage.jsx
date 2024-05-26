import Container from "../layout/Container";
import Navbar from "../components/Navbar";

function AboutmePage() {
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
      <Container className="introduction">
        <h1>Introduction</h1>
        introduintroductionintroductionintroductionintroductionintroductionintroductionintroductionintroductionintroductionintroductionction
      </Container>
      <Container className="hobbies">
        <h1>Hobbies</h1>
        hobbieshobbieshobbieshobbieshobbieshobbieshobbieshobbieshobbieshobbies
      </Container>
      <Container className="contact">
        <h1>Contact</h1>
        contactcontactcontactcontactcontact
      </Container>
    </>
  );
}

export default AboutmePage;
