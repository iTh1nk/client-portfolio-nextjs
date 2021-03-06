import { useState } from "react";
import Profile from "../components/Profile";
import Right from "../components/Right";
import { Container } from "../components/Container";

export default function IndexPage({ dataPost, dataProject, dataIntro }) {
  return (
    <Container dataProps={dataProject?.slice(0, 3)}>
      <div className="">
        {/* <div className="md:w-1/2">
          <Profile dataProps={dataProject} />
        </div> */}
        <div className="">
          <Right dataProps={dataPost?.slice(0, 5)} dataIntro={dataIntro[0]} />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const resPost = await fetch(process.env.NEXT_PUBLIC_API + "/posts/get");
    const dataPost = await resPost.json();
    const resProject = await fetch(
      process.env.NEXT_PUBLIC_API + "/projects/get"
    );
    const dataProject = await resProject.json();
    const resIntro = await fetch(process.env.NEXT_PUBLIC_API + "/intro/get");
    const dataIntro = await resIntro.json();
    return {
      props: {
        dataPost,
        dataProject,
        dataIntro,
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
