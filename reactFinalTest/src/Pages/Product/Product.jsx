import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import './Product.css';
import Modal from '../../Components/Common/Modal/Modal';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleModal = (id) => {
    setSelectedId(id);
    setModal(true);
  };

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://fakestoreapi.in/api/products');
      const data = response?.data.products;
      const categories = [...new Set(data.map((item) => item.category))];
      setCategory(categories);
      setFilterProduct(data);
      setProducts(data);
    } catch (error) {
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategory = (cat) => {
    if (cat === "All") {
      setFilterProduct(products);
    } else {
      const filterData = products.filter((item) => item.category === cat);
      setFilterProduct(filterData);
    }
  };

  const handleSearch = () => {
    const filterSearch = products.filter((item) => 
      item.title.toLowerCase().includes(search.toLowerCase()) || 
      item.category.toLowerCase().includes(search.toLowerCase())
    );
    setFilterProduct(filterSearch);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Search products..." 
        />
        <select onChange={(e) => handleCategory(e.target.value)}>
          <option value="All">All</option>
          {category.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}
      <div className='product-container'>
        {filterProduct.map((item) => (
          <div key={item.id} onClick={() => handleModal(item.id)} className='product-item'>
            <img className='product-img' src={item.image} alt={item.title} />
            <h2 className='product-title'>{item.title.slice(0, 15)}...</h2>
            <p className='product-desc'>{item.description.slice(0, 88)}...</p>
            <p className='product-price'>Price: ${item.price}</p>
          </div>
        ))}
        <Modal 
          modal={modal} 
          setModal={setModal} 
          selectedId={selectedId} 
          data={filterProduct} 
          onClose={() => {
            setModal(false);
            setSelectedId(null); // Reset selectedId on close
          }} 
        />
      </div>
    </>
  );
};

export default Product;
