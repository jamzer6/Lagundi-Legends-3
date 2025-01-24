# How to Access the Admin Page

To access the admin page in the application, follow these steps:

1. **Login with Admin Credentials**
   - Navigate to the login page
   - Use an email and password for an account that has been registered with the admin role
   - The authentication system will verify your credentials using Firebase Authentication

2. **Role-Based Access**
   - When users are registered, their role is stored in the Firestore database
   - The system uses this role to determine access permissions
   - Only users with the admin role will have access to the admin dashboard

3. **Accessing the Dashboard**
   - After logging in successfully with admin credentials, you can access the admin dashboard at `/admin/dashboard`
   - The admin dashboard provides features like:
     - Viewing all appointments
     - Approving or denying appointments
     - Filtering appointments by day, month, or year
     - Managing appointment statuses
     - Deleting appointments

4. **Technical Note**
   - The admin access is controlled through Firebase Authentication and Firestore
   - User roles are stored in the 'users' collection in Firestore
   - Make sure your account has been properly set up with admin privileges by the system administrator

If you cannot access the admin page:
1. Verify that you are using the correct admin credentials
2. Ensure your account has been assigned the admin role
3. Contact the system administrator if you continue to have issues