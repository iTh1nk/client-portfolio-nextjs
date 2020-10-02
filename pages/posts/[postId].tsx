import React, { useState } from "react";
import Profile from "../../components/Profile";
import { Container } from "../../layout/Container";

interface Props {
  dataProps: Post;
}

type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: Date;
};

const Post: React.FunctionComponent<Props> = ({ dataProps }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Container title={dataProps.title}>
      <div className="md:flex md:flex-row md:justify-center md:max-w-6xl md:m-auto py-8 px-6 md:px-20">
        <div className="md:w-1/2">
          <Profile />
        </div>
        <div className="inline md:hidden">
          <hr className="mt-3 mb-6" />
        </div>
        <div className="flex flex-col justify-start md:w-full md:mt-0">
          <div className="font-semibold text-2xl">{dataProps.title}</div>
          <div className="mt-6 font-mono text-sm dark:text-gray-400">
            <div
              className="ck-content inline-block"
              dangerouslySetInnerHTML={{
                __html: dataProps.content,
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/get/`);
  const data = await res.json();
  const paths = data.map((item) => `/posts/${item.id}`);
  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/get/${context.params.postId}/`
  );
  const dataProps = await res.json();
  return { props: { dataProps }, revalidate: 1 };
}

export default Post;
