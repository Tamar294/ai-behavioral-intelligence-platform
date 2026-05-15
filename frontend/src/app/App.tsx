import { useMouseTracker } from "../hooks/mouse/useMouseTracker";
import { useBehaviorSession } from "../hooks/session/useBehaviorSession";

function App() {

  const { addEvent } = useBehaviorSession();
  useMouseTracker(addEvent);

  return (
    <div>
      <h1>Behavior Detection System</h1>
    </div>
  )
}

export default App
