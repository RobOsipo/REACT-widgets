import React from 'react';


const Route = (props) => {
    const { path, children } = props;
    // const [currentPath, setCurrentPath] = React.useState(window.location.pathname)

    // React.useEffect(() => {

    //     const onLocationChange = () => {
    //         setCurrentPath(currentPath)
    //     }

    //     window.addEventListener('popstate', onLocationChange, {capture: true})

    //     return () => {
    //         window.removeEventListener('popstate', onLocationChange, {capture: true})
    //     }

    // }, [])

    return window.location.pathname === path
    ? children
    : null

    
}

export default Route;