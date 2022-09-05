import PostLiked from './PostLiked';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import { useState } from 'react';
const ReactPost = ({question, answers}) => {

    const [liked, setLiked] = useState(false);

    return (
        <div className="post-box">
            <h3 className='post-heading'>{question}</h3>
            {answers.length > 1 ? (
                <ul className='answer-list'>
                    {answers.map((answer, i) => {
                        return <li key={i}>{answer}</li>
                    })}
                </ul>
            ):(
                <div className="answer-box">
                <p>{answers[0]}</p>
                </div>
            )}
            <div className="like-box">
            {liked? <PostLiked liked={liked} setLiked={setLiked}/> : 
            <ThumbUpRoundedIcon className='like-btn' onClick={() => {setLiked(!liked)}} fontSize='small'/>
            }
            </div>
        </div>
    )
}
export default ReactPost