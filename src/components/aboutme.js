import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import himalayas from '../imgs/himalayas.jpg'
import me_2016 from '../imgs/me_2016.jpg'
import robots from '../imgs/robots.jpg'
import './aboutme.css';
class About extends Component {
  render() {
    return(
      <section>
      <div class="container">
          <div class="flex1">
              <div class ="image-himalayas">
                <img class="image-mountain" src ={himalayas}  />
              </div>
             
              <div class="introduction">
                <h3>Introduction</h3>
                 <p >My name is <b>Kshitij Linghtep</b>. I also go by the nick name "<b>Chris</b>". I am from The Land of the Himalayas, Nepal. 
                I completed my education till High School in Kathmandu, the capital city of Nepal.After that, I went to
                Moscow, Russia to study Russian Language and pre-Med. After completing that, I came to United States of America to pursue my
                education in Computer and Information Science at The University of Mississippi. I recently graduated and am <b><i>actively looking for a job.</i></b>
                </p>
            </div>
          </div>
          <div class="flex2">
            <div class ="interests">
              <h3>Interests</h3>
              <p>I love travelling and exploring new places with my family. In the last four years here in the States, I have travelled major places from the East Coast(Ocean City, MD) to the west coast(San Francisco, California). 
              In the coming days, I would like to visit Colorado, Grand Canyon and Vegas. </p>
              <p>Sometimes, I love to write as well.</p>
              <p>Apart from this, I love to solve new number problems and create websites as well. I am still learning how
              to create better apps using latest technologies such as MEAN, MERN stack. </p>
            </div>
      
            <div class ="image-me">
              <img class= "image-myself" src ={me_2016}  />
            </div>
          </div>
          <div class="flex3">
            <div class ="image-robots">
              <img class ="image-machines" src ={robots}  />
            </div>
            
            <div class ="coding">

              <h3>Coding</h3>
              <p>I worked as an IT officer back in my dad's company. From that moment on, I always imagined how
              machines/computers worked. After I started my education here in the States, I felt really attracted to 
                the field of coding and making new applications.</p>
            </div>
          </div>
     
      </div>
      </section>
    )
  }
}

export default About;
