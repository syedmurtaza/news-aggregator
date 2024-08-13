import { useEffect } from "react";
import EventDispatcher from "../../common/EventDispatcher";

function EventHandler({ event, handler }) {
  useEffect(() => {
    EventDispatcher.on(event, handler);
    return () => EventDispatcher.remove(event);
  }, [event, handler]);

  return null;
}

export default EventHandler;