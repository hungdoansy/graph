export const getGraphWidth = () => {
    const graphWidth = getComputedStyle(document.documentElement).getPropertyValue("--graph-width")
    if (!graphWidth) {
        throw new Error("Cannot find article width")
    }

    return Number(graphWidth.slice(0, -2))
}

export const getLabelSize = () => {
    const cellSize = getComputedStyle(document.documentElement).getPropertyValue("--main-cell-dimension")
    if (!cellSize) {
        throw new Error("Cannot find cellSize")
    }

    const labelSize = Number(cellSize.slice(0, -2))
    return labelSize
}

export const getNumberOfLabels = (length: number) => {
    return Math.ceil(length / getLabelSize() / 2) * 2
}

export const getHorizontalLabels = () => {
    const numOfLabels = getNumberOfLabels(getGraphWidth())

    const nums = Array.from({ length: 12 }).map((_, index) => index)
    while (nums.length < numOfLabels) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        nums.push(nums.at(-1)! + 1)
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        nums.unshift(nums.at(0)! - 1)
    }

    return nums.map((num) => String(num * 100))
}

export const getVerticalLabels = () => {
    const numOfLabels = Math.ceil(window.innerHeight / getLabelSize())

    const nums = Array.from({ length: numOfLabels }).map((_, index) => String(index * 100))
    return nums
}
