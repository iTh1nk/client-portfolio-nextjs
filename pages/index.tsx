import { useState } from "react";
import Profile from "../components/Profile";
import Right from "../components/Right";
import { Container } from "../layout/Container";

export default function IndexPage({ dataProps }) {
  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-center md:max-w-4xl md:m-auto py-8 px-6 md:px-12">
        <div className="md:w-1/2">
          <Profile />
        </div>
        <div className="md:w-full md:mt-0 ">
          <Right dataProps={dataProps.slice(0, 5)} />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API + "/posts");
    const dataProps = await res.json();
    return {
      props: {
        dataProps,
      },
      revalidate: 1,
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: null,
      },
    };
  }
}
