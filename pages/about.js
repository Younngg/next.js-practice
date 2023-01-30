import Head from 'next/head';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';

const About = () => {
  return (
    <div>
      <Seo title='about' />
      <h1>About</h1>
    </div>
  );
};

export default About;

// index.js는 2개 이상 생성 불가능
// jsx를 쓰고 있다면 React.js를 import할 필요 없음 jsx로 바꿀 필요도 없다~
// react method를 쓰고 싶을 때 import

// 앱에 있는 페이지들이 미리 렌더링 - 정적 생성 server side rendering
