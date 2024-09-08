import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue)
  const [isLoading, setisLoading] = useState(true)
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parseditem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]))
          parseditem = [initialValue];
        } else {
          parseditem = JSON.parse(localStorageItem)
          setItem(parseditem)
        }
        setisLoading(false)
      } catch (e) {
        setisLoading(false)
        setIsError(true)
        console.error('Error al cargar el localStorage:', e)
      }
    }, 2000)
  }, [])
  
  const saveItem = newItem => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  return { item, saveItem, isLoading, isError }
}