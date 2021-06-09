import React, { Component } from "react"
import { Link } from "gatsby"
import { Banner, TextWrapper, MoreText } from "../styles/IndexStyles"

export default () => (
  <div style={{ position: "relative" }}>
    <Banner></Banner>
    <TextWrapper>
      <div>
        <h2>Goofy Programmer</h2>
        <p>
          One Stop Shop for
          <br />
          All of your development
          <br />
          And design needs
        </p>
        <Link to="/works">Our Works</Link>
      </div>
    </TextWrapper>
    <MoreText>Learn More</MoreText>
  </div>
)
