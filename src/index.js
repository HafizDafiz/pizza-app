import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data.js"
import Order from "./menu.js"
import "./index.css"


function Header() {
return(
    <div>
        <h1 style={{color:"gray", fontsize: "24px", textAlign: "center"}}>Our Menu</h1>
        <h1 style={{color:"gray", fontsize: "24px", textAlign: "center"}}>Authentic Italian cuisine, all from our stone oven</h1>
    </div>
)

}
function Navbar() {
    return (
        <nav className="navbar">
            <h1 style={{ color: "orange", fontSize: "32px", textTransform: "uppercase", textAlign: "center"}}>Hafiz Pizza Co.</h1>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

function Pizza({ photoName, name, ingredients, price }) {
    
    return (
        <div className="Pizza">
            <h2>{name}</h2>
            <img src={photoName} />
            <p>{ingredients}</p>
            <p>${price}</p>
        </div>
    );
}
function Menu() {
    return (
        <div className="menu">
            {pizzaData.map((pizza) => (
               <Pizza key={pizzaData.name} {...pizza} />
                
            ))}
        </div>
    );
}
function order(){

}


function Footer() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour < 22;

    return (
        <footer>
            {isOpen ? (
                <Order />  
            ) : (
                <h2 style={{ color: "red", fontSize: "22px" }}>Sorry, we're closed.</h2>
            )}
        </footer>
    );
}

export default Footer;


    

function App() {
    return (
        <div className="container">
            <Navbar />
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);