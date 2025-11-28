"use client";

import TargetCursor from "./TargetCursor";

export default function CursorWrapper() {
  return (
    <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} />
  );
}
