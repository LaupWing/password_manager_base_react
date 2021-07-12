const Link = ({onClick}) =>(
   <svg 
      onClick={()=>onClick()}
      className="w-5 h-5 mx-1 cursor-pointer hover:text-blue-600" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
   >
      <path 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         strokeWidth="2" 
         d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      >
      </path>
   </svg>
)

export default Link