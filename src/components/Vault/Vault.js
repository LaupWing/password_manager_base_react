import {useState} from 'react'
import Items from './Items/Items'
import Detail from './Detail/Detail'

const Vault = ({
   passwords
})=> {
   const [detail, setDetail] = useState(false)

   return (
      <>
         <Items
            detail={detail}
            setDetail={setDetail}
            passwords={passwords}
         />
         {detail && 
            <Detail
               detail={detail}
            />
         }
      </>
   );
}

export default Vault