import { HStack } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"

const Search = () => {
  return (
    <HStack gap="10" width="full">
      <div
        style={{
          display: 'flex',
          alignItems: 'center', 
          backgroundColor: 'white',
          position: 'relative',
          height: '36px',
          borderRadius: '6px',
          paddingInline: '10px',
          width: '100%',
          marginRight: '20px',
          top: '-6px',
        }}
      >
        <LuSearch 
          style={{
            fontSize: '18px',
            color: 'gray' 
          }} 
        />
        <input
          type="text"
          placeholder="Pretraži"
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'black',
            width: '100%',
            fontSize: '15px',
            paddingLeft: '5px',
          }}
        />
      </div>
    </HStack>
  )
}

export default Search
