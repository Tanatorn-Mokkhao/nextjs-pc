"use client";
import { IDragHook } from "@/interface/hooks/drag-hook.interface";
import { useState } from "react";

const DragHook = ({data}: IDragHook) => {
  const [dragList, setDragList] = useState(data);
  
  return { dragList, setDragList };
};

export default DragHook;
