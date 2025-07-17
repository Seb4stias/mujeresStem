import React, { useEffect, useState } from "react";

const styles = {
  container: {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    width: '70%',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  loading: {
    fontStyle: 'italic',
    color: '#666',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '20px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007bff',
    textDecoration: 'none',
  },
  description: {
    color: '#555',
    marginTop: '5px',
  },
};

const Api = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "9777ae5f6e0e46048927035236923cf3"; // aki ta la llave 
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        if (searchTerm) {
          url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=${apiKey}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error al obtener las noticias");
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(query.trim());
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Noticias Recientes</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Buscar noticias..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Buscar</button>
      </form>
      {error && <p style={styles.error}>Error: {error}</p>}
      {!error && articles.length === 0 && <p style={styles.loading}>Cargando noticias...</p>}
      <ul style={styles.list}>
        {articles.map((article, index) => (
          <li key={index} style={styles.listItem}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {article.title}
            </a>
            <p style={styles.description}>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
