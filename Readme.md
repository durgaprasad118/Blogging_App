# InkWell

> Write freely, publish blogs easily.

# Preview
[video Preview](https://drive.google.com/file/d/1EMMF6A8iLHkdPPSjkmMtbemeU_-3q5Ow/view?usp=sharing)
## Live Link

[InkWell](https://blogging-app-mauve.vercel.app/)

### Technologies Used

##### Backend

    - Hono, postgresql, prisma, typescript,

##### Frontend

    - React, typescript, tailwindcss, tinymce(editor), recoil( statemenagement), lucide-react (icons), html-react-parser (HTML string to one or more React element), aos( animated scrolling), sonner(toasts)

## Features:

1. **User Authentication**:

   - Users can sign up and sign in seamlessly.
   - Authentication is secure.

2. **Responsive Design**:

   - The application is fully responsive, ensuring a consistent user experience across different devices and screen sizes.

3. **Dark Mode and Light Mode**:

   - Users have the option to toggle between dark mode and light mode for personalized viewing preferences.

4. **WYSIWYG Editor**:

   - Users can use a WYSIWYG (What You See Is What You Get) editor for formatting their blog posts, making it easy to customize the appearance of their content.

5. **Thumbnail Upload**:

   - Users can upload a thumbnail image for their blog posts to accompany their content visually.
   - Upload images to cloudinary

6. **Public Blog Viewing**:

   - Any user, whether logged in or not, can view all blogs created by all users.

7. **Blog Management**:

   - After logging in, users can create, update, and delete their blog posts.

8. **Labels for Blogs**:

   - Users can add labels or tags to their blog posts for categorization and easy differentiation.

9. **Search Functionality**:
   - The blogs section includes a search bar that debounces for backend search, ensuring that API calls are made after a delay to optimize performance.

## Todo

- Integrating images in betweeen the blogs
- Integrating OAuth
- Comments for posts
- Bookmarking posts
- saving drafts
