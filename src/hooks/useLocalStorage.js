import { useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
    const localStorageItem = localStorage.getItem(itemName)
    let parseditem;
    
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify([initialValue]))
      parseditem = [initialValue];
    } else {
      parseditem = JSON.parse(localStorageItem)
    }
  
    const [item, setItem] = useState(parseditem);
  
    const saveItem = newItem => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    return [item, saveItem]
  }