import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {

   return (
     <section
       className="flex flex-col p-7 text-center text-3xl bg-slate-700
     text-white"
     >
       <p className="text-6xl text-sky-200">404</p>
       <p>Error Page Not Found</p>
       <Link
         className="bg-slate-800 py-3 text-xl rounded-xl text-center 
      hover:bg-slate-900 my-10"
         to=".."
       >
         Go back to Home page
       </Link>
     </section>
   );
}


export default PageNotFound;
