import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="Skills">
      <h1 className="skills__title">More about what i know</h1>
      <article className="accordion">
        <section id="acc1">
          <h2>
            <a href="#acc1">Html</a>
          </h2>
          <ul>
            <li>1.Semantic tags</li>
            <li>2.Forms and Validations</li>
            <li>3.Seo Basics</li>
            <li>4.Accessibility</li>
          </ul>
        </section>
        <section id="acc2">
          <h2>
            <a href="#acc2">Css / SCSS</a>
          </h2>
          <ul>
            <li>1.Display</li>
            <li>2.Box Model</li>
            <li>3.Css Grid</li>
            <li>4.Flex Box</li>
            <li>5.Responsive disign and Media Queries</li>
          </ul>
        </section>
        <section id="acc3">
          <h2>
            <a href="#acc3">Javascript / React</a>
          </h2>
          <ul>
            <li>1.Syntax and Basic Consructs</li>
            <li>2.Simple DOM manipulation</li>
            <li>3.ES6+ and modular JavaScript</li>
          </ul>
        </section>
        <section id="acc4">
          <h2>
            <a href="#acc4">git / npm / webpack</a>
          </h2>
          <ul>
            <li>1.test</li>
          </ul>
        </section>
      </article>
    </section>
  );
};

export default Skills;
