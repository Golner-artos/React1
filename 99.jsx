function GreetingCard({ name }) {
  return (
    <div className="greeting-card">
      <h2>Привет, {name}!</h2>
    </div>
  );
}
 
function App() {
  return (
    <div>
      <GreetingCard name="Олена" />
      <GreetingCard name="Максим" />
    </div>
  );
}
 
export default App;