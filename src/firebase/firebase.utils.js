import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyArxiQ-QCjblEL2fO_dx94cBnxOED356RA",
    authDomain: "clothing-store-cdf5b.firebaseapp.com",
    databaseURL: "https://clothing-store-cdf5b.firebaseio.com",
    projectId: "clothing-store-cdf5b",
    storageBucket: "clothing-store-cdf5b.appspot.com",
    messagingSenderId: "540156462570",
    appId: "1:540156462570:web:63570f3045c2e12b1c1e93",
    measurementId: "G-1YFZRZCH4P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        // Sign Out
        return;
    }
    // Sign In
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();
    if (!userSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error("Error creating user", error.message)
        }
    }

    return userRef;
}

export const convertCollectionsSnapshotToMap = ((querySnapshot) => {
    const transformedCollection = querySnapshot.docs.map((documentSnapshot) => {
        const { title, items } = documentSnapshot.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: documentSnapshot.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
});

export const getcurrentUser = () => {
    // Promise for sagas to deal with
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}

export const addcollectionAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    // Batch write to have consistency. Either everything goes right or everything goes wrong.
    const batch = firestore.batch();

    objectsToAdd.forEach((object) => {
        const newDocReference = collectionRef.doc();
        batch.set(newDocReference, object);
    });

    // If commit succeeds, the promise returns null
    return await batch.commit();
}

// Google Authentication
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;