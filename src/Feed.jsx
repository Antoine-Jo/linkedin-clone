import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const collectionRef = collection(db, 'posts')

        onSnapshot(query(collectionRef, orderBy("timestamp", "desc")), (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        setLoading(false)
    }, [])

    const sendPost = async (e) => {
        e.preventDefault();
        const collectionRef = collection(db, 'posts')
        const payload = {name: user.displayName, description: user.email, message: input, photoUrl: user.photoUrl || '', timestamp: serverTimestamp()}
        await addDoc(collectionRef, payload)
        setInput('')
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title='Vid??o' color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title='??v??nement' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='R??diger un article' color="#7FC15E" />
                </div>
            </div>

            <FlipMove>
            {posts.map(({id, data: { name, description, message, photoUrl } }) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed
