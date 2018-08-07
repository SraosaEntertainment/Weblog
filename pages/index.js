// This is the Link API
// import Link from 'next/link'

// import Header from '../components/Header'
// import Layout from '../components/amsLayout1'

// const Index = () => (
//   <div>
//     <Link href="/about">
//       <button>About Page</button>
//     </Link>
//     <p>Hello Next.js</p>
//   </div>
// )
//
// export default Index

// export default () => (
//   <Layout>
//     <p>Hello Next.js</p>
//   </Layout>
// )



import Layout from '../components/amsLayout1'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
