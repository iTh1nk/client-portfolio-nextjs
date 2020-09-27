import { useState } from "react";
import Profile from "../components/Profile";
import Right from "../components/Right";
import { Container } from "../layout/Container";

export default function IndexPage() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-center md:max-w-4xl md:m-auto">
        <div className="md:w-1/2">
          <Profile />
        </div>
        <div className="md:w-full md:mt-0 ">
          <Right />
        </div>
      </div>
    </Container>
  );
}
