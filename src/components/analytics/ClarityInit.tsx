"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

interface ClarityInitProps {
  projectId?: string;
}

export default function ClarityInit({ projectId }: ClarityInitProps) {
  useEffect(() => {
    const id = projectId || process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "ycn7o4sw1o";
    if (id) {
      Clarity.init(id);
    }
  }, [projectId]);

  return null;
}
