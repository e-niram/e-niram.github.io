import * as React from 'react';
import './Header.css';

export default function Header() {
  const handleCVonClick = () => {
    console.log('Downloading CV...');
  };

  return (
    <div id="#header">
      <ul>
        <li>
          <a onClick={handleCVonClick} href="">
            CV
          </a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}
