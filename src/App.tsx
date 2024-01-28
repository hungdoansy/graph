import styled from "styled-components"

const Text = styled.div`
    margin-top: 120px;
`

function App() {
    return (
        <Text>
            Bézier curves have been a recurring theme in my frontend engineering career. I have used them extensively in
            my work - in animations and SVG paths of illustrations and icons. However, I only recently took an interest
            in understanding the underlying logic that governs their behaviour. This demystified curve-related path
            commands for me and gave me a deeper understanding of web animations. In this article, I’ll share my
            interesting findings on Bézier curves.In CSS animations, easing functions specify the rate of change of a
            property over time. There are 3 types of easing functions - Linear, Step and Cubic Bézier.101Linear
            EasingLinear is typically used to animate properties at a constant rate/speed.101Step EasingStep is used to
            animate properties at equal time intervals.101Cubic Bézier EasingCubic Bézier is used to animate properties
            at variable rate/speed.Predefined CSS easings like ease, ease-in, ease-out and ease-in-out as well as
            commonly used smooth easings like ease in sine and ease in cubic are examples of cubic Bézier easing
            functions. Custom easings can also be generated with cubic Bézier easing functions.
        </Text>
    )
}

export default App
