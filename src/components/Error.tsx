import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Error = () => {
  return (
    <main className="h-[80vh] flex flex-col gap-4 items-center justify-center">
      <h2 className="text-9xl text-neutral-500">Oops!</h2>
      <h4 className="text-xl text-neutral-400">Something went wrong!</h4>
      <Link to="/">
        <Button text="Go to homepage" width="300px" primary />
      </Link>
    </main>
  );
};

export default Error;
