import Link from 'next/link';

const Index = () => (
  <div>
    typedance Blog
    <p>scoped</p>
    <Link href="/about" passHref>
      <div>about</div>
    </Link>
    <style jsx>
      {`
        p {
          color: blue;
        }
      `}
    </style>
  </div>
);
export default Index;
