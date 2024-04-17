import image from "./img/image-product-desktop.jpg";
function App() {


  
return(
<>
<div className=" grid sm:grid-cols-1  md:grid-cols-2  ">
<div>
<img src={image}/>
</div>
<div className="m-32">
 <h3 className=" font-sans py-2 text-gray-500 tracking-widest">PERFUME</h3> 
 <p className="font-bold text-3xl font-serif w-64 py-4">Gabrielle Essence Eau De Parfum </p>
 <p className="text-gray-500  w-64">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
<div className="flex my-4">
<p className="text-3xl  font-bold text-green-800 font-fraunces">$149.99</p>
<p className="text-sm line-through p-2 px-6">$169.99</p>
</div>
<button className="bg-green-800 rounded-lg text-white w-64 h-12 my-4 hover:bg-green-700 ">Add to Cart</button>
</div>
</div></>
);
}

export default App;
