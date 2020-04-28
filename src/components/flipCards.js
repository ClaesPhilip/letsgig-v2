import React from "react";

// import Layout from "../components/layout";
// import SEO from "../components/seo";


function FlipCards() {
  return (
    
      
    

    <div className='flipCards'>
        {/* <div className="maincontainer"> */}

        <div className="thecard">

        <div className="thefront"><h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>

        <div className="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
        <button>Submit</button></div>

        {/* </div> */}
        </div>

        <div className="thecard">

        <div className="thefront"><h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>

        <div className="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
        <button>Submit</button></div>

        {/* </div> */}
        </div>

        <div className="thecard">

        <div className="thefront"><h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div>

        <div className="theback"><h1>Back of Card</h1><p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
        <button>Submit</button></div>

        {/* </div> */}
        </div>
    </div>
    
  );
}

export default FlipCards;