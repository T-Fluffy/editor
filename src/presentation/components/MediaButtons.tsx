

const MediaButtons = () => {

    return (
        <div className="bottom-0 left-10 fixed">
            <button
                className="text-white bg-gradient-to-r from-blue-400 via-cyan-500 to-white-600 hover:bg-gradient-to-br dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Share
            </button>
            <button
                className="text-white bg-gradient-to-r from-blue-400 via-cyan-500 to-white-600 hover:bg-gradient-to-br dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Save
            </button>
        </div>
    );
};
export default MediaButtons