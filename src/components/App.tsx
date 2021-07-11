import React from "react";
import { Provider } from "react-redux";

import getStore from "../stores";

const store = getStore();

export default function App() {
    return (
        <Provider store={store}>
            <div>My Application</div>
        </Provider>
    );
}
