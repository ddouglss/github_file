// src/routes/UserRepos.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './UserRepos.module.css';
import { useNavigate } from 'react-router-dom';


interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
}

const UserRepos = () => {
    const { login } = useParams<{ login: string }>();
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${login}/repos?per_page=5`);
                const data = await res.json();
                setRepos(data);
            } catch (error) {
                console.error("Erro ao buscar repositórios", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [login]);

    if (loading) return <p className={classes.loading}>Carregando repositórios...</p>;

    return (
        <div className={classes.container}>
            <button className={classes.backButton} onClick={() => navigate(-1)}>
                ⬅ Voltar
            </button>
            <h1 className={classes.title}>Repositórios de {login}</h1>
            <ul className={classes.repoList}>
                {repos.map(repo => (
                    <li key={repo.id} className={classes.repoItem}>
                        <h2>{repo.name}</h2>
                        <p className={classes.lingua}><strong>Linguagem:</strong> {repo.language || 'N/A'}</p>
                        <div className={classes.stats}>
                            <span>⭐ {repo.stargazers_count}</span>
                            <span>🍴 {repo.forks_count}</span>
                        </div>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={classes.button}>
                            Ver Código
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserRepos;
