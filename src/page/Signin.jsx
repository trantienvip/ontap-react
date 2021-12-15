import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signin } from "../api/ProductsAPI";
import { isAuthenticated } from "../isAdmin";

const Signin = () => {
    let navigation = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        signin(data).then((response) => {
            toast.success("Đăng nhập thành công")
            localStorage.setItem("user", JSON.stringify(response.data));
        })
            .then(() => {
                let auth = isAuthenticated()
                if (auth && auth.user.id === 1) {
                    navigation('/admin')
                } else {
                    navigation('/')
                }
            })
            .catch((err) => toast.error(err.response.data))
    }
    return (
        <div className="container">
            <div className="container">
                <h2>Đăng nhập</h2>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">email</label>
                            <input type="email" class="form-control" {...register("email", { required: true })} />
                            {errors.email && <span className="err">required</span>}
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">password</label>
                            <input type="password" class="form-control" {...register("password", { required: true })} />
                            {errors.password && <span className="err">required</span>}
                        </div>
                        <button type="submit" class="btn btn-primary">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;