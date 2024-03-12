import { createRoot } from "react-dom/client";

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container);

const App = () => {
  return <div>
    React App
  </div>
}

root.render(<App />);
