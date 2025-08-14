import React, { Component } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import EditProductForm from './EditProductForm';

// Backend API URL
const API_URL = 'http://35.195.226.209:5000/api/products';

class ProductControl extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            actualProductList: [],
            selectedProduct: null,
            editProduct: false,
        };
    }
    
    componentDidMount() {
        axios.get(API_URL)
            .then(res => {
                console.log(res)
                this.setState({
                    actualProductList: res.data
                })
            })
            .catch(err => console.error('Error fetching products:', err));
    }

    handleEditProductClick = () => {
        console.log('HandleEditClick reached!!')
        this.setState({ editProduct: true });
    }

    handleAddButtonClick = (id) => {
        const BuyProduct = this.state.actualProductList.find(product => product._id === id);
        BuyProduct.quantity = BuyProduct.quantity - 1;
        if (BuyProduct.quantity <= 0) {
            BuyProduct.quantity = "Product is not Available";
        }
        this.setState({ selectedProduct: BuyProduct });
    }

    handleClick = () => {
        if (this.state.editProduct) {
            this.setState({ editProduct: false });
        } else if (this.state.selectedProduct != null) {
            this.setState({ formVisibleOnPage: false, selectedProduct: null });
        } else {
            this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage }));
        }
    }

    handleAddingNewProduct = (newProduct) => {
        axios.post(API_URL, newProduct)
            .then(res => {
                console.log(res.data);
                this.setState(prevState => ({
                    actualProductList: [...prevState.actualProductList, res.data],
                    formVisibleOnPage: false
                }));
            })
            .catch(err => console.error('Error adding product:', err));
    }

    handleDeletingProduct = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log('Error deleting product:', err));

        this.setState(prevState => ({
            actualProductList: prevState.actualProductList.filter(product => product._id !== id),
            formVisibleOnPage: false,
            selectedProduct: null
        }));
    }

    handleChangingSelectedProduct = (id) => {
        const selectedProduct = this.state.actualProductList.find(product => product._id === id);
        this.setState({ selectedProduct });
    }

    handleEditingProduct = (editedProduct) => {
        axios.put(`${API_URL}/${this.state.selectedProduct._id}`, editedProduct)
            .then(res => console.log(res.data))
            .catch(err => console.error('Error editing product:', err));

        this.setState({
            editProduct: false,
            formVisibleOnPage: false
        });
        window.location = '/';
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.editProduct) {
            currentlyVisibleState = <EditProductForm product={this.state.selectedProduct} onEditProduct={this.handleEditingProduct} />;
            buttonText = "Back to Product Detail";
        } else if (this.state.selectedProduct != null) {
            currentlyVisibleState = <ProductDetail
                product={this.state.selectedProduct}
                onBuyButtonClick={this.handleAddButtonClick}
                onDeleteProduct={this.handleDeletingProduct}
                onEditProductClick={this.handleEditProductClick}
            />;
            buttonText = "Back to product list";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProduct} />;
            buttonText = "Back to product list";
        } else {
            currentlyVisibleState = <ProductList productList={this.state.actualProductList} onProductSelection={this.handleChangingSelectedProduct} />;
            buttonText = "Add a product";
        }

        return (
            <React.Fragment>
                <AddProduct
                    buttonText={buttonText}
                    whenButtonClicked={this.handleClick}
                />
                {currentlyVisibleState}
            </React.Fragment>
        );
    }
}

export default ProductControl;
