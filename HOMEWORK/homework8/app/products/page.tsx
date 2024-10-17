'use client'
import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Product() {
   const [name, setName] = useState('');
   const [price, setPrice] = useState(0);
   const [is_new, setIs_new] = useState(false);
   const [image_url, setImage_url] = useState('');

   const [products, setProducts] = useState(
      [
         {
            id: 1,
            name: "Fender Guitar", price: 300,
            image_url: "https://images.unsplash.com/photo-1722050090741-a19630b90e5a?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            like: 20, is_new: true
         }, {
            id: 2,
            name: "Electric Guitar", price: 1299,
            image_url: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            like: 1572, is_new: true
         }, {
            id: 3,
            name: "Piano", price: 3500,
            image_url: "https://images.unsplash.com/photo-1690310588514-511dfaf88e3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            like: 2345, is_new: false
         }, {
            id: 4,
            name: "Violin", price: 750,
            image_url: "https://images.unsplash.com/photo-1528032947483-4e1df543253a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            like: 987, is_new: true
         }, {
            id: 5,
            name: "Ukulele", price: 150,
            image_url: "https://images.unsplash.com/photo-1646025242962-fac01d0e35f2?q=80&w=1239&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            like: 456, is_new: false
         }, {
            id: 6,
            name: "French Horn", price: 1250,
            image_url: "https://images.unsplash.com/photo-1590054387835-ab72678fef01?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            like: 896, is_new: false
         },

      ]);

   function addProduct() {
      setProducts([...products, {
         id: products[products.length - 1].id + 1,
         name: name,
         price: price,
         image_url: image_url,
         like: 0,
         is_new: is_new,
      }]);
   }

   return (
      <section>
         <span className=" mt-5 relative flex justify-center">
            <div className=" absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
         </span>
         <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
               <h2 className="text-xl font-bold text-[#775b45] sm:text-3xl">Our Instrument Collection</h2>
               <p className="mt-4 max-w-md text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                  dicta incidunt est ipsam, officia dolor fugit natus?
               </p>
            </header>
            <ul className="my-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
               {products.map((item) =>
                  <li key={item.id}>
                     <a href="#" className="relative shadow-xl group block overflow-hidden rounded-3xl bg-black">
                        <Menu as="div" className="absolute end-0 z-10 mt-2 w-56 m-3">
                           <div className="absolute end-0">
                              <MenuButton className=" rounded-full bg-white p-2 text-center shadow-sm  hover:bg-gray-200">
                              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z" stroke="#7a7a7a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#7a7a7a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z" stroke="#7a7a7a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                              </MenuButton>
                           </div>

                           <MenuItems transition className="absolute top-8 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                              <div className="py-1">
                                 <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                       Edit Product
                                    </a>
                                 </MenuItem>
                                 <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-red-600">
                                       Delete Product
                                    </a>
                                 </MenuItem>
                              </div>
                           </MenuItems>

                        </Menu>
                        <img src={item.image_url} alt="product_image" className="h-[350px] w-full object-cover transition duration-100 group-hover:scale-110 sm:h-[350px]" />
                        <div className="py-5 px-[3em] relative bg-white pt-3">
                           <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4">{item.name}</h3>
                           <p className="flex justify-between mt-2">
                              <span className="tracking-wider text-gray-900"> ฿{item.price}</span>
                              <p className="flex gap-1">
                                 <svg className="" height="25" width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                 <span className="tracking-wider text-gray-900"> {item.like}</span>
                              </p>
                           </p>
                        </div>
                     </a>
                  </li>

               )}

            </ul>
         </div>


         <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                  <div className="lg:col-span-2 lg:py-12">
                     <p className="max-w-xl text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem, quia ipsam culpa pariatur cum repellendus, ipsum commodi consectetur soluta iste reiciendis dolore voluptate fugit totam, quod error doloribus architecto.
                     </p>
                  </div>

                  <div className=" rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                     <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4">
                        <div>
                           <input
                              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                              placeholder="Name"
                              value={name}
                              type="text"
                              onChange={(e) => setName(e.target.value)}
                           />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                           <div>
                              <input
                                 className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                 placeholder="Price"
                                 type="number"
                                 value={price}
                                 //cast type string to number
                                 onChange={(e) => setPrice(parseFloat(e.target.value))}
                              />
                           </div>

                           <label
                              htmlFor="Option1"
                              className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-2 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
                           >
                              <div className="flex items-center">
                                 &#8203;
                                 &#8203;
                                 <input
                                    type="checkbox"
                                    className="size-4 rounded border-gray-300"
                                    checked={is_new}
                                    onChange={(e) => setIs_new(e.target.checked)} />
                              </div>

                              <div className="text-sm font-normal text-gray-400">
                                 New product
                              </div>
                           </label>
                        </div>


                        <div>
                           <label className="sr-only" htmlFor="message">Message</label>
                           <textarea
                              className="w-full h-[5em] rounded-lg border border-gray-200 p-3 text-sm"
                              placeholder="Image URL"
                              value={image_url}
                              onChange={(e) => setImage_url(e.target.value)}>

                           </textarea>
                        </div>

                        <div className="flex justify-end mt-4">
                           <button onClick={addProduct} type="submit" className="inline-block w-full rounded-lg bg-[#775b45] px-5 py-3 font-medium text-white sm:w-auto">Add product</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </section>
   );
}
