import React from "react"
import ReactDOM from "react-dom/client"

import GlobalStyle from "@/components/GlobalStyle"
import Graph from "@/components/Graph"
import GraphHorizontalLabels from "@/components/GraphHorizontalLabels"
import GraphVerticalLabels from "@/components/GraphVerticalLabels"
import Layout from "@/components/Layout"

import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle />
        <Layout>
            <Graph />
            <GraphHorizontalLabels />
            <GraphVerticalLabels />
            <App />
        </Layout>
    </React.StrictMode>
)
