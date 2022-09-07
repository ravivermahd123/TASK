import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios'





function App() {
  const [navbar, setNavbar] = useState({});
  const [header, setHeader] = useState({});
  const [main_product, setMain_product] = useState({});
  const [bids, setBids] = useState([])
  

  useEffect(() => {
    axios.get('https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/?format=json').then((res) => {
        console.log(res.data);
       
        // console.log(navbar);
        setNavbar(res.data.nav_bar)
        setHeader(res.data.heading);
        setMain_product(res.data.main_product)
        setBids(res.data.bids)
        // console.log(main_product);

    }).catch((err) => {
      console.log(err);
    })
},[]);

  return (
    <div className="App">
     
<header id="container">
<div id="nav-bar">
	<div id="nav-belt">
		<div className="nav-left">
			<div id="nav-logo">
				<a href="/"><img src={header.svg} width="10px" height="10pc"/></a>
			</div>
		</div>
		<div className="nav-fill">
			<div id="nav-search">
				<form id="nav-search-bar-form" >
					
					<div className="nav-fill" >
						<input type="text" placeholder='Enter Here'/>
					</div>
					<div className="nav-right" >
						<button type="submit">Search</button>
					</div>
				</form>
			</div>
		</div>
		<div className="nav-right">
			<div id="nav-tools">
				<a href="/">Live Birds</a>
				<a href="/"><img src={navbar.person_icon}/>
</a>
				<a href="/">Help & Support</a>
			</div>
		</div>
	</div>
	
</div>
</header>
{/* banner 2 */}
<div className="center">
  
  <h1><img src ="https://ohlocal-media.s3.ap-south-1.amazonaws.com/web-assignment-assets/bids_vector.svg" width="70px" height="70px"  />{header.heading}</h1>
  <small>{header.sub_heading}</small>
</div>

{/* watch */}
<div className='watchname'>

<div className='watch'>
<div className="row" >
  <div className="column">
    <div className="card">
    <img src ="https://ohlocal-media.s3.ap-south-1.amazonaws.com/web-assignment-assets/main_image.svg" width="100%" height="300px" />
    </div>
  </div>

  <div className="column">
    <div className="card">
      <h5>{main_product.product_title}</h5>
      <p  style={{color:'lightgray' }}>{main_product.product_pipeline}</p>
      <h3 ><img src={main_product.online_price_icon} width="30px" height="30px" /> <span >{main_product.online_price}</span></h3>
      <small>Oty:{main_product.quantity}</small>
      <p style={{  textDecoration: 'underline'}} >All detail</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h1>Status <img src ={main_product.status_icon} width="15px" height="15px"/></h1>
      <small>Time Remaining</small>
      <h4 style ={{color:'red'}}>{main_product.time_remaining} minutes</h4>

      <p  style={{color:'lightgray' }}>BIDS PLACED | <span style={{color:'green' }}>{main_product.bid_placed}</span></p>
    </div>
  </div>
  
 
</div>


</div>


</div>
{/* card */}
<div className='watchname'>

<div className='watch'>
<div className="row" >

{bids.map(product => (

        <div className="column">
        <div className="card">
          <small>{product.shop_address}</small>
        <div style ={{float:'right'}}> <img src ={product.shop_image} width="70px" height ="70px"  /><br/><small style={{float:'left'}}>{product.shop_name}</small></div> 
          <h2 style={{	color:'rgb(168, 131, 51)',}}>{product.offer_price}</h2>
          <p>Delivery & Service</p>
          <p  style={{color:'lightgray' }}><img src= {product.express_delivery_icon} width="20px"/>Express delivery     <img src = {product.check_icon} width="15px"/></p>
          <p  style={{color:'lightgray' }}><img src ={product.return_option_icon} width="20px"/>Return option <img src = {product.check_icon} width="15px"/></p>
          <small style={{color:'lightgray' }}>{product.product_name}</small><br/><br/>
        <div >  <button  className='btn1'>Buy Now</button></div>

        </div>
        </div>
           
          ))}  


  
 
</div>


</div>


</div>

{/* alternate product  */}
<div className='alternateProduct '>
<div className = "row " >

{bids.map(product => (

  <div className='alternate'>
	<div className="course">
		<div className="course-preview">
			<img src = {main_product.main_product_svg} width ="100px" style={{marginTop:'20px'}}/>
		</div>
		<div className="course-info">
			<div className="progress-container">
			
				
			</div>
			<h6>{product.alternate_product_details.product_name}</h6>
      <h5><img src={product.online_price_icon} width="20px" height="20px" /> <span style = {{textDecoration :' line-through'}}>{product.alternate_product_details.online_price}</span><span style={{	color:'rgb(168, 131, 51)',}}>{product.alternate_product_details.offer_price}</span></h5>

			<button className="btn">Order Now</button>
     </div>
		</div>
	</div>
 ))} 
 
</div>
</div>






    </div>
  );
}

export default App;
