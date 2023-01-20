import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AuthProvider from "./Contexts/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Toaster />
        <AuthProvider>
            {" "}
            <App />
        </AuthProvider>
    </React.StrictMode>
);
