import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            // <div className="footer">
            //     <div className="navbar navbar-inverse">
            //         <div className="container-fluid">
            //             <div className="navbar-header">
            //                 <a className="navbar-brand" href="/">Clicky Game</a>
            //             </div>
            //             <p>Copyright 2018 Dan Pedersen</p>
            //         </div>
            //     </div>
            // </div>

            <div className="navbar navbar-default navbar-fixed-bottom">
                <div className="container-fluid">
                    <p className="navbar-text pull-left">© 2018 - Daniel Pedersen.
                        {/* <a href="http://tinyurl.com/tbvalid" target="_blank" >HTML 5 Validation</a> */}
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;