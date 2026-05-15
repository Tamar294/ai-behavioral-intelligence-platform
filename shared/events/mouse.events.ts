import type { BaseEvent } from "../core/event.model";

export type MouseMovePayload = {
    x: number;
    y: number;
    movementX: number;
    movementY: number;
};

export type MouseMoveEvent = BaseEvent< 
    "MOUSE_MOVE",
    MouseMovePayload
>;