import React from 'react';
import biryaniimge from '../biryaniimge.png';
import rollimge from '../rollsimge.png';
import noodles from '../noodles.png';
import pizza from '../pizza.png';
import icecream from '../icecream.png';
import juices from '../juice.png';
const Menu=()=>{
    return(
        <div class='menustyle'>
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
    )
}
export default Menu;