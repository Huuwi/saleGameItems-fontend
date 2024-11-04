import { useState, useRef, useEffect } from "react"


function TextRunning(props) {

    let textCss = props?.textCss || { fontSize: "25px" }
    let text = props?.text || "123456789"
    let [curtext, setCurText] = useState('')
    let index = useRef(-1)

    useEffect(() => {

        // index.current = -1
        if (index.current < text.length - 1) {
            let timer = setTimeout(() => {
                index.current += 1
                setCurText(pre => pre + text[index.current])
            }, props?.ms || 50)
            return () => {
                clearTimeout(timer)
            }

        }
    }, [curtext, text])


    return (
        <>
            <span style={{ ...textCss, color: "greenyellow", margin: "15px", overflow: "inherit" }} >{curtext}</span>
        </>
    )

}

export default TextRunning