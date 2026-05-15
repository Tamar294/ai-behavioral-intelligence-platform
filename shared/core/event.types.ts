export const EVENT_SIGNALS = {
    MOUSE_MOVE: "MOUSE_MOVE",
    CLICK: "CLICK",
    KEY_PRESS: "KEY_PRESS",
    SCROLL: "SCROLL",
} as const;

export type EventSignal = typeof EVENT_SIGNALS[keyof typeof EVENT_SIGNALS];