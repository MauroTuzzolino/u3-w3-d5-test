import { Row, Col, ProgressBar } from "react-bootstrap";
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const PlayerBar = () => {
  const currentSong = useSelector((state) => state.player.currentSong);

  return (
    <div className="container-fluid fixed-bottom bg-dark py-4 text-white">
      <Row className="h-100">
        {/* Parte sinistra: info canzone */}
        <Col xs={12} md={3} className="d-flex align-items-center justify-content-end"></Col>

        {/* Parte centrale: controlli */}
        <Col xs={12} md={7} className="d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center">
            {currentSong && (
              <>
                <img src={currentSong.cover} alt={currentSong.title} style={{ width: 50, height: 50, objectFit: "cover", marginRight: 10 }} />

                <div>{currentSong.title}</div>
              </>
            )}
          </div>

          <div className="d-flex flex-column justify-content-between align-items-center w-75">
            <div className="d-flex justify-content-between w-25">
              <a href="#">
                <img src={shuffleIcon} alt="shuffle" style={{ width: "20px", height: "20px" }} />
              </a>
              <a href="#">
                <img src={prevIcon} alt="prev" style={{ width: "20px", height: "20px" }} />
              </a>
              <a href="#">
                <img src={playIcon} alt="play" style={{ width: "28px", height: "28px" }} />
              </a>{" "}
              <a href="#">
                <img src={nextIcon} alt="next" style={{ width: "20px", height: "20px" }} />
              </a>
              <a href="#">
                <img src={repeatIcon} alt="repeat" style={{ width: "20px", height: "20px" }} />
              </a>
            </div>
            <ProgressBar now={0} className="mt-3 w-100" variant="success" style={{ height: "5px" }} />
          </div>
        </Col>

        <Col xs={12} md={2}></Col>
      </Row>
    </div>
  );
};

export default PlayerBar;
