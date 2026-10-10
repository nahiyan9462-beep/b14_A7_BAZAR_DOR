 
import DateTime from "./DateTime";
 
import Navlinks from "./Navlinks";
 
 
 
import UserInfo from "./UserInfo";
 

const Navbar = () => {
 


  return (
    <header className="container mx-auto">
      <div className="sm:px-6 lg:px-8 mt-5">
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <DateTime />
          </div> 
          <UserInfo/>
        </div> 
               
        
        {<Navlinks />}
         
      </div>
    </header>
  );
};

export default Navbar;
