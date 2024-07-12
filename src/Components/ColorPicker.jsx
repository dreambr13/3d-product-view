import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import { useContext } from "react";
import { SharedDataContext } from '../App';
export default function ColorPicker(props) {
  const snap = useSnapshot(props.state);
  const { sharedData, updateSharedData } = useContext(SharedDataContext);
  return (
    <div
      className={snap.current !== null ? "color-picker" : "color-picker hidden"}
    >
      <HexColorPicker
        color={snap.colors[snap.current]}
        onChange={(color) => {console.log(color); props.updateColor(snap.current, color); updateSharedData(color) ;console.log(props.state)}}
      />
      <h1>{snap.current}</h1>
    </div>
  );
}
