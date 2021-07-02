import Vault from '@/components/Vault/Vault'


const AllItems = ()=> {
   const passwords = [
      {
         url: 'www.google.com',
         username:  'locdragon@gmail.com',
         password: 'test1',
         name: 'Google'
      },
      {
         url: 'www.instagram.com',
         username:  'locdragon@gmail.com',
         password: 'test1',
         name: 'Instagram'
      },
      {
         url: 'www.facebook.com',
         username:  'locdragon@gmail.com',
         password: 'test3',
         name: 'Facebook'
      },
      {
         url: 'www.dribbble.com',
         username:  'locdragon@gmail.com',
         password: 'test4',
         name: 'Dribble'
      },
      {
         url: 'digid.nl',
         username:  'locdragon@gmail.com',
         password: 'test4',
         name: 'DigID'
      },
      {
         url: 'marktplaats.nl',
         username:  'locdragon@gmail.com',
         password: 'test4',
         name: 'Marktplaats'
      },
   ]
   return (
      <Vault
         passwords={passwords}
      />
   );
}

export default AllItems