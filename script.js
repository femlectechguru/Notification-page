const unreadMessage = document.querySelectorAll('.unread');
const unreadBtn = document.querySelector('#notifications');
const markAll = document.querySelector('#notification__mark-all');

unreadBtn.innerText = unreadMessage.length;

unreadMessage.forEach((message)=>{
    message.addEventListener('click',()=>{
        message.classList.remove('unread');
        const newunreadMessages = document.querySelectorAll('.unread');
        unreadBtn.innerText = newunreadMessages.length;
    });
});
markAll.addEventListener('click',()=>{
    unreadMessage.forEach((message)=>{
        message.classList.remove('unread');
    });
    const newunreadMessages = document.querySelectorAll('.unread');
    unreadBtn.innerText = newunreadMessages.length;
});