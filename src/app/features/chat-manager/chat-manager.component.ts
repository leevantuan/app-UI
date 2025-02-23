import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-manager',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-manager.component.html',
  styleUrl: './chat-manager.component.scss',
})
export class ChatManagerComponent {
  chats = [
    {
      name: 'Marie Horwitz',
      message: 'Hello, Are you there?',
      time: 'Just now',
      unread: 3,
      avatar:
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
      status: 'online',
    },
    {
      name: 'Alexa Chung',
      message: 'Lorem ipsum dolor sit.',
      time: '5 mins ago',
      unread: 2,
      avatar:
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
      status: 'away',
    },
    {
      name: 'Danny McChain',
      message: 'Lorem ipsum dolor sit.',
      time: 'Yesterday',
      unread: 0,
      avatar:
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp',
      status: 'online',
    },
    {
      name: 'Marie Horwitz',
      message: 'Hello, Are you there?',
      time: 'Just now',
      unread: 3,
      avatar:
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
      status: 'online',
    },
    {
      name: 'Marie Horwitz',
      message: 'Hello, Are you there?',
      time: 'Just now',
      unread: 3,
      avatar:
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
      status: 'online',
    },
    {
      name: 'Marie Horwitz',
      message: 'Hello, Are you there?',
      time: 'Just now',
      unread: 3,
      avatar:
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
      status: 'online',
    },
    {
      name: 'Marie Horwitz',
      message: 'Hello, Are you there?',
      time: 'Just now',
      unread: 3,
      avatar:
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
      status: 'online',
    },
    {
      name: 'Marie Horwitz',
      message: 'Hello, Are you there?',
      time: 'Just now',
      unread: 3,
      avatar:
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
      status: 'online',
    },
    {
      name: 'Marie Horwitz',
      message: 'Hello, Are you there?',
      time: 'Just now',
      unread: 3,
      avatar:
        'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
      status: 'online',
    },
  ];

  messages = [
    { sender: 'other', text: 'Hello, how are you?', time: '12:00 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
    { sender: 'me', text: 'I am good, thank you!', time: '12:01 PM' },
  ];

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'me',
        text: this.newMessage,
        time: new Date().toLocaleTimeString(),
      });
      this.newMessage = '';
    }
  }

  showChatList() {
    document.querySelector('.chat-list')?.classList.toggle('d-block');
  }
}
