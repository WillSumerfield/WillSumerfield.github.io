// This file contains JavaScript functionality for the forum, including form validation, dynamic content loading, and user interactions.

document.addEventListener('DOMContentLoaded', function() {
    // Form validation for new thread submission
    const threadForm = document.getElementById('threadForm');
    if (threadForm) {
        threadForm.addEventListener('submit', function(event) {
            const titleInput = document.getElementById('threadTitle');
            if (titleInput.value.trim() === '') {
                alert('Thread title cannot be empty.');
                event.preventDefault();
            }
        });
    }

    // Dynamic content loading example
    const loadMoreButton = document.getElementById('loadMore');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            // Simulate loading more posts
            const postContainer = document.getElementById('postContainer');
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = '<h3>New Post Title</h3><p>This is a new post content.</p>';
            postContainer.appendChild(newPost);
        });
    }

    // User interaction example
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.dataset.postId;
            alert('You liked post ' + postId);
            // Here you would typically send a request to the server to register the like
        });
    });
});