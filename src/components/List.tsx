export function List () {
  return (
    <main>
      <section>
        <div>
          <input type="checkbox" />
          <p>Item 1</p>
          <div>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <p>Item 2</p>
          <div>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <p>Item 3</p>
          <div>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </div>
      </section>
      <section>
        <p>Você tem x tarefas pendentes</p>
        <button>Adicionar Tarefa</button>
        <button>Limpar Tarefas</button>
      </section>
    </main>
  );
}