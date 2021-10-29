import React from 'react'
import Header from '../header/header_container'
import Product from '../product/product';
import Footer from '../footer/footer'
import SubHeader from '../header/sub_header'
import shortid from 'shortid';
import ProductShow from '../product_pages/product_show'


export default class Search extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchProducts();
    }
    
    render() {
               
        const filteredProducts = () => {
            const searchTerm = this.props.searchQuery
            // Tokenize the search terms and remove empty spaces
            const tokens = searchTerm
                        .toLowerCase()
                        .split(' ')
                        .filter(function(token){
                            return token.trim() !== '';
                        });
            if(tokens.length) {
                //  Create a regular expression of all the search terms
                const searchTermRegex = new RegExp(tokens.join('|'));
                const filteredList = this.props.products.filter( product => {
                // Create a string of all object values
                    let bookString = '';
                     
                    for(const key in product) {
                        if (key !== 'description' && key !== 'photoUrl') {
                            if (product.hasOwnProperty(key) && product[key] !== '') {
                            bookString += product[key].toString().toLowerCase().trim() + ' ';
                            }
                        }
                    }
                    
                    // Return book objects where a match with the search regex if found
                    return bookString.match(searchTermRegex)
                    });
                
                return filteredList;
            }
            
        }
       
        const results =  this.props.searchQuery === " " ? (
                            this.props.products.map( product => {
                                    return <ProductShow key={shortid.generate()} product={product}/>
                                    }
                                )
                        ) : (
                            filteredProducts().length !== 0 ? (
                                filteredProducts().map( product => {
                                    return <ProductShow key={shortid.generate()} product={product}/>
                                })
                            ) : (
                                        <h3 className="noMatches">
                                            No matches!
                                        </h3>
                                )
                                    
                                )

        
        return(
            <div>
                <div>
                    <Header {...this.props} />
                </div>
                <div>
                    <SubHeader/>
                </div>
                <div className="productPage__home">
                    <div className="productPage__homeSideBar">
                        <div className="productPage__homeSideBarBox1">
                            <h4>Condition</h4>
                            <p>New</p>
                            <p>Used</p>
                            <p>Renewed</p>
                        </div>
                        <div className="productPage__homeSideBarBox2">
                            <h4>Amazon Prime</h4>
                            <img src="https://amazoon-seeds.s3.amazonaws.com/prime_logo.png"/>
                        </div>
                        <div className="productPage__homeSideBarBox3">
                            <h4>Climate Pledge Friendly</h4>
                            <p>Climate Pledge Friendly</p>
                        </div>
                        <div className="productPage__homeSideBarBox4">
                            <h4>Customer Reviews</h4>
                            <p> ⭐⭐⭐⭐ </p>
                            <p> ⭐⭐⭐ </p>
                            <p> ⭐⭐ </p>
                            <p> ⭐ </p>
                        </div>
                    </div>
                    <div>
                        {results}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    } 
}    