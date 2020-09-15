import React, { useState } from "react"
import styled from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArchivePage = ({ pageContext }) => {
    const [story, updateStory] = useState(pageContext.story)
    return (
      <Layout>
        <GlobalFonts />
        <SEO title="Archive"/>
        <h1>Archive</h1>
      </Layout>
    )
  }

export default ArchivePage
