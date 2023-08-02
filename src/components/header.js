import React from 'react';
import cart from './icons/Shopping--cart.svg';
import search from './icons/search.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import close from './icons/close-btn.svg'
import { useSelector } from 'react-redux';
import closeBtnBlack from './icons/close-btnBlck.svg'
function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [searchState,setSearchState] = useState('')
  const [data, setData] = useState([]);
  const dataFromRedux = useSelector(state => state.data);
  const [closeMenu,setCloseMenu ] = useState ('')

  const SearchHandle =()=>{
    setSearchState(!searchState)
  }

const CloseMenu = ()=> {
  setCloseMenu(!closeMenu)
}

useEffect(() => {
  const fetchData = async () => {
    const jsonURL = '/E-commerce_WebApp/eComerceData.json';

    try {
      const response = await axios.get(jsonURL);
      setData(response.data); 
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };
  fetchData();
}, []);


  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredSearch =
    searchValue !== ''
      ? data.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];

  return (
    <>
    <div className={`Mobile-menu_main ${closeMenu ? `` : `menu-closed`  }`}>
      <img onClick={CloseMenu} className='close-menu_button' src={closeBtnBlack}></img>
    <span className='nav_action__item'> 
        <Link  to='/Basket'><img src={cart} alt="Cart" /></Link> 
        </span>



<Link to="/products?category=Plant%20pots" className="nav-item">
  Plant pots
</Link>
<Link to="/products?category=Ceramics" className="nav-item">
  Ceramics
</Link>
<Link to="/products?category=Tables" className="nav-item">
  Tables
</Link>
<Link to="/products?category=Chairs" className="nav-item">
  Chairs
</Link>
<Link to="/products?category=Crockery" className="nav-item">
  Crockery
</Link>
<Link to="/products?category=Tableware" className="nav-item">
  Tableware
</Link>
<Link to="/products?category=Cutlery" className="nav-item">
  Cutlery
</Link>



</div>


    <header>
    <div  onClick={CloseMenu} className='Mobile-menu'>
<span></span>
<span></span>
<span></span>

</div>


   

      <Link to ='/E-commerce_WebApp'><h1 className="logo">Avion</h1></Link> 

      <nav>
        <Link to="/products?category=Plant%20pots" className="nav-item">
          Plant pots
        </Link>
        <Link to="/products?category=Ceramics" className="nav-item">
          Ceramics
        </Link>
        <Link to="/products?category=Tables" className="nav-item">
          Tables
        </Link>
        <Link to="/products?category=Chairs" className="nav-item">
          Chairs
        </Link>
        <Link to="/products?category=Crockery" className="nav-item">
          Crockery
        </Link>
        <Link to="/products?category=Tableware" className="nav-item">
          Tableware
        </Link>
        <Link to="/products?category=Cutlery" className="nav-item">
          Cutlery
        </Link>
      </nav>

      <div className="nav_action">
       <span onClick={SearchHandle} className= {'nav_action__item'}> <img  src={search} alt="Search" /></span> 
       <span className='nav_action__item'> 
            <div className='basket_items__quantity'><p> 
      {dataFromRedux.length === 0
      ? 0
      : dataFromRedux.length >= 100
      ? `99+`
      : dataFromRedux.length}</p></div>
        <Link  to='/Basket'><img src={cart} alt="Cart" /></Link> </span>



      </div>

    

    </header>
 

    <div className={`dark-bg ${searchState ? 'activated' : ''}`}>

        <img onClick={SearchHandle}  className='close-search' src={close}/>
        <input
          className='search-field'
          name='search-value'
          value={searchValue}
          placeholder='Find product'
          onChange={handleInputChange}
          type='search'
        />

          
        <div className='search-result'>
          {filteredSearch.length > 0 ? (
            filteredSearch.map((item) => (
              <Link  onClick={SearchHandle}  to={`/Product/${item.id}`}>
                <div className='search-result--item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No matching results.</p>
          )}
        </div>
        </div>

   
        </>
  );
}

export default Header;
