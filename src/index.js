import React from "react";
import { makeServer } from "./server";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import {VedioProvider, VideoLibraryHookProvider } from "./context/index"

import "./index.css";
// Call make Server
makeServer();
const container = document.getElementById("root")
const root = createRoot(container);
root.render(
    <Router>
        <VideoLibraryHookProvider>
            <VedioProvider>
                <App />
            </VedioProvider>
        </VideoLibraryHookProvider>
    </Router>
);
