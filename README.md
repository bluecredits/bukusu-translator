# Bukusu Translator (Netlify Deployment)

This version includes:
- Frontend (HTML/CSS/JS)
- Backend serverless function for OpenAI translation
- Secure API key storage in Netlify environment variables

## Deployment Steps

1. Upload this folder to GitHub or drag directly into Netlify.
2. In Netlify Dashboard:
   - Go to Site Settings -> Environment Variables
   - Add:
     OPENAI_API_KEY = your-key-here
3. Deploy site.
4. Test translator. It will now work correctly.
