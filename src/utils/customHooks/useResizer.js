import { useEffect, useState } from 'react';

const handleResizeHandler = (setScreenWidth) => {
    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth)
    })
}

function useResizer() {
    const mobileWidthBreakPoint = 900
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

    useEffect(() => {
        return handleResizeHandler(setScreenWidth)
    }, [screenWidth])

    return [screenWidth, mobileWidthBreakPoint]
}

export default useResizer