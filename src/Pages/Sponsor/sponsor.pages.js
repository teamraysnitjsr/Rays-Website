import React from 'react'
import "./Sponsor.css"
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
function Sponsor() {
    return (
      <div className="sponsor-body">
        <div className="sponsor-title">
          <h1>BE OUR PARTNER</h1>
          <p className="sponsor-p">
            We design, build and race the best solar vehicles with the help of
            sponsors who are a critical part of our team's legacy. Learn about
            the people who help make our designs a reality.The companies,
            individuals, and institutions on this page provide support that
            allows the team RAYS to build, year after year, solar-electric
            vehicles that push the boundaries of what is possible in the fields
            of transportation and alternative energy.
          </p>
        </div>
        <div className="sponsor-container">
          <div className="grid-1-5">
            <h2 className="sponsor-h2">Platinum sponsors</h2>
            <h3 className="sponsor-h3">
              <span className="uppercase">RS.1,25,000 AND ABOVE</span>
            </h3>
            <ul className="sponsor-ul perks sponsor-li">
              <li>Name of the title sponsors "company name-car name"</li>
              <li>
                *Name and Logo on: -{">"}all merchandise and identity cards worn by
                team -{">"}12"X12" logo on the car
              </li>
              <li>*Banners,Flags,Hoardings will be displayed at the event</li>
              <li>
                *Sponsors can Organise an exhibition of the car with the team
              </li>
              <li>
                *Special Mention of the sponsors will be made during all
                important exchange talks at various events
              </li>
            </ul>
            <br></br>
            <a href="/" className="sponsor-button">
              Contact Us
            </a>
          </div>
          <div className="grid-1-5">
            <h2 className="sponsor-h2">
              <span>Gold</span>
              <br /> <span>Sponsors </span>
            </h2>

            <h3 className="sponsor-h3">
              RS.75,000 AND ABOVE<span className="small"></span>
            </h3>
            <ul className="sponsor-ul perks">
              <li>Name of the title sponsors "company name-car name"</li>
              <li>
                *Name and Logo on: -{">"}all merchandise and identity cards worn by
                team -{">"}10"X10" logo on the car
              </li>
              <li>*Banners,Flags,Hoardings will be displayed at the event</li>
              <li>
                *Sponsors can Organise an exhibition of the car with the team
              </li>
              <li>
                *Special Mention of the sponsors will be made during all
                important exchange talks at various events
              </li>
            </ul>
            <a href="/" className="sponsor-button">
              Sign Up
            </a>
          </div>

          <div className="grid-1-5">
            <h2 className="sponsor-h2">Associate sponsors</h2>
            <h3 className="sponsor-h3">
              RS.35,000-75,000<span className="small"></span>
            </h3>
            <ul className="sponsor-ul perks">
              <li>Name of the title sponsors "company name-car name"</li>
              <li>
                *Name and Logo on: -{">"}all merchandise and identity cards worn by
                team -{">"}7"X7" logo on the car
              </li>
              <li>*Banners will be displayed at the event</li>
              <li>
                *Sponsors can Organise an exhibition of the car with the team
              </li>
              <li>
                *Special Mention of the sponsors will be made during all
                important exchange talks at various events
              </li>
            </ul>
            <a href="/" className="sponsor-button">
              Sign Up
            </a>
          </div>
          <div className="grid-1-5">
            <h2 className="sponsor-h2">Class sponsors</h2>
            <h3 className="sponsor-h3">
              <span className="uppercase">BELOW RS.35,000</span>
            </h3>
            <ul className="sponsor-ul perks">
              <li>Name of the title sponsors "company name-car name"</li>
              <li>
                *Name and Logo on: -{">"}all merchandise and identity cards worn by
                team -{">"}5"X5" logo on the car
              </li>
              <li>*Banners,Flags,Hoardings will be displayed at the event</li>
              <li>
                *Sponsors can Organise an exhibition of the car with the team
              </li>
              <li>
                *Special Mention of the sponsors will be made during all
                important exchange talks at various events
              </li>
            </ul>
            <a href="/" className="sponsor-button">
              Sign Up
            </a>
          </div>
        </div>
        <div>
          <ImageSlider slides={SliderData} />
        </div>
      </div>
    );
}

export default Sponsor
