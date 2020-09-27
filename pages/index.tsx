import { useState } from "react";
import Left from "../components/Left";
import Right from "../components/Right";
import { Container } from "../layout/Container";

export default function IndexPage() {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className="py-10 px-6 md:px-24">
      <div className="flex flex-col md:flex-row md:justify-center md:max-w-4xl md:m-auto">
        <div className="md:w-1/2">
          <Left expand={expand} cb={() => setExpand(!expand)} />
        </div>
        <div
          className={
            (expand
              ? " transform translate-y-0 duration-500 "
              : " transform -translate-y-full mt-56 mt duration-500 ") + "md:w-full md:mt-0 md:-translate-y-1 md:duration-75"
          }
        >
          <Right />
        </div>
      </div>
    </div>
  );
}
