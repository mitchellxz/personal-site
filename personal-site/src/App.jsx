import Container from "./layout/Container";

function App() {
  return (
    <div>
      <Container
        className="test"
        style={{ padding: "20px", backgroundColor: "#f0f0f0" }}
      >
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
        <h1>Hello, World!</h1>
      </Container>
      <Container
        className="featuredProjects"
        style={{ padding: "20px", backgroundColor: "red" }}
      >
        <h1>Featured Projects</h1>
      </Container>
    </div>
  );
}

export default App;
