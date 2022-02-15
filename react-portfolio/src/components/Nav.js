import React from 'react';
import { useBody } from '../utils/BodyContext';

export default function Nav() {
    const {currentBody, updateBody} = useBody();
  return (
    <nav>
        <ul>
            <li onClick={() =>updateBody('AboutMe')}>ABOUT ME</li>
            <li onClick={() =>updateBody('Portfolio')}>PORTFOLIO</li>
            <li onClick={() =>updateBody('Contact')}>CONTACT</li>
            <li onClick={() =>updateBody('Resume')}>RESUME</li>
        </ul>
    </nav>
  )}
