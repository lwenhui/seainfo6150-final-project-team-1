import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Catrgories.module.css';

const Categories = ({ categories }) => (
  <ul className={style.categories}>
    {
      categories.map(category => {
        return (
          <li key={category.id}>
            <Link to={`/products/${category.id}`} className={style.link}>
              <div className={style.category}>
                <img src={category.img.sm} alt = {category.name}/>
                <span>{category.name}</span>
              </div>
            </Link>
          </li>
        );
      })
    }
  </ul>
);

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Categories;
