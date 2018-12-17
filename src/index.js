import React from "react";
import ReactDOM from "react-dom";
import ViewSelector from "./View/ViewSelector";

ReactDOM.render(<ViewSelector />, document.getElementById("mainApp"));


// if (module.hot) {
//     module.hot.accept("./View/ViewSelector", function() {
//         ReactDOM.render(<ViewSelector />, document.getElementById("mainApp"));
//  });
// }