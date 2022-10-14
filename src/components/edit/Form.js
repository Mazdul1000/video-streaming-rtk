import { useState } from "react";
import { useEditVideoMutation } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form({video}) {

    const{id, title:initialTitle, author:initialAuthor,thumbnail:initialThumbnail, description:initialDescription, date:initialDate, duration:initialDuration, views:initialViews, link:initialLink} = video;

    const [title, setTitle] = useState(initialTitle);
    const [author, setAuthor] = useState(initialAuthor);
    const [thumbnail, setThumbnail] = useState(initialThumbnail);
    const [description, setDescription] = useState(initialDescription);
    const [date, setDate] = useState(initialDate);
    const [duration, setDuration] = useState(initialDuration);
    const [views, setViews] = useState(initialViews);
    const [link, setLink] = useState(initialLink);


    const [editVideo, { data:editedVideo , isLoading, isSuccess, isError}] = useEditVideoMutation()


    const handleSubmit = (e) => {
        e.preventDefault();

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

        console.log(data);

        editVideo({id,data});
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
            {isError && <Error message="Could not add video. Something went wrong" />}
        </div>
    </form>
    );
}
