import React, {useState,useRef} from "react";
import "./Card.css";


function Card({ cardData }) {
// const position=JSON.parse(cardData.position); static position for variable we need useState react hook which will change and note down the change of pos

let mouseStartPos = { x: 0, y: 0 }; 
const cardRef = useRef(null);

const [position, setPositon] = useState(JSON.parse(cardData.position));

  const [isInfoVisible, setInfoVisible] = useState(false);

  const toggleVisibility = () => {
    setInfoVisible(!isInfoVisible);
  };


  const mouseDown = (e) => {
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;
 
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
};


const mouseMove = (e) => {
    //1 - Calculate move direction
    let mouseMoveDir = {
        x: mouseStartPos.x - e.clientX,
        y: mouseStartPos.y - e.clientY,
    };
 
    //2 - Update start position for next move.
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;
 
    //3 - Update card top and left position.
    setPositon({
        x: cardRef.current.offsetLeft - mouseMoveDir.x,
        y: cardRef.current.offsetTop - mouseMoveDir.y,
    });
};

const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
};

  return (
    <>
      <div
        ref={cardRef}
        style={{ position: "absolute", left: position.x, top: position.y }}
        className="imgCard"
        onClick={toggleVisibility}
        onMouseDown={mouseDown}
      >
        <img
          className="image"
          src={cardData.imgSrc}
          alt={`Uploaded by ${cardData.uploaderName}`}
        />
        {isInfoVisible && (
          <div className="imageInfo">
            <p>Uploader:{cardData.uploaderName}</p>
            <p>{cardData.additionalNotes}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
