import React from 'react'
import Card from './Card'

export default function Portfolio() {
  return (
    <div className='portfolioBody'>
    <Card img="/screenshot.JPG" title="Typing Warrior" description="Test your typing skills with this full stack typing test" livelink="https://afternoon-reaches-65972.herokuapp.com/" repolink="https://github.com/wl0194/Typing-Warrior"/>
    <Card img="/project-1.PNG" title="Cyclist" description="Find cycling trails near you and see if the weather will hold up for your next ride with this useful app foor bikers" livelink="https://powerful-cove-20991.herokuapp.com/" repolink="https://wl0194.github.io/Cyclist/"/>
    <Card img="mobilewire.PNG" title="View my Wireframes" description="It's essential to have a great wireframe when building a site, check out some of mine" livelink="https://drive.google.com/drive/folders/1xESNlUODWTZK9FRts0JBt09CzhDXuWYl?usp=sharing" repolink="https://github.com/Jacob76134/wireframes"/>
    </div>
  )
}
