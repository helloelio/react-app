import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="Skills">
      <h1 className="skills__title">More about what i know</h1>
      <div className="horizontal-click">
        <input type="radio" name="vkl" id="vkl1" />
        <label for="vkl1">Html</label>
        <ul>
          <li>1.Semantic tags</li>
          <li>2.Forms and Validations</li>
          <li>3.Seo Basics</li>
          <li>4.Accessibility</li>
        </ul>
        <input type="radio" name="vkl" id="vkl2" />
        <label for="vkl2">Css / SCSS</label>
        <ul>
          <li>1.Display</li>
          <li>2.Box Model</li>
          <li>3.Css Grid</li>
          <li>4.Flex Box</li>
          <li>5.Responsive disign and Media Queries</li>
        </ul>
        <input type="radio" name="vkl" id="vkl3" />
        <label for="vkl3">JavaScript / React</label>
        <ul>
          <li>1.Syntax and Basic Consructs</li>
          <li>2.Simple DOM manipulation</li>
          <li>3.ES6+ and modular JavaScript</li>
        </ul>
        <input type="radio" name="vkl" id="vkl4" />
        <label for="vkl4">webpack / npm </label>
        <div>
          <ul>
            <li>1.Basic webpack assembly</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
