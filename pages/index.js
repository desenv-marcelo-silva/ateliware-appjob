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
        display: flex;
        justify-content: space-around;
        align-items: stretch;
      }
      .item {
        align-self: center;
      }
    `}</style>
    <style global jsx>{`
      body {
        background: #a3a3f3;
      }
    `}</style>
  </div>
);

export default Index;
