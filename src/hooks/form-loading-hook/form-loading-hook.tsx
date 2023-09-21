"use client";
import { useState } from "react";

const FormLoadingHook = () => {
  const [loading, setLoading] = useState(false);
  return { loading, setLoading };
};

export default FormLoadingHook;
