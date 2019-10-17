// This is the Link API
import Link from "next/link";

const Index = () => (
  <div className="container">
    <div className="item">
      <p>Teste técnico Ateliware</p>
    </div>
    <div className="item">
      <Link href="/listarRepo">
        <a>Listagem dos repositórios</a>
      </Link>
    </div>
    <div className="item">
      <Link href="/detalheRepo">
        <a>Detalhe do repositório</a>
      </Link>
    </div>

    <style jsx>{`
      .container {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-template-rows: repeat(2, 100px);
      }
    `}</style>
  </div>
);

export default Index;
