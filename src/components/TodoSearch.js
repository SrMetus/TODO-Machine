export const TodoSearch = ({searchValue, setSearchValue}) => {
  
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <input 
      placeholder='no comer frituras'
      value={searchValue}
      onChange={handleInputChange}
    />
  )
}
