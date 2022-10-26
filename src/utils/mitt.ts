export type EventType = string | symbol;
export type Handler<T = any> = (e?: T) => void;
export type WildcardHandler<T = any> = (type: EventType, e?: T) => void;
export type EventHandlerList = Handler[];
export type EventWildcardHandlerList = WildcardHandler[];
export type EventHandleMap = Map<EventType, EventHandlerList | EventWildcardHandlerList>;

export interface Emitter {
  all: EventHandleMap;
  on<T = any>(type: EventType, handler: Handler<T>): void;
  emit<T = any>(type: EventType, e: T): void;
}

export default function mitt(all?: EventHandleMap): Emitter {
  all = all || new Map();

  return {
    all,
    on<T = any>(type: EventType, handler: Handler<T>) {
      const handlers = all?.get(type);
      const added = handlers && handlers.push(handler);
      if (!added) {
        all?.set(type, [handler]);
      }
    },
    emit<T = any>(type: EventType, e: T) {
      ((all?.get(type) || []) as EventHandlerList).slice().map((handler) => {
        handler(e);
      });
    },
  };
}
