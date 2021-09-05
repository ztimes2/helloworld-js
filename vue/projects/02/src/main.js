import { createApp } from 'vue';
import App from './App.vue'
import FriendCard from './components/FriendCard.vue';
import CreateFriendForm from './components/CreateFriendForm.vue';

const app = createApp(App);
app.component('friend-card', FriendCard);
app.component('create-friend-form', CreateFriendForm);
app.mount('#app');
