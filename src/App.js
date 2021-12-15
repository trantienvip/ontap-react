import './App.css';
import 'antd/dist/antd.css';
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './layout/Header';
import Products from './page/Products';
import Add from './page/Add';
import { create, update } from './api/ProductsAPI';
import { toast, ToastContainer } from 'react-toastify';
import Edit from './page/Edit';
import Signup from './page/Signup';
import Signin from './page/Signin';
import Admin from './page/Admin';
import Private from './component/Private';


function App() {
  let navigation = useNavigate()

  const onAddHandler = (data) => {
    create(data).then(() => {
      navigation("/product")
      toast.success("Thêm thành công")
    })
  }

  const onEditHandler = (data) => {
    update(data).then(() => {
      toast.success("Sửa thành công")
    })
  }
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="admin/*" element={<Private><Admin /></Private>}>
          <Route index element={<Navigate to="product" />} />
          <Route path="product" element={<Products />} />
          <Route path="product/add" element={<Add onAdd={onAddHandler} />} />
          <Route path="product/edit/:id" element={<Edit onEdit={onEditHandler} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
