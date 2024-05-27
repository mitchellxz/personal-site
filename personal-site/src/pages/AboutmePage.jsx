import Container from "../layout/Container";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

function AboutmePage() {
  return (
    <div className="aboutme">
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
        <p>
          Hi, I&apos;m Mitchell, a graduate based in Delaware. I graduated from
          University of Delaware with a degree in Computer Science. I am skilled
          in the following languages:
          <ul className="languageList">
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>R</li>
            <li>JavaScript</li>
            <li>C/C++</li>
            <li>TypeScript</li>
          </ul>
          I have also worked with the following developer tools & frameworks:
          <ul className="tools">
            <li>IntelliJ</li>
            <li>Visual Studio</li>
            <li>VS Code</li>
            <li>SQL Developer</li>
            <li>Git</li>
            <li>Postman</li>
            <li>PostgreSQL</li>
            <li>Django</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
        </p>
      </Container>
      <Container className="hobbies">
        <h1>Hobbies</h1>
        <p>
          In my free time I enjoy traveling and exploring new places. Here are
          some places I have recently visted:
        </p>
        <div className="travelCards">
          <Card
            image="http://mitchellrn.dev.s3-website.us-east-2.amazonaws.com/assets/korea.jpeg"
            cardContent={"South Korea"}
          ></Card>
          <Card
            image="http://mitchellrn.dev.s3-website.us-east-2.amazonaws.com/assets/japan.jpeg"
            cardContent={"Japan"}
          ></Card>
          <Card
            image="http://mitchellrn.dev.s3-website.us-east-2.amazonaws.com/assets/miami.jpeg"
            cardContent={"Miami"}
          ></Card>
        </div>
      </Container>
      <Container className="contact">
        <h1>Contact</h1>
        <p>
          Feel free to reach out to me at <a href="mailto:[email]">Email</a> or
          connect with me on{" "}
          <a href="https://www.linkedin.com/in/mitchellrn/">LinkedIn</a>
        </p>
      </Container>
    </div>
  );
}

export default AboutmePage;
