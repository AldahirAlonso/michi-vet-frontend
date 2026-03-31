import { Cat } from 'lucide-react';

function Header() {
    return(
        // Contenedor principal del encabezado: define fondo, padding y sombra para separar visualmente la barra superior.
        <header className="bg-white p-4 shadow-xl sticky">

            {/* Limita el ancho del contenido para que no ocupe todo el viewport en pantallas grandes. */}
            <div className="mx-auto container">

                {/* Navegacion horizontal: alinea logo a la izquierda y enlaces a la derecha con flex. */}
                <nav className="p-0 flex items-center justify-between">


                    {/* Marca principal del sitio; ordenados con un flex. */}
                    <div className="flex items-center space-x-4">
                        <Cat size={52} className="text-yellow-500" />
                        <a href="MichiVet" className="text-2xl text-black font-bold">MichiVet Cuernavaca</a>
                        <p className="font-extralight">Especializastas en Gatos</p>
                    </div>

                    {/* Lista de enlaces internos que desplazan a secciones de la pagina y aplican color hover para feedback visual. */}
                    <ul className="text-lg flex justify-end space-x-8 font-semibold">
                        <li>
                            <a href="#inicio" className="text-black hover:text-pink-400">Inicio</a>
                        </li>
                        <li>
                            <a href="#servicios" className="text-black hover:text-pink-400">Servicio</a>
                        </li>
                        <li>
                            <a href="#sobre nosotros" className="text-black hover:text-pink-400">Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#contacto" className="bg-purple-500 text-white px-5 py-2 rounded-full hover:bg-purple-600 transition-all shadow-md hover:shadow-lg active:scale-95">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;