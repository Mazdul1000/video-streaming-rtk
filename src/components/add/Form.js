// import Success from "../ui/Success";
import { useState } from "react";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import Success from "../ui/Success";
import Error from "../ui/Error";
import { useAddVideoMutation } from "../../features/api/apiSlice";

export default function Form() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState('');
    const [views, setViews] = useState('');
    const [link, setLink] = useState('');



    const [addVideo, { data : video, isLoading, isSuccess, isError}] = useAddVideoMutation()


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            title,
            author,
            thumbnail,
            description,
            date,
            duration,
            views,
            link
        }

        addVideo(data)
        resetForm();
    } 

    const resetForm = () => {
         setTitle("")
         setAuthor("")
         setThumbnail("")
         setDescription("")
         setDate("")
         setViews("")
         setLink("")
         setDuration("")
    }
    return (
        <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput 
                            title="Video Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput 
                            title="Author" 
                            onChange={(e) => setAuthor(e.target.value)}
                            value={author}
                            required
                            />
                        </div>

                        <div className="col-span-6">
                            <TextArea 
                            title="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            />
                        </div>

                        <div className="col-span-6">
                            <TextInput 
                            title="YouTube Video link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            required
                            />
                        </div>

                        <div className="col-span-6">
                            <TextInput 
                            title="Thumbnail link"
                            value={thumbnail}
                            onChange={(e) => setThumbnail(e.target.value)}
                            required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput 
                            title="Upload Date" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput 
                            title="Video Duration" 
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            required
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput 
                            title="Video no of views"
                            value={views}
                            onChange={(e) => setViews(e.target.value)}
                            required
                             />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>

                {isSuccess && <Success message="Video was added successfully" />}
                {isError && <Success message="Could not add video. Something went wrong" />}
            </div>
        </form>
    );
}
