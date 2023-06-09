import React from "react";
import './About.css';

function About(){
    return(
        <div className="about">
            <img className="about_image" src='https://s3-alpha-sig.figma.com/img/370c/d3ba/87f1968974ee12ce5da85059cc83bb81?Expires=1687132800&Signature=oONgoHqdZySkLXUXkCI~pSW3sd1~0wLrF3gyO6gH9m6YfiLwamj5iPP5nw9K9L8UGAi8sAx73ZPwhEy~66~CBuIjeXSjp-pvjyO97nG5cMygqWbOIMLqvI2eDEmbGMctFdqvOxiwccQZ3ZUIOwBb1botpRBJvsavnCbOLtq1-bqgaRhFbszefvXUKy73ETvF1b0qr0rLa5E5TW90Owi9i11xXrxlpfvbc5IahmN6ieUPsA4UfBvUVaNaRTWC6MspXzkrq1SEbRj31YQeQsiNTMEFZCy8Ru5szXWrRex1K0cAS0olR4ec2sYjMqDUk70SC8NMYAtDiKFo9vR-SCrR8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='about_ban'/>
            <div className="about_content">
            <h1 className="about_ban_title">
                Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="about_descr">
            Our mission is to enliven your road trip with the perfect travel van rental. 
            Our vans are recertified before each trip to ensure your travel plans can go off
             without a hitch. (Hitch costs extra 😉)
            </p>
            <p className="about_descr">
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels
            </p>
            <div className="explore_van">
                <h2>Your destination is waiting.<br/>
                Your van is ready</h2>
                <button className="expl_btn"><p className="expl_txt">Explore our vans</p></button>
            </div>
            </div>
            
        </div>
    )
}

export default About;