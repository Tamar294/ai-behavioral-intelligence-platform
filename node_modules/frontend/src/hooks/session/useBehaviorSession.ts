import { useEffect, useRef } from "react";
import type { BaseEvent } from "../../../../shared/core/event.model";

export function useBehaviorSession() {

    const buffer = useRef<BaseEvent[]>([]);
    const timer = useRef<number | null>(null);

    function addEvent(event: BaseEvent) {
        buffer.current.push(event);
    }

    function flush() {
        if(buffer.current.length === 0) return 0;
        
        const batch = [...buffer.current];
        buffer.current = [];

        console.log("sending batch: ", batch);
    }

    useEffect(() => {
        timer.current = window.setInterval(() => {
            flush();
        }, 3000);

        return () => {
            if (timer.current) clearInterval(timer.current);
            flush();
        };
    }, []);

    return {
        addEvent,
        flush,
    };

}