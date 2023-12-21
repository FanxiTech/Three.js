import React, { useState } from "react";

import PorticStraight from "./PorticStraight";
import PorticHorizontal from "./PorticHorizontal";
import Plane from "./Plane";
import Windows from "./Windows";
import Roof from "./Roof";
import Mainframe from "./Mainframe";
import InternalFrame from "./InternalFrame";
import Interlock from "./Interlock";
import Door from "./Door";
import Floor from "./Floor";
import Grass from "./Grass";
import Column from "./Column";


export default function Meshs() {
  return (
    <>
      <PorticStraight />
      <PorticHorizontal />
      <Plane />
      <Windows />
      <Roof />
      <Mainframe />
      <InternalFrame />
      <Interlock />
      <Door />
      <Floor />
      <Grass />
      <Column />
    </>
  );
}
