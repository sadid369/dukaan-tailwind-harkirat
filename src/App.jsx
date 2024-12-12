import RevenueCard from "./components/RevenueCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,312.20"}
          orderCount={14}
        ></RevenueCard>
      </div>
    </>
  );
}

export default App;
