import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="w-screen h-1/4 bg-gray-800 text-white flex flex-col justify-center items-center">
      <h1 className="mt-4 text-yellow-400 font-extrabold text-4xl">Consumo de Api's</h1>
      <nav className="m-4 w-full text-center">
        <ul className="flex justify-center items-center">
          <li className="mr-4 font-extrabold hover:cursor-pointer hover:underline">
            <NavLink to='/'>Rick And Morty</NavLink>
          </li>
          <li className="mr-4 font-extrabold hover:cursor-pointer hover:underline">
            <NavLink to='/cats'>Cats</NavLink>
          </li>
          <li className="mr-4 font-extrabold hover:cursor-pointer hover:underline" >
            <NavLink to='gifs'>Gifs</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}