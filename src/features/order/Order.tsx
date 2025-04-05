const Order = () => {
    return (
        <div className="max-w-container mx-auto py-16">
            <div className="flex items-center gap-8 mb-5">
         <h3 className="text-3xl font-bold text-darkSlate">Order ID: #5JDZEJ</h3>
         <p className="text-red-600 px-2.5 py-1 bg-red-200 inline rounded-md">
           Undelivered
         </p>
       </div>
 
       <div>
         <h3 className="heading-tertiary">Order Item</h3>
         <ul className="w-1/2 max-h-96 overflow-scroll mb-5">
           <li className="flex gap-16 justify-between items-center py-5 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-lightGray">
             <div className="flex items-center gap-4">
               <div className="max-w-[7.5rem] rounded-md overflow-hidden">
                 <img className="w-full h-full" src="test" alt="bike" />
               </div>
               <p className="font-bold">1x</p>
               <p>Classic Red Jogger Sweatpants</p>
             </div>
 
             <p className="font-bold">$48.99</p>
           </li>
         </ul>
       </div>
        </div>
    );
};

export default Order;