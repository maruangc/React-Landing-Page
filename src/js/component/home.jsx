import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
  return (
    <div>
       <Navbar/>
	   <Header/>
	   <div className="container my-4">
			<div className="row ">
					<Cards image="https://picsum.photos/200/300"/>
					<Cards image="https://picsum.photos/200/301"/>
					<Cards image="https://picsum.photos/201/300"/>
					<Cards image="https://picsum.photos/202/300"/>
			</div>
		</div>
	   <Footer/>
    </div>
	
  );
};

export default Home;
