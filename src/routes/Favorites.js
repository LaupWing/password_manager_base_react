import Vault from '@/components/Vault/Vault'
import {useSelector} from 'react-redux'

const Favorites= () => {
   const {favorites} = useSelector(state=>state.favorites)
   return (
      <Vault
         passwords={favorites}
      />
   );
}

export default Favorites