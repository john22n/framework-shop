import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';



import "./Landing.css";

import { addToCart } from "../../ducks/product";



export function Landing( { addToCart, featuredProducts } ) {
    const products = featuredProducts.map( (product, index) => (

        <FeaturedProduct
            key={index * Math.random() * 10}
            addToCart={ () => addToCart(product.id)}
            description={product.description}
            logo={product.logo}
            name={product.name}
            onSale={product.onSale}
            price={product.price}
        />
));

	return (
		<main className="landing">
            {console.log(products)}
            <h1>Featured Products</h1>
			<div className="landing__products-wrapper">
                {products}
			</div>
            <Link className="landing__full-shop-link" to="/shop">
                <h1>Take me to the Full Shop</h1>
            </Link>
		</main>
	);
}

function mapStateToProps( { products } ) {
	return { featuredProducts: products.filter( product => product.featured || product.onSale ) };
}

export default connect( mapStateToProps, { addToCart } )( Landing );
