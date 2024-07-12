import React from "react";
import shoe from "../img/shoe.png";
import rocket from "../img/rocket.png";
import axe from "../img/axe.png";
import insect from "../img/insect.png";
import teapot from "../img/teapot.png";
import mobile from "../img/mobile.png";

const ModelPicker = ({ updateSelectedModel }) => {
  return (
    <>
      <div className="model-selector">
        <div onClick={() => updateSelectedModel("Shoe")}>
          <img src={shoe} alt="shoe" />
          <h4>Shoe(gltf)</h4>
        </div>
        <div onClick={() => updateSelectedModel("Rocket")}>
          <img src={rocket} alt="rocket" />
          <h4>Rocket(gltf)</h4>
        </div>
        <div onClick={() => updateSelectedModel("Axe")}>
          <img src={axe} alt="axe" />
          <h4>Axe(gltf)</h4>
        </div>
        <div onClick={() => updateSelectedModel("Insect")}>
          <img src={insect} alt="insect" />
          <h4>Insect(gltf)</h4>
        </div>
        <div onClick={() => updateSelectedModel("Teapot")}>
          <img src={teapot} alt="teapot" />
          <h4>Teapot(gltf)</h4>
        </div>
        <div onClick={() => updateSelectedModel("Mobile")}>
          <img src={mobile} alt="Robot" />
          <h4>Robot(fbx file)</h4>
        </div>
      </div>
    </>
  );
};

export default ModelPicker;
