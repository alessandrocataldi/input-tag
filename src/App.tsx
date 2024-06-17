import "./App.css";
import InputTag from "./component/InputTag";

function App() {
  return (
    <main className="bg-gray-100">
      <section className="container mx-auto p-20 ">
        <div className="bg-white shadow-xs p-6 rounded-lg border border-gray-200 h-80">
          <h1 className="text-2xl font-bold">Input tag</h1>
          <div className="mt-8 mb-8">
            <InputTag />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
