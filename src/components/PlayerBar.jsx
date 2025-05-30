import { Row, Col, ProgressBar } from "react-bootstrap";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";

const PlayerBar = () => {
  return (
    <div className="container-fluid fixed-bottom bg-dark py-4 text-center">
      <Row className="h-100">
        <Col lg={{ span: 10, offset: 2 }}>
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex justify-content-between align-items-center">
                <a href="#">
                  <img src={shuffleIcon} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prevIcon} alt="prev" />
                </a>
                <a href="#">
                  <img src={playIcon} alt="play" />
                </a>
                <a href="#">
                  <img src={nextIcon} alt="next" />
                </a>
                <a href="#">
                  <img src={repeatIcon} alt="repeat" />
                </a>
              </div>
              <ProgressBar now={0} className="mt-3" variant="success" style={{ height: "5px" }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PlayerBar;
