import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { read } from "../api/ProductsAPI";


const Edit = ({ onEdit }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let { id } = useParams();
    useEffect(() => {
        read(id).then(({ data }) => reset(data))
    }, [id])

    const onSubmit = (data) => {
        onEdit(data);
    }
    return (
        <div className="container">
            <h2>Sửa sản phẩm</h2>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Title</label>
                        <input type="text" class="form-control" {...register("title", { required: true })} />
                        {errors.title && <span className="err">required</span>}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">img</label>
                        <input type="text" class="form-control" {...register("img", { required: true })} />
                        {errors.img && <span className="err">required</span>}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">price</label>
                        <input type="number" class="form-control" {...register("price", { required: true })} />
                        {errors.price && <span className="err">required</span>}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">desc</label>
                        <input type="text" class="form-control" {...register("desc")} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">author</label>
                        <input type="text" class="form-control" {...register("author")} />
                    </div>
                    <button type="submit" class="btn btn-primary">Edit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit;