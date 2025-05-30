import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import PlayerBar from "./components/PlayerBar";

const App = () => {
  return (
    <>
      <Container fluid className="px-0">
        <Row>
          {/* Sidebar a sinistra - colonna 1, nascosta sotto md */}
          <Col md={1} className="d-none d-lg-block bg-black min-vh-100 px-0">
            <SideBar />
          </Col>

          {/* Contenuto principale - prende 11 colonne da md in su, 12 sotto md */}
          <Col xs={12} md={11} className="ps-5 d-flex justify-content-end">
            <MainSection />
            {/* Player Bar fissa in basso */}
            <PlayerBar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
