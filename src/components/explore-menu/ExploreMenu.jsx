import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { Link } from 'react-router-dom';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis hic nobis est porro! Fugit vel reiciendis ducimus quod error!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          const formattedMenuName = item.menu_name.toLowerCase().replace(/\s+/g, '-');
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt={item.menu_name} />
              <Link to={`/${formattedMenuName}`}>
                <p>{item.menu_name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
