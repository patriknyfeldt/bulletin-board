import ReactPost from "./ReactPost"
const BulletinBoard = ({posts}) => {

    return (
        <>
        {posts && posts.map((post, i) => {
            return (
               <ReactPost key={i} {...post} />
            )
        })}
        </>
    )
}
export default BulletinBoard