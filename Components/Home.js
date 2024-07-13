import React from "react";
import biryaniimge from '../biryaniimge.png';
import rollimge from '../rollsimge.png';
import noodles from '../noodles.png';
import pizza from '../pizza.png';
import icecream from '../icecream.png';
import juices from '../juice.png';
const Home = () => {
  return (
    <div class='homeimg'>
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <div class="home">
    <h1>Foodies welcome here</h1>
    <h2>Food that makes you wow.Feel the yoy of mouthwatering food.</h2>
</div>
        <button  type="button" class="button b1" >OrderNow</button>
        <div class='menustyle'>
        <h2>..........EXPLORE MENU............</h2>
        <div class='container1'>
         <div class='box'>
         <img src={biryaniimge} alt=""/> 
         </div>
         <div class='box'>
         <img src={rollimge} alt="" />
         </div>
         <div class='box'>
         <img src={noodles} alt="" />
         </div>
         <div class='box'>
         <img src={pizza} alt="" />
         </div>
         <div class='box'>
         <img src={icecream} alt="" />
         </div>
         <div class='box'>
         <img src={juices} alt="" />
         </div>
         
         </div>
          
         <div class='biryaniimge'>
         <img src={biryaniimge} alt=""/>
         <ul>
            <li>Dum Biryani</li>
            <li>Mutton Biryani</li>
            <li>Mushroom Biryani</li>
            <li>Special Chicken Biryani</li>
            <li>Prawns Biryani</li>
         </ul>
         </div>
         <div class='rollimge'>
         <img src={rollimge} alt="" />
         <ul>
            <li>Chicken Rolls</li>
            <li>Veg Rolls</li>
            <li>Egg Rolls</li>
            <li>Spring Rolls</li>
            <li>Paneer Rolls</li>
         </ul>
         </div>
         <div class='noodles'>
         <img src={noodles} alt="" />
         <ul>
            <li>Chicken noodles</li>
            <li>Veg noodles</li>
            <li>Egg noodles</li>
            <li>Chicken Egg noodles</li>
            <li>Gobi noodles</li>
         </ul>
         </div>
         <div class='pizza'>
         <img src={pizza} alt="" />
         <ul>
            <li>Tandoori Chicken pizaa</li>
            <li>BBQ Chicken pizza</li>
            <li>Dominos pizza</li>
            <li>Cheese pizza</li>
            <li>Corn pizza</li>
         </ul>
         </div>
         <div class='icecream'>
         <img src={icecream} alt="" />
         <ul>
            <li>Vanilla Icecream</li>
            <li>Chocolate Icecream</li>
            <li>Strawberry Icecream</li>
            <li>pistachio Icecream</li>
            <li>Butterscotch Icecream</li>
         </ul>
         </div>
         <div class='juices'>
         <img src={juices} alt="" />
         <ul>
            <li>Orange juice</li>
            <li>Apple juice</li>
            <li>Lemon juice</li>
            <li>Mixed fruit juice</li>
            <li>Sprite</li>
            <li>Water</li>
         </ul>
         </div>
         
         

         </div>
         <div class="Contact">
    <div class="container">
    
        <div class="content">
        <h1>Contact</h1>
         <h2>Contact:1234567891</h2>
            <h2>Email:restaurant@gmail.com</h2>
            <h2>Address:4/346,Jaynagar,Banglore</h2>
        </div>
    </div>
</div>
<div class="about-us">
    <div class="container">
        <h2>About Us</h2>
        <div class="about-content">
         <p>Welcome to Delicious Restaurant, where taste meets excellence. Founded in 2010, our mission has always been to provide a delightful dining experience through our carefully crafted menu, warm hospitality, and charming ambiance.</p>
            <p>We take pride in sourcing the freshest ingredients from local farmers and creating dishes that celebrate flavors from around the world. Our team of talented chefs ensures that every plate leaving our kitchen is a masterpiece.</p>
            <p>Whether you're here for a casual brunch, a romantic dinner, or a family celebration, we strive to exceed your expectations and create memories that linger long after your meal.</p>
        <p>THANK YOU</p>
        </div>
    </div>
</div>
        </div>

</div>
  )
};

export default Home;