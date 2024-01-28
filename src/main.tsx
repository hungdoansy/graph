import React from "react"
import ReactDOM from "react-dom/client"

import Article from "@/components/Article"
import Graph from "@/components/Graph"
import GraphHorizontalLabels from "@/components/GraphHorizontalLabels"
import GraphVerticalLabels from "@/components/GraphVerticalLabels"
import Layout from "@/components/Layout"
import { getLabelSize } from "@/utils"

import "./index.css"

;(() => {
    const listener = () => {
        const screenWidth = window.innerWidth
        const labelSize = getLabelSize()

        let graphWidth = 0
        if (screenWidth > 1200) {
            graphWidth = Math.ceil(screenWidth / labelSize / 2) * 2 * labelSize
        } else {
            graphWidth = 100 + Math.ceil(screenWidth / labelSize / 2) * 2 * labelSize
        }

        const root = document.documentElement
        root.style.setProperty("--graph-width", `${graphWidth}px`)
    }

    window.addEventListener("resize", listener)
    listener()
})()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Layout>
            <Graph />
            <GraphHorizontalLabels />
            <GraphVerticalLabels />
            <Article />
        </Layout>
    </React.StrictMode>
)
