import "../App.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Container from "../layout/Container";
import "../components/Navbar.css";

function ProjectsPage() {
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
      <div className="projects-page-content">
        <h1>List of projects</h1>
        <Container className="projects">
          <div className="project-item">
            <h2>Boolean Bonanza</h2>
            <Card
              image="http://mitchellrn.dev.s3-website.us-east-2.amazonaws.com/assets/preview1.png"
              cardContent="Embark on a thrilling journey in Boolean Bonanza, a brain-teasing puzzle game inspired by classics like Yoshi's Cookie and Candy Crush. Swap tiles strategically to create true boolean expressions, sharpening your logical reasoning skills with each level. Progress through increasingly challenging puzzles set in a vibrant Mario-themed world accompanied by playful music, adding to the immersive experience. With retro aesthetics and engaging gameplay, Boolean Bonanza offers a delightful challenge for students of logic, programming, and puzzle enthusiasts alike."
            />
          </div>
          <div className="project-item">
            <h2>Festijam</h2>
            <Card
              image="http://mitchellrn.dev.s3-website.us-east-2.amazonaws.com/assets/preview2.png"
              cardContent="Collaborating with a team member, I developed and deployed festijam.com, a production-ready web application using Python, Django, PostgreSQL, and the Spotify API, making it accessible to a wide audience since February 2024. We deployed the site with Gunicorn and Nginx, utilized web scraping techniques to extract artist lineup data, and designed a user-friendly interface for selecting favorite artists and generating playlists. The Django framework was employed for backend development, while PostgreSQL managed the database, streamlining the process of discovering and organizing music for festivalgoers."
            />
          </div>
          <div className="project-item">
            <h2>Project 3</h2>
            <Card
              image="http://mitchellrn.dev.s3-website.us-east-2.amazonaws.com/assets/preview1.png"
              cardContent="test"
            />
          </div>
          <div className="project-item">
            <h2>Project 4</h2>
            <Card
              image="http://mitchellrn.dev.s3-website.us-east-2.amazonaws.com/assets/preview1.png"
              cardContent="test"
            />
          </div>
        </Container>
      </div>
      <Container className="footer">
        <Navbar
          item1={"LinkedIn"}
          item2={"Github"}
          item3={"Email"}
          item1href={"#"}
          item2href={"#/projects"}
          item3href={"#"}
        />
      </Container>
    </>
  );
}

export default ProjectsPage;
