//test: si el componete HomePage renderiza un elemento que contiene el texto "hello"
import { render, screen } from '@testing-library/react'
import HomePage from '../pages/HomePage'

//se define el test con una descripción y un callback
test('renders hello text', () => {
    // Se enderiza el componente HomePage en un entorno de prueba virtual
    render(<HomePage />)
    
    // se busca un elemento en la pantalla que contenga el texto "hello" (ignora mayúsculas/minúsculas)
    const helloElement = screen.getByText(/hello/i)
   
    // se asegura que el elemento con el texto "hello" esté presente en la pantalla
    expect(helloElement).toBeInTheDocument()
});