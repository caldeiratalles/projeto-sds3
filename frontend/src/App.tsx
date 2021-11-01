import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarCharts from "components/BarCharts";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
    <NavBar></NavBar>
    <div className="container">
      <h1 className="text-primary py-3">Dashboard de Vendas</h1>
      <DataTable></DataTable>
      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center">Porcentagem de Vendas</h5>
          <BarCharts></BarCharts>
        </div>  
        <div className="col-sm-6">
        <h5 className="text-center">Gráfico de Vendas</h5>
        <DonutChart></DonutChart>
        </div>
      </div>   
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
