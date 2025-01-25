# Admin Access Guide

## Setting up Admin Credentials

To access the AdminPanel, you need to:

1. First register a new user with an email ending in @silandental.com. This is enforced in both AdminRoute.tsx and AdminPanel.tsx.

2. You can register in two ways:
   - Use the regular signup page and register with an @silandental.com email
   - Have an existing admin create your account through the AdminPanel

## Accessing the Admin Panel

1. Once you have valid admin credentials (email@silandental.com), you can access the admin panel by:
   - Logging in at the /login page with your admin credentials
   - The system will automatically redirect you to the admin panel if you have proper permissions
   - You can also directly navigate to /admin, but you'll be redirected to login if not authenticated

## URL Routes

- Admin Panel URL: `http://[your-domain]/admin`
- Login URL: `http://[your-domain]/login`

## Important Notes

1. The system checks for admin access in two places:
   - AdminRoute.tsx checks if the email ends with @silandental.com
   - AdminPanel.tsx also verifies the email domain on component mount

2. If this is the first time setting up the system and no admin exists:
   - You'll need to register the first admin account through the regular signup process
   - Use an email ending with @silandental.com
   - After logging in, you can create additional admin accounts through the AdminPanel

3. Security Note:
   - Make sure to properly secure your first admin account
   - Only share @silandental.com email registration capability with trusted administrators
   - The system enforces email domain restrictions on both client and route levels