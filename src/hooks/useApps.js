import axios from "axios"
import { useEffect, useState } from "react"


const useApps = () => {
  const [app, setApp] = useState ([])
  const [loading, setLoading] = useState (true)
  const [error, setError] = useState (null)

  useEffect(() =>{
    setLoading(true)
    axios('/appData.json')
    .then(data=>setApp(data.data))
    .catch(err=>setError(err))
    .finally(()=> setLoading(false))
  }, [])

  return { app, loading, error }
}

export default useApps;