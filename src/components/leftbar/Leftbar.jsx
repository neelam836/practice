import React from 'react';
import { Link, withRouter } from "react-router";


function Leftbar(props) {
    return (
      <>
        <div className="mt-4">
          <h5 className="fw-bold text-center">View All Grosseries</h5>
        </div>
            <div >
                {/* for all button */}
          <Link to={"/products"} className={`btn btn-${props.ccat == "" ? "success" : "primary"
            } m-3`} >
            All
                </Link>
                {/* for menu buttons */}
          {props.menu.map((item) => (<Link
              to={"/products/" + item} className={`btn btn-${ props.ccat == item ? "success" : "primary" } m-3`} >
              {item}
            </Link>
          ))}
        </div>
      </>
    );
}

export default Leftbar;