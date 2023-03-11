import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {VedioProvider} from "./context/videoContext"
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context";
import { WatchlatorProvider ,PlaylistProvider ,HistoryProvider ,LikeProvider } from "./context/index"


// Call make Server
makeServer();
const container = document.getElementById("root")
const root = createRoot(container);
root.render(
    <Router>
        <PlaylistProvider>
            <LikeProvider>
            <HistoryProvider>
    <WatchlatorProvider>
        <FilterProvider>
            <VedioProvider>
                <App />
            </VedioProvider>
        </FilterProvider>
            </WatchlatorProvider>
                </HistoryProvider>
                </LikeProvider>
            </PlaylistProvider>
</Router>
);
