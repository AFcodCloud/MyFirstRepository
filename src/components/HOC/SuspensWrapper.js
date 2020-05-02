import React from 'react'

export const withSuspens = (Component)=>{
    return (props)=>{
      return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </React.Suspense>
    }   
}






/* const SuspensWrapperHOC = (Component)=>{
    return(
        <React.Suspense fallback={<div>Loading...</div>}>
            {Component}
        </React.Suspense>
    )
    
}
export default SuspensWrapperHOC; */