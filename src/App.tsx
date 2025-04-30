import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import module from './App.module.css';
import '../src/themes/themes.css';

function App() {
    const [isLightMode, setIsLightMode] = useState(false);

    // Função para alternar o tema
    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    // Efeito para recuperar o tema do localStorage
    useEffect(() => {
        const theme = localStorage.getItem("theme") || "dark";
        setIsLightMode(theme === "light");
    }, []);

    // Efeito para aplicar o tema selecionado
    useEffect(() => {
        if (isLightMode) {
            localStorage.setItem("theme", "light");
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        } else {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        }
    }, [isLightMode]);

    return (
        <div className={module.app}>
            <button onClick={toggleTheme} className="toggle-btn">
                {isLightMode ? '🌙 Modo Escuro' : '☀️ Modo Leitura'}
            </button>
            <h1>GitHub Localize</h1>
            <Outlet /> {/* As rotas filhas serão renderizadas aqui */}
        </div>
    );
}

export default App;
