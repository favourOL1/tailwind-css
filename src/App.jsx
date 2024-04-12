import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Shrink from './component/Shrink'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container flex'>
        <p className='bg-[#fff000] text-sky-600 basis-1/2' >Hello World!</p>
        <div className='absolute top-[50px]'>
          content
        </div>
      </div>
      <div className='bg-red-900  w-1/2 min-w-96 font-serif font-thin text-white text-9xl italic tracking-widest'>
        hgjhfdjhf
      </div>

      <Shrink/>

      <p className=' line-clamp-4 line-through '>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      </p>

      <div className='w-28 bg-blue-600 hyphens-auto'>
        hgfhfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>

      <button disabled={true} onClick={()=> alert('yes')} className='hover:bg-red-900 disabled:bg-yellow-900'>Hello</button>

      <input type="text"  />


      <div className='bg-white sm:bg-black md:bg-red-500 lg:bg-blue-500 bg-favour' >
        my div
      </div>
    </>
  )
}

export default App
