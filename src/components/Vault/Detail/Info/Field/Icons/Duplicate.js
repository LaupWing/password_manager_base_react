const Duplicate = ({onClick}) =>(
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
         d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      >
      </path>
   </svg>
)

export default Duplicate