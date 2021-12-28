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

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, 'posts')

        onSnapshot(query(collectionRef, orderBy("timestamp", "desc")), (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    const sendPost = async (e) => {
        e.preventDefault();
        const collectionRef = collection(db, 'posts')
        const payload = {name: 'Antoine Jonville', description: 'Ceci est un test', message: input, photoUrl: '', timestamp: serverTimestamp()}
        await addDoc(collectionRef, payload)
        setInput('')
        // console.log(docRef);

        // const docRef = doc(db, 'posts');
        // await setDoc(docRef, payload);
        // db.collection('posts').add({
        //     name: 'Antoine Jonville',
        //     description: 'Ceci est un test',
        //     message: input,
        //     photoUrl: '',
        //     timestamp: db.FieldValue.serverTimestamp(),
        // });
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
                    <InputOption Icon={SubscriptionsIcon} title='Vidéo' color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title='Évènement' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='Rédiger un article' color="#7FC15E" />
                </div>
            </div>
            {posts.map(({id, data: { name, description, message, photoUrl } }) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            {/* <Post name='Antoine Jonville' description='Ceci est un test' message='WOW Ca fonctionne' /> */}
        </div>
    )
}

export default Feed
