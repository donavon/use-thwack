import * as React from "react";
import "./styles.css";
import { useRandomDog, RequestStatus } from "./useRandomDog";
import { DogEmoji } from "./DogEmoji";

export default function App() {
  const { imageUrl, load, status, error } = useRandomDog();

  if (status === RequestStatus.Error) {
    console.log(error);
    return (
      <>
        <h1>Error fetching dog</h1>
        <div>
          <button onClick={load}>Try Again</button>
        </div>
        <code>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </code>
      </>
    );
  }

  return (
    <div className="App">
      <h1>Thwack Demo</h1>
      <h2>
        <DogEmoji /> Random Dog Image <DogEmoji />
      </h2>
      <div>
        <button disabled={status === RequestStatus.Loading} onClick={load}>
          Fetch a New Dog
        </button>
      </div>
      {imageUrl && <img src={imageUrl} alt="dog" />}
    </div>
  );
}
