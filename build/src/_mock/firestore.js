"use strict";
const short = require('short-uuid');
const users = [
    { id: 1, name: 'Sam Perkins' },
    { id: 2, name: 'Thomas Silvey' },
];
module.exports = {
    getDocs(props) {
        console.log('firestore', 'getDocs', props);
        return users;
    },
    getDoc(props) {
        console.log('firestore', 'getDoc', props);
        return users.find((f) => f.id === props.id);
    },
    createDoc(props) {
        console.log('firestore', 'createDoc', props);
        return { id: short.generate(), ...props };
    },
    updateDoc(props) {
        console.log('firestore', 'updateDoc', props);
        return true;
    },
    deleteDoc(props) {
        console.log('firestore', 'deleteDoc', props);
        return true;
    },
};
//# sourceMappingURL=firestore.js.map