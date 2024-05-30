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
              image="https://mitchellrn.dev/assets/preview1.png"
              cardContent="I developed Boolean Bonanza, an educational game in TypeScript and Phaser to teach boolean logic concepts. I designed and implemented an interactive tutorial to guide users through the basics of boolean logic and created multiple stages with increasing difficulty to reinforce learning and maintain engagement. The core game functionality involved tile swapping and row evaluation, with a focus on creating an intuitive and user-friendly interface to enhance the learning experience."
            />
          </div>
          <div className="project-item">
            <h2>Festijam</h2>
            <Card
              image="https://mitchellrn.dev/assets/preview2.png"
              cardContent="Collaborating with a team member, I developed and deployed festijam.com, a production-ready web application using Python, Django, PostgreSQL, and the Spotify API, making it accessible to a wide audience since February 2024. We deployed the site with Gunicorn and Nginx, utilized web scraping techniques to extract artist lineup data, and designed a user-friendly interface for selecting favorite artists and generating playlists. The Django framework was employed for backend development, while PostgreSQL managed the database, streamlining the process of discovering and organizing music for festivalgoers."
            />
          </div>
          <div className="project-item">
            <h2>PL Picker</h2>
            <Card
              image="https://mitchellrn.dev/assets/preview3.png"
              cardContent="I collaborated closely with a team member to develop PL Match Predictor, a Django-based web application for predicting English Premier League match outcomes. I implemented a user-friendly interface allowing users to predict match results based on selected home and away teams. I led data preprocessing efforts to collect and prepare historical match data for machine learning models and employed machine learning modeling techniques to achieve accurate match predictions."
            />
          </div>
          <div className="project-item">
            <h2>Draft Tactics</h2>
            <Card
              image="https://mitchellrn.dev/assets/draftTactics.png"
              cardContent="I developed a game in JavaFX where users and the computer each choose three characters to engage in battles until the user runs out of lives. The winner of the battle gets to select a power-up as a reward. I implemented the interface, designed the character selection process, and developed the battle mechanics to create an engaging and interactive gaming experience."
            />
          </div>
        </Container>
      </div>
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

export default ProjectsPage;
