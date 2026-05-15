import { useEffect } from "react";
import type { MouseMoveEvent } from "../../../../shared/events/mouse.events";

const sessionId = "temp-session";

export function useMouseTracker(addEvent: (event: MouseMoveEvent) => void) {

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const event: MouseMoveEvent = {
        id: crypto.randomUUID(),
        signal: "MOUSE_MOVE",
        meta: {
          timestamp: Date.now(),
          sessionId,
          source: "frontend",
        },
        context: {
          route: window.location.pathname,
        },
        payload: {
          x: e.clientX,
          y: e.clientY,
          movementX: e.movementX,
          movementY: e.movementY,
        },
      };

      addEvent(event);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

}