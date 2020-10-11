import React from 'react';
import Layout from './../components/Layout';
import XA from 'components/ExternalAnchor';

const Index = () => (
  <Layout>
    <h2>Howdy.</h2>
    <p>My name is Rounak and I currently work at Barclays. Previously, I interned at <XA href="https://cetbwh.org">Harvard Medical School</XA>, <XA href="https://www.thomsonreuters.com/en.html">Thomson Reuters</XA> and <XA href="https://www.opengenus.org/">OpenGenus Foundation</XA>. My primary interests are backend development, building cli tools and deep learning.</p>
    <p>In my free time, I enjoy playing table tennis, backpacking once in a while and Indo-Chinese food.</p>
    <p>You can find me on <XA href="https://twitter.com/itsron143">Twitter</XA>, <XA href="https://github.com/itsron717">Github</XA>,<XA href="https://www.linkedin.com/in/itsron143/"> LinkedIn</XA>, and <XA href="https://www.strava.com/athletes/57025908">Strava</XA>, or reach me via <XA href="mailto:rounakvyas@outlook.com">email</XA>.</p>
    <h2>Colophon</h2>
    <p>The credits for this excellet template goes to <XA href="https://twitter.com/prestonrichey">Preston Richey</XA>. This site was made with <XA href="https://www.gatsbyjs.org/">Gatsby.js</XA> and is hosted on <XA href="https://www.netlify.com/">Netlify</XA>. You can look at its code <XA href="https://github.com/itsron717/rounakvyas.me">here</XA>. The monospace font is <XA href="https://fonts.google.com/specimen/Roboto+Mono">Roboto Mono</XA> and the sans-serif is <XA href="https://fonts.google.com/specimen/Rubik">Rubik</XA>.</p>
  </Layout>
);

export default Index;
