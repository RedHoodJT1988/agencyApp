import React, { Component } from "react"
import { Link } from "gatsby"
import {
  Banner,
  TextWrapper,
  MoreText,
  SectionTwo,
} from "../styles/IndexStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart, faCode, faGem, fas } from "@fortawesome/free-solid-svg-icons"

library.add(faHeart, faCode, faGem, fas)

export default () => (
  <>
    <section style={{ position: "relative" }}>
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
    </section>
    <SectionTwo>
      <div>
        <h2>Our Passion</h2>
        <p>
          Most good programmers do programming not because they expect to get
          paid,
          <br />
          but because it's fun to program.
        </p>
        <h5> - Linus Torvalds</h5>
        <span>
          <FontAwesomeIcon
            icon="gem"
            color="#04F5C6"
            size="6x"
            style={{ marginRight: "3rem" }}
            fixedWidth
            border
          />
          <FontAwesomeIcon
            icon="heart"
            color="#00F0FF"
            size="6x"
            style={{ marginRight: "3rem" }}
            fixedWidth
            border
          />
          <FontAwesomeIcon
            icon="code"
            color="#73DBFD"
            size="6x"
            fixedWidth
            border
          />
        </span>
      </div>
    </SectionTwo>
  </>
)
