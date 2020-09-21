import Link from 'next/link';

const Index = () => (
  <div>
    typedance Blog
    <p>scoped</p>
    <Link href="/about">
      <a>about</a>
    </Link>
    <Link href="/test">
      <a>Test</a>
    </Link>
  </div>
);
export default Index;
