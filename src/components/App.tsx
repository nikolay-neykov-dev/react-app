import { useEffect, useState } from 'react'
import { createRoot } from "react-dom/client";
import { socket } from './socket'

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container);

const App = () => {
  const [connected, setConnected] = useState(socket.connected);


  useEffect(() => {
    socket.on('connect', () => setConnected(true));
    socket.on('disconnect', () => setConnected(false));
    socket.on('message', message => console.log({ message }));

    return () => {
      socket.off('connect', () => setConnected(true));
      socket.off('disconnect', () => setConnected(false));
      socket.off('message', message => console.log({ message }));
    };
  }, []);

  return <div>
    <div>{JSON.stringify({ connected })}</div>
    <div>

      <button onClick={() => socket.connect()}>connect</button>
    </div>

    <div>

      <button onClick={() => socket.disconnect()}>disconnect</button>
    </div>

    <div>
      <button onClick={() => socket.emit("message", JSON.stringify({ message: "Hello Niki" }))}>message</button>
    </div>
  </div>
}

root.render(<App />);
