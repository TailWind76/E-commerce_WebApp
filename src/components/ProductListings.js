import React, { useState, useEffect } from 'react';
import arrow from './icons/Caret--down.svg';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

function ProductListings() {
  const [isCategoryFilterOpen, setCategoryFilterOpen] = useState(false);
  const [isPriceFilterOpen, setPriceFilterOpen] = useState(false);
  const [isBrandFilterOpen, setBrandFilterOpen] = useState(false);
  const { pathname } = useLocation()
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);
  const [selectedPriceItems, setSelectedPriceItems] = useState([]);
  const [selectedBrandItems, setSelectedBrandItems] = useState([]);

  const [productCount, setProductCount] = useState(5);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialSelectedCategory = queryParams.get('category') || '';
    
    useEffect(() => {
      setSelectedCategoryItems((prevSelectedItems) =>
        initialSelectedCategory ? [...prevSelectedItems, initialSelectedCategory] : prevSelectedItems
      );
    }, [initialSelectedCategory]);


  const handleViewMoreClick = () => {
    
    setProductCount((prevProductCount) => prevProductCount + 5);
  };


  const toggleCategoryFilter = () => {
    setCategoryFilterOpen(!isCategoryFilterOpen);
  };

  const togglePriceFilter = () => {
    setPriceFilterOpen(!isPriceFilterOpen);
  };

  const toggleBrandFilter = () => {
    setBrandFilterOpen(!isBrandFilterOpen);
  };

  const handleCategoryItemClick = (item, event) => {
    event.stopPropagation();

    setSelectedCategoryItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((selectedItem) => selectedItem !== item)
        : [...prevSelectedItems, item]
    );
  };

  const handlePriceItemClick = (item, event) => {
    event.stopPropagation();

    setSelectedPriceItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((selectedItem) => selectedItem !== item)
        : [...prevSelectedItems, item]
    );
  };

  const handleBrandItemClick = (item, event) => {
    event.stopPropagation();

    setSelectedBrandItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((selectedItem) => selectedItem !== item)
        : [...prevSelectedItems, item]
    );
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {



    const fetchData = async () => {
      try {
        const response = await axios.get('/E-commerce_WebApp/eComerceData.json');
        setData(response.data);
      } catch (error) {
        console.error('Error code:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [selectedCategoryItems, selectedPriceItems, selectedBrandItems, data]);

  const filterData = () => {
    let filtered = data;
  
    if (selectedBrandItems.length > 0) {
      filtered = filtered.filter((item) => selectedBrandItems.includes(item.brand));
    }
  
    if (selectedCategoryItems.length > 0) {
      filtered = filtered.filter((item) => selectedCategoryItems.includes(item.category));
    }
  
    if (selectedPriceItems.length > 0) {
      filtered = filtered.filter((item) => {
        const price = item.price;
        if (selectedPriceItems.includes('0-100') && price >= 0 && price <= 100) {
          return true;
        }
        if (selectedPriceItems.includes('101-249') && price >= 101 && price <= 249) {
          return true;
        }
        if (selectedPriceItems.includes('250+') && price >= 250) {
          return true;
        }
        return false;
      });
    }
  
    setFilteredData(filtered);
  };

  return (
    <section className="ProductListing">
      <div className="ProductListing_intro">
        <h2>All products</h2>
      </div>

      <div className="ProductListing_main">
        <div className="ProductListing_main__filters">
          <div className="filter_items">
            <span
              className={`filter-category ${isCategoryFilterOpen ? 'open' : ''}`}
              onClick={toggleCategoryFilter}
            >
              <p>Category</p> <img src={arrow} />
              <div className={`filter-block ${isCategoryFilterOpen ? 'open' : ''}`}>
                <p
                  className={selectedCategoryItems.includes('Plant pots') ? 'selected' : ''}
                  onClick={(event) => handleCategoryItemClick('Plant pots', event)}
                >
                  Plant pots
                </p>
                <p
                  className={selectedCategoryItems.includes('Ceramics') ? 'selected' : ''}
                  onClick={(event) => handleCategoryItemClick('Ceramics', event)}
                >
                  Ceramics
                </p>
                <p
                  className={selectedCategoryItems.includes('Tables') ? 'selected' : ''}
                  onClick={(event) => handleCategoryItemClick('Tables', event)}
                >
                  Tables
                </p>
                <p
                  className={selectedCategoryItems.includes('Chairs') ? 'selected' : ''}
                  onClick={(event) => handleCategoryItemClick('Chairs', event)}
                >
                  Chairs
                </p>
                <p
                  className={selectedCategoryItems.includes('Crockery') ? 'selected' : ''}
                  onClick={(event) => handleCategoryItemClick('Crockery', event)}
                >
                  Crockery
                </p>
                <p
                  className={selectedCategoryItems.includes('Tableware') ? 'selected' : ''}
                  onClick={(event) => handleCategoryItemClick('Tableware', event)}
                >
                  Tableware
                </p>
                <p
                  className={selectedCategoryItems.includes('Cutlery') ? 'selected' : ''}
                  onClick={(event) => handleCategoryItemClick('Cutlery', event)}
                >
                  Cutlery
                </p>
              </div>
            </span>

            <span
              className={`filter-price ${isPriceFilterOpen ? 'open' : ''}`}
              onClick={togglePriceFilter}
            >
              <p>Price</p> <img src={arrow} />
              <div className={`filter-block ${isPriceFilterOpen ? 'open' : ''}`}>
                <p
                  className={selectedPriceItems.includes('0-100') ? 'selected' : ''}
                  onClick={(event) => handlePriceItemClick('0-100', event)}
                >
                  0-100
                </p>
                <p
                  className={selectedPriceItems.includes('101-249') ? 'selected' : ''}
                  onClick={(event) => handlePriceItemClick('101-249', event)}
                >
                  101-249
                </p>
                <p
                  className={selectedPriceItems.includes('250+') ? 'selected' : ''}
                  onClick={(event) => handlePriceItemClick('250+', event)}
                >
                  250+
                </p>
              </div>
            </span>

            <span
              className={`filter-brand ${isBrandFilterOpen ? 'open' : ''}`}
              onClick={toggleBrandFilter}
            >
              <p>Brand</p> <img src={arrow} />
              <div className={`filter-block ${isBrandFilterOpen ? 'open' : ''}`}>
                <p
                  className={selectedBrandItems.includes('EnchantLiving') ? 'selected' : ''}
                  onClick={(event) => handleBrandItemClick('EnchantLiving', event)}
                >
                  EnchantLiving
                </p>
                <p
                  className={selectedBrandItems.includes('LuminaHome') ? 'selected' : ''}
                  onClick={(event) => handleBrandItemClick('LuminaHome', event)}
                >
                  LuminaHome
                </p>
                <p
                  className={selectedBrandItems.includes('EleganceCrafts') ? 'selected' : ''}
                  onClick={(event) => handleBrandItemClick('EleganceCrafts', event)}
                >
                  EleganceCrafts
                </p>
                <p
                  className={selectedBrandItems.includes('TranquilHaus') ? 'selected' : ''}
                  onClick={(event) => handleBrandItemClick('TranquilHaus', event)}
                >
                  TranquilHaus
                </p>
              </div>
            </span>
          </div>
        </div>

        <div className='ProductListing__products'>
        {filteredData.slice(0, productCount).map((item) => ( 
      <Link to={`/Product/${item.id}`} > <div className="ProductListing__products_item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>£{item.price}</p>
          </div></Link>
        ))}
      </div>

      <button onClick={handleViewMoreClick}>View more</button>
      </div>
    </section>
  );
}

export default ProductListings;
