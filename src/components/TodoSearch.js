export const TodoSearch = ({searchValue, setSearchValue}) => {
  
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  console.log(`los usuarios buscaron ${searchValue}`);

  return (
    <input 
      placeholder='no comer frituras'
      value={searchValue}
      onChange={handleInputChange}
    />
  )
}
