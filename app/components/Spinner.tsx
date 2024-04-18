import { useEffect } from 'react'

export default function Loader() {
    useEffect(() => {
      async function getLoader() {
        const { square } = await import('ldrs')
        square.register()
      }
      getLoader()
    }, [])
    return <l-square color="black" stroke='3'  size='100' ></l-square>
  }