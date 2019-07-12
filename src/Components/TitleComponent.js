import React from 'react';

function TitleComponent  ({name,title})  {
    return (
    <div className="container mt-10">
    <div className="row">
     <div className="col-10 max-auto my-2 text-center">
         <h2 className="">{name} &nbsp;
         <strong>{title}</strong>
         </h2>
     </div>

    </div>
    </div> );
}
 
export default TitleComponent;