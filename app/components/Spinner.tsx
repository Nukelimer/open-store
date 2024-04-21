import { useEffect } from 'react'

export default function Loader() {
    useEffect(() => {
      async function getLoader() {
        const { square } = await import('ldrs')
        square.register()
      }
      getLoader()
    }, [])
    return <l-square color="black" stroke='3' speed='0.7'  size='60'  ></l-square>
  }