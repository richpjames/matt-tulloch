import React from "react";
import { Provider } from "react-redux";

import { store } from "./createStore";

export default ({ element }) => <Provider store={store}>{element}</Provider>;
