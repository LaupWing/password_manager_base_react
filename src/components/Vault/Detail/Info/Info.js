import Field from './Field/Field'
import {useEffect, useState} from 'react'
import React from 'react'


const Info = ({
   detail
}) =>{
   useEffect(()=>{
      setShowPassword(false)
   },[detail])
   const [showPassword, setShowPassword] = useState(false)

   return (
      <div className="my-4 py-6 border-t-2 border-b-2 border-black-lightest">
         <Field
            label="username"
            value={detail.username}
            password={false}
            duplicate={true}
            />
         <Field
            label="password"
            value={detail.password}
            password={true}
            duplicate={true}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            eye={true}
         />
         <Field
            label="website"
            value={detail.url}
            password={false}
            link={true}
            duplicate={true}
         />
      </div>
   )
}

export default Info