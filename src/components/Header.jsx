import { Cat } from 'lucide-react';

function Header() {
    return(
        // Contenedor principal del encabezado: define fondo, padding y sombra para separar visualmente la barra superior.
        <header className="bg-white p-4 shadow-xl">

            {/* Limita el ancho del contenido para que no ocupe todo el viewport en pantallas grandes. */}
            <div className="container">

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
                        <a href="#inicio" className="text-black hover:text-pink-400">Inicio</a>
                        <a href="#servicios" className="text-black hover:text-pink-400">Servicio</a>
                        <a href="#sobre nosotros" className="text-black hover:text-pink-400">Sobre Nosotros</a>
                        <a href="#contacto" className="bg-purple-400">Contacto</a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;