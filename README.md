# README

## Welcome to [Amazoon](https://amazoonmia.herokuapp.com/#/)!
Amazoon is a scaled down replication of Amazon.com. The design aspects of Amazoon parallel those on the original Amazon site; however, the product offerings on Amazoon are limited to the books I've enjoyed reading over the past couple of years. The clone is meant to show my CRUD design capabilities and implementation. I hope you enjoy!

## Table of Contents
1.  [Overview](#overview)
2.  [Technologies](#technologies)
3.  [Features](#features)

## Overview
Amazoon is a website where users can buy kindle books. (The product list is comprised of my favorite reads over the past couple of years). Amazoon is a clone of Amazon, a popular ecommerce website.

## Technologies
JavaScript , React / Redux , Ruby on Rails , postgreSQL , AWS , Heroku , Webpack, CSS3

Amazoon is built using a Rails backend, PostgreSQL for database management, jQuery/AJAX for database requests, React & Redux for frontend / state management and CSS for the webpage styling. AWS S3 service used to store product images.

## Features

### Search
The search function uses Regex to streamline the search process. Users are able to search by title, author, or book category.
![alt text](https://amazoon-seeds.s3.amazonaws.com/Screen+Shot+2021-11-12+at+1.05.26+PM.png)
```
        const filteredProducts = () => {
            const searchTerm = this.props.searchQuery
            const bits = searchTerm
                .toLowerCase()
                .split(' ')
                .filter(function(bit){
                    return bit.trim() !== '';
                });
            if(bits.length) {
                const searchTerm = new RegExp(bits.join('|'));
                const returnList = this.props.products.filter( product => {
                    let searchString = '';
                     
                    for(const key in product) {
                        if (key !== 'description' && key !== 'photoUrl') {
                            if (product.hasOwnProperty(key) && product[key] !== '') {
                            searchString += product[key].toString().toLowerCase().trim() + ' ';
                            }
                        }
                    }
                    
                    return searchString.match(searchTerm)
                    });
                
                return returnList;
            }
            
        }
```

### Product List Page
The product list page highlights shows a list of all products by category.
![alt text](https://amazoon-seeds.s3.amazonaws.com/Screen+Shot+2021-11-12+at+1.05.59+PM.png)

### Individual Product Page
The individual product page shows product details and offers users the ability to add items to their cart. Users are able to specify product quantities and add to cart. Users can also create, update and delete reviews if signed in.
![alt text](https://amazoon-seeds.s3.amazonaws.com/Screen+Shot+2021-11-12+at+1.06.46+PM.png)

### Shopping Cart
The shopping cart page shows what is present in a user's cart. Cart quantities can be changed within the cart. Quantities are also adjusted should users add more of the same product to the existing cart.
![alt text](https://amazoon-seeds.s3.amazonaws.com/Screen+Shot+2021-11-12+at+1.07.08+PM.png)


