import { Space, Table } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { list, removed } from "../api/ProductsAPI";

const Products = () => {
    const [data, setData] = useState();
    useEffect(() => {
        list().then(({ data }) => setData(data));
    }, [])

    const remove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                removed(id).then(() => setData(data.filter(item => item.id !== id)))
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }
    const columns = [
        {
            title: 'title',
            dataIndex: 'title',
        },
        {
            title: 'img',
            dataIndex: 'img',
            key: 'img',
            render: (img, title) => <img width={160} src={img} alt={title.title} />
        },
        {
            title: 'price',
            dataIndex: 'price',
        },
        {
            title: 'desc',
            dataIndex: 'desc',
        },
        {
            title: 'author',
            dataIndex: 'author',
        },
        {
            title: 'Action',
            key: 'id',
            render: (id) => (
                <Space size="middle">
                    <Link className="btn btn-info" to={"edit/" + id.id}>Sửa</Link>
                    <button className="btn btn-danger" onClick={() => remove(id.id)} >Xóa</button>
                </Space>
            ),
        },
    ];
    return (
        <div className="container">
            <h2>Product</h2>
            <Link className="btn btn-primary" to="add">Add</Link>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Products;