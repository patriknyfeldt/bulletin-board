const PostLiked = ({liked, setLiked}) => {
    return (
        <div className="post-liked">
        <p className="like">You liked this post!</p>
        <p className="unlike" onClick={() => {setLiked(!liked)}}>Changed your mind?</p>
        </div>
    )
}
export default PostLiked