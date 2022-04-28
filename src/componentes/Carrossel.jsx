const FirstComponent = () => {
  
    //COMENTÁRIO
    const name = "Camila";
    const handleClick = () => {
        console.log("Clicou no botão!");
    }
  
    return(
    <div className="firstcomponent">
        {/* COMENTÁRIO NO JSX */}
        <h2>Primeiro componente</h2>
        {2 + 2}
        <p>Nome: {name}</p>
        <button onClick={handleClick}>Evento de click</button>
    </div>
  );
}

export default FirstComponent;