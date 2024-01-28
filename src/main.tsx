import React from "react"
import ReactDOM from "react-dom/client"

import GlobalStyle from "@/components/GlobalStyle"
import Graph from "@/components/Graph"
import GraphHorizontalLabels from "@/components/GraphHorizontalLabels"

import App from "./App"
import Layout from "./components/Layout"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle />
        <Layout>
            <Graph />
            <GraphHorizontalLabels />
            <App />
        </Layout>
    </React.StrictMode>
)
