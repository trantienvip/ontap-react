import { useForm } from "react-hook-form";


const Add = ({ onAdd }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        onAdd(data);
    }
    return (
        <div className="container">
            <h2>Thêm sản phẩm</h2>
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
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Add;