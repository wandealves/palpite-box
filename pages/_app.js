import 'tailwindcss/tailwind.css'

import '../styles/globals.css';

const MyApp = ({Component, pageProps}) =>{
return (
  <div>
      <h1 className="bg-green-400 md:bg-red-900 p-8">My App</h1>
       <Component {...pageProps}></Component>
  </div>
);
}

export default MyApp;