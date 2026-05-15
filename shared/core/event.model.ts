import type { EventSignal } from "./event.types";

export type BaseEvent<
    TSignal extends EventSignal,
    TPayload
    > = {
        id: string;

        signal: TSignal;
    
        meta: {
            timestamp: number;
            sessionId: string;
            source: "frontend" | "backend";
        };

        context: {
            route?: string;
            page?: string;
        };

        payload: TPayload;
    };