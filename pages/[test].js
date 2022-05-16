import { useRouter } from 'next/router';

const Post = () => {
  const {
    query: { test },
  } = useRouter();
  return <p>Test: {test}</p>;
};

export default Post;
