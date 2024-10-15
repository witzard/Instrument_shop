const instruments = [
   {
      name: "Fender Guitar", price: 300,
      image_url: "https://images.unsplash.com/photo-1722050090741-a19630b90e5a?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: 20, is_new: true
   },{
      name: "Electric Guitar", price: 1299,
      image_url: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: 1572, is_new: true
   },{
      name: "Piano", price: 3500,
      image_url: "https://images.unsplash.com/photo-1690310588514-511dfaf88e3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: 2345, is_new: false
   },{
      name: "Violin", price: 750,
      image_url: "https://images.unsplash.com/photo-1528032947483-4e1df543253a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: 987, is_new: true
   },{
      name: "Ukulele", price: 150,
      image_url: "https://images.unsplash.com/photo-1646025242962-fac01d0e35f2?q=80&w=1239&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: 456, is_new: false
   },{
      name: "French Horn", price: 1250,
      image_url: "https://images.unsplash.com/photo-1590054387835-ab72678fef01?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      like: 896, is_new: false
   },

]

export default function Product() {
   return (
      <section>
         <span className="mt-5 relative flex justify-center">
            <div className=" absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
         </span>
         <div className="mx-12 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
               <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Our Product Collection</h2>
               <p className="mt-4 max-w-md text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                  dicta incidunt est ipsam, officia dolor fugit natus?
               </p>
            </header>
            <ul className="my-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
               {instruments.map((item, index) =>
                  <ProductItem
                     key={index}
                     name={item.name}
                     price={item.price}
                     image_url={item.image_url}
                     like={item.like}
                     is_new={item.is_new}
                  />)
               }
            </ul>
         </div>
      </section>
   );
}

export function ProductItem({ name, price, image_url, like, is_new }: {
   name: string;
   price: number;
   image_url: string;
   like: number;
   is_new: boolean;
}
) {

   return (
      <li className="">
         <a href="#" className="shadow-xl group block overflow-hidden rounded-3xl">
            <img src={image_url} alt="product_image" className="h-[350px] w-full object-cover transition duration-100 group-hover:scale-110 sm:h-[350px]" />
            <div className="py-5 px-[3em] relative bg-white pt-3">
               <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4">{name}</h3>
               <p className="flex justify-between mt-2">
                  <span className="tracking-wider text-gray-900"> ฿{price}</span>
                  <p className="flex gap-1">
                     <svg className="" height="25" width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                     <span className="tracking-wider text-gray-900"> {like}</span>
                  </p>
               </p>
            </div>
         </a>
      </li>
   );
}