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
import { addDoc, collection, doc, onSnapshot, serverTimestamp } from 'firebase/firestore';

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            // console.log(snapshot.docs.map(doc => doc.data()));
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
            // console.log(posts);
        })
        // onSnapshot(doc(db, 'posts'), (doc) => {
        //     setPosts(onSnapshot.docs.map(doc => ({
        //         id: doc.id,
        //         data: doc.data()
        //     })))
        //     console.log('Current data: ', doc.data());
        // })
        // db.collection('posts').onSnapshot(snapshot => (
        //     setPosts(snapshot.docs.map(doc => ({
        //         id: doc.id,
        //         data: doc.data(),
        //     })))
        // ))
    }, [])

    const sendPost = async (e) => {
        e.preventDefault();

        const docRef = await addDoc(collection(db, 'posts'), {
            name: 'Antoine Jonville',
            description: 'Ceci est un test',
            message: input,
            photoUrl: '',
            timestamp: serverTimestamp()
        })
        console.log("Document writtent with ID: ", docRef.id);
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
            {posts.map((post) => (
                <Post />
            ))}
            <Post name='Antoine Jonville' description='Ceci est un test' message='WOW Ca fonctionne' />
        </div>
    )
}

export default Feed
