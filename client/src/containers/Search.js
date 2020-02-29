import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

const Search = () => {
    const [speaker, setSpeaker] = useState("")
    const history = useHistory();
    const handleChange = e => setSpeaker(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        if (speaker.trim().length > 0) {
            axios.get(`/${speaker}`)
                .then(res => {
                    if(!res.data.error) {
                        history.push(`/${speaker}`)
                    } else {
                        toast.error(res.data.error)
                    }
                })
                .catch(err => toast.error("Nothing found!"))
        } else {
            toast.warn("Cannot search for empty value")
        }
    }
    return (
        <Fragment>
            <div className="conainer mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4 offset-md-4 col-sm-12">
                        <form className="form-inline" onSubmit={handleSubmit}>
                            <ToastContainer />
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Speaker Name"
                                    onChange={handleChange}
                                    value={speaker}
                                />
                            </div>
                            <button className="btn btn-danger ml-2">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Search;