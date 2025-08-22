

const MediaButtons = () => {

    return (
        <div className="bottom-0 right-0 fixed">
            <button
                style={{ backgroundColor: 'pink' }}
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Share
            </button>
            <button
                style={{ backgroundColor: 'pink' }}
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Save
            </button>
        </div>
    );
};
export default MediaButtons