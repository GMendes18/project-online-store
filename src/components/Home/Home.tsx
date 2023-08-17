import Header from '../Header/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

      </main>

    </>

  );
}
