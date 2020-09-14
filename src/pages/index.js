import React from "react"
import { Link } from "gatsby"
import { StaticQuery } from "gatsby"
import styled from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`
// const User = props => (
//   <UserWrapper>
//     <Avatar src={props.avatar} alt="" />
//     <Description>
//       <Username>{props.username}</Username>
//       <Excerpt>{props.excerpt}</Excerpt>
//     </Description>
//   </UserWrapper>
// )

const IntroWrapper = styled.div`
  max-width: 40vw;
`

const IntroTitle = styled.p`
  font-family: "Souvenir";
  font-size: 25px;
`

const IntroContent = styled.p`
`

const Intro = props => (
  <IntroWrapper>
    <IntroTitle>{props.subTitle}</IntroTitle>
    <IntroContent>{props.indexContent}</IntroContent>
  </IntroWrapper>
)

// export default function UsersList() {
//   return (
//     <Container>
//       <h1>About Styled Components</h1>
//       <p>Styled Components is cool</p>
//       <User
//         username="Jane Doe"
//         avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
//         excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//       />
//       <User
//         username="Bob Smith"
//         avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
//         excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//       />
//     </Container>
//   )
// }


const IndexPage = () => (
  <Layout>
    <GlobalFonts />
    <SEO title="17th Street Review"/>
    <Container>
      <StaticQuery
              query={graphql`
                  query {
                      gcms {
                        pages(where: {slug: "/"}) {
                          subtitle
                          homeImage {
                            url
                          }
                          content {
                            text
                          }
                        }
                      }
                  }
              `}
              render={data => (
                  <div>
                      {data.gcms.pages.map(page => {
                          const { subtitle, content } = page
                          return (
                            <Intro
                              subTitle={subtitle}
                              indexContent={content.text}
                            />
                          )
                      })}
                  </div>
              )}
          />
    </Container>
  </Layout>
)

export default IndexPage
