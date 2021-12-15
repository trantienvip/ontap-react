import instance from "./instance";

export const list = () => {
    const url = "/products"
    return instance.get(url);
};

export const create = (data) => {
    const url = "/products"
    return instance.post(url, data);
};

export const removed = (id) => {
    const url = "/products/" + id
    return instance.delete(url);
};

export const read = (id) => {
    const url = "/products/" + id
    return instance.get(url);
};

export const update = (data) => {
    const url = "/products/" + data.id
    return instance.patch(url, data);
};

export const signup = (data) => {
    const url = "/signup"
    return instance.post(url, data);
};

export const signin = (data) => {
    const url = "/login"
    return instance.post(url, data);
};