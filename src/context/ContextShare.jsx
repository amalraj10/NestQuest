import React, { createContext, useState } from 'react'
 
export const addHostelResponseContext = createContext()
export const editHostelResoponseContext = createContext()
export const isDashoBoardContext = createContext()
export const isHomeContext = createContext()
export const isrefreshContext = createContext()

function ContextShare({children}) {
    
    const [addHostelResponse , setAddHostelResponse] = useState({})

    const [editHostelResponse , seteditHostelResponse] = useState({})
    const [isdashboardToken,setIsdashboardToken] = useState(true)
    const [isHomeToken,setIsHomeToken] = useState(true)
    const [isRefreshToken,setisRefreshToken] = useState(true)

  return (
    <>
<addHostelResponseContext.Provider value={{addHostelResponse,setAddHostelResponse}}>
<editHostelResoponseContext.Provider value={{editHostelResponse,seteditHostelResponse}}>
<isDashoBoardContext.Provider value={{isdashboardToken,setIsdashboardToken}}>
<isHomeContext.Provider value={{isHomeToken,setIsHomeToken}}>
  <isrefreshContext.Provider value={{isRefreshToken,setisRefreshToken}}>

{children}</isrefreshContext.Provider>
</isHomeContext.Provider>

</isDashoBoardContext.Provider>

</editHostelResoponseContext.Provider>
   
</addHostelResponseContext.Provider>

    </>
  )
}

export default ContextShare