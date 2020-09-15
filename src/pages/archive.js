// import React from "react"
// import { Link } from "gatsby"
// import { StaticQuery } from "gatsby"
// import styled from "styled-components"

// import GlobalFonts from "../fonts/fonts"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { device } from "../components/device"


// const ArchivePage = () => (
//   <Layout>
//     <GlobalFonts />
//     <SEO title="17th Street Review | Winter 2020"/>
//     <StaticQuery
//       query={graphql`
//           query {
//               gcms {
//                 issues(last: 1) {
//                   title
//                   content {
//                     html
//                   }
//                   image {
//                     url
//                   }
//                 }
//               }
//               gcms {
//                 stories(where: {homepageStory: true}) {
//                   title
//                   author
//                   content {
//                     html
//                   }
//                 }
//               }
//           }
//       `}
//       render={data => (
//           <IndexContainer>
//               {data.gcms.issues.map(issue => {
//                   const { title, content, image } = issue
//                   return (
//                     <>
//                       <Intro
//                         issueTitle={title}
//                         issueContent={content.html}
//                       />
//                       <NavAndImgWrapper>
//                         <IssueImg src={image.url}/>
//                         <Nav/>
//                       </NavAndImgWrapper>
//                     </>
//                   )
//               })}
//               {data.gcms.stories.map(story => {
//                   const { title, author, content } = story
//                   return (
//                     <Story
//                       storyTitle={title}
//                       storyAuthor={author}
//                       storyContent={content.html}
//                     />
//                   )
//               })}
//           </IndexContainer>
//       )}
//     />
//   </Layout>
// )

// export default ArchivePage
