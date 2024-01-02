import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Edit() {
    const { id } = useParams()
    const [content, updateContent] = useState({ title: '', post: '', id: '' })
    useEffect(() => {
        document.title = "Edit Post";
        async function fetchPost() {
            let posts = (await axios.get(import.meta.env.VITE_BACKEND)).data
            let post = posts.filter((val, idx) => {
                if (val.id == id) {
                    return val
                }
            })
            updateContent({ title: post[0].title, post: post[0].post, id: id })
        }
        fetchPost()

    }, []);
    function handleChange(event) {
        let { name, value } = event.target;
        updateContent((prevContent) => ({ ...prevContent, [name]: value }));
        console.log(content);
    }
    function submitPost() {
        axios.post(import.meta.env.VITE_BACKEND + "/edit", {
            title: content.title, post: content.post, id: content.id
        }).then(
            () => {
                window.alert('post edited successfully')
                window.location.replace('#/')
            }
        )

    }

    return <>
        <Navbar />
        <div className="container">
            <h1 className="row col-10 mx-auto my-4">Edit Post</h1>
            <form onSubmit={(e) => {
                submitPost()
                e.preventDefault();
            }} className="row-3 col-10 mx-auto">
                <div className="form-floating mb-4">
                    <input required className="form-control border border-secondary" name='title' placeholder={content.title} value={content.title} onChange={handleChange} />
                    <label className="ms-2">Title</label>
                </div>

                <div className="form-floating mt-3">
                    <textarea required className="form-control border border-secondary" name="post" style={{ height: "40vh" }} placeholder={content.post} value={content.post} onChange={handleChange}></textarea>
                    <label className="ms-2">Post</label>
                </div>
                <input type="submit" value={"Submit"} className="btn btn-primary m-3 ms-0" />
            </form>
        </div>
    </>
};