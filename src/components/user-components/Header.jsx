import "./styles/Header.css"
function Header() {
    return (
        <div className="header-container">
<section className="header">
    <h1 className="header-title">Centro Educativo de la Republica Dominicana 🇩🇴
</h1>

<p className="header-subtitle">Nuestro anhelo es propagar el Reino de Dios, esto nos impulsa a entregarnos a la educación de la infancia y juventud, conscientes de su importancia para el bien del hombre, la Iglesia, la familia y la sociedad según nuestros fundadores: ( Madre Carmen González y Padre Bernabé de Astorga)Como seguidores de Jesucristo, creemos en la Iglesia y nos adherimos plenamente a su magisterio.
</p>
</section>
<section className="header-image">

    <img className="image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="imagen de ejemplo" />
</section>
        </div>
    )
}
export default Header