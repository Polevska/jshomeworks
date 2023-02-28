import { Post } from "./Post";
import "./App.css";

const ANAKIN_IMAGE =
  "https://i.pinimg.com/736x/60/3a/ce/603ace2564436a3697454ff2dc810ab9.jpg";
const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

function App() {
  return (
    <div className="App">
      <Post
        author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        date={"27 febr."}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
      />
    </div>
  );
}

export default App;
