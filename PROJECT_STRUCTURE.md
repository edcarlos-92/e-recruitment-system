# Project File Structure Documentation

This document provides a comprehensive overview of the MacTech Recruitment System file structure, highlighting what's included in the public repository versus what's protected.

## 📁 **Root Directory Structure**

```
e-recruit/
├── 📄 README.md                    # Project documentation
├── 📄 _GUIDE.md                    # Development guide
├── 📄 package.json                 # Dependencies and scripts
├── 📄 next.config.js               # Next.js configuration
├── 📄 tailwind.config.js           # Tailwind CSS configuration
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 .gitignore                  # Git ignore rules (includes MacTech exclusions)
├── 📄 example.env                 # Environment variables template
├── 📄 commitlint.config.js        # Commit linting configuration
├── 📄 firebase.json               # Firebase configuration
├── 📄 postcss.config.js           # PostCSS configuration
├── 📄 next-env.d.ts               # Next.js TypeScript definitions
├── 📄 setupTests.ts               # Jest test setup
├── 📄 yarn.lock                   # Yarn lock file
├── 📄 package-lock.json           # NPM lock file
├── 📁 public/                      # Static assets
└── 📁 src/                        # Source code
```

## 📁 **Public Directory Structure**

```
public/
├── 📁 assets/                      # Static assets
│   ├── 📁 files/                  # Document templates
│   │   └── 📄 requirements.pdf    # Application requirements
│   ├── 📁 images/                # Image assets
│   │   ├── 📁 avatar/            # User avatars
│   │   ├── 📁 dashboard/         # Dashboard icons
│   │   ├── 📁 layouts/           # Layout images
│   │   ├── 📁 sidebar/           # Sidebar icons
│   │   └── 📄 logo-square.png    # Company logo
│   └── 📁 styles/                # CSS files
│       ├── 📄 base.css           # Base styles
│       ├── 📄 custom.css        # Custom styles
│       ├── 📄 index.css         # Main styles
│       ├── 📄 loader.css        # Loading animations
│       └── 📄 tailwind.css      # Tailwind styles
├── 📁 screenshots/                # Demo screenshots
│   ├── 📄 bank-vouchers.png      # Banking interface
│   ├── 📄 candidate-profile.png  # Applicant dashboard
│   ├── 📄 candidate-registration.png # Registration form
│   ├── 📄 sales-page.png         # Sales interface
│   ├── 📄 settings-page.png      # Settings panel
│   └── 📄 voucher-sales.png      # Voucher sales
├── 📁 uploads/                    # File upload directory
└── 📄 favicon.ico                # Site favicon
```

## 📁 **Source Code Structure**

```
src/
├── 📁 @edcarlos/                   # Core application components
│   ├── 📁 core/                  # ✅ Reusable UI components
│   │   ├── 📄 AppAnimate/        # Animation components
│   │   ├── 📄 AppCard/           # Card components
│   │   ├── 📄 AppDialog/         # Dialog components
│   │   ├── 📄 AppFormComponents/ # Form components
│   │   ├── 📄 AppLayout/         # Layout components
│   │   ├── 📄 AppLoader/         # Loading components
│   │   ├── 📄 AppMenu/           # Menu components
│   │   ├── 📄 AppNotifications/  # Notification components
│   │   ├── 📄 AppSkeleton/       # Skeleton loading
│   │   ├── 📄 AppTable/          # Table components
│   │   └── 📄 AppThemeSetting/   # Theme configuration
│   ├── 📁 libs/                  # ✅ Utility libraries (basic)
│   │   ├── 📁 @edcartech/          # 🔒 PROTECTED - Core utilities
│   │   ├── 📁 @nextui/           # NextUI components
│   │   └── 📁 @tailwind-material/ # Tailwind Material
│   ├── 📁 services/              # 🔒 PROTECTED - API services
│   │   ├── 📁 apis/              # API configurations
│   │   ├── 📁 auth/              # Authentication services
│   │   └── 📁 db/                # Database services
│   └── 📁 utility/                # ✅ Helper functions and hooks
│       ├── 📁 AppContextProvider/ # Context providers
│       ├── 📁 helper/            # Helper functions
│       ├── 📁 hooks/             # Custom React hooks
│       └── 📄 AuthHooks.tsx     # Authentication hooks
├── 📁 modules/                    # Feature modules
│   ├── 📁 auth/                  # ✅ Authentication module
│   │   ├── 📄 Login.tsx          # Login component
│   │   ├── 📄 Signup.tsx        # Signup component
│   │   ├── 📄 ForgotPassword.tsx # Password recovery
│   │   └── 📄 ResetPassword.tsx  # Password reset
│   ├── 📁 userAccount/           # ✅ User account management
│   │   ├── 📄 MyAccount.tsx     # Account settings
│   │   ├── 📄 Profile.tsx       # User profile
│   │   └── 📄 Settings.tsx      # User preferences
│   ├── 📁 SystemUsers/           # ✅ System administration
│   │   ├── 📄 UserList.tsx      # User management
│   │   ├── 📄 UserRoles.tsx     # Role management
│   │   └── 📄 Permissions.tsx   # Permission settings
│   ├── 📁 macTech/               # 🔒 PROTECTED - Core recruitment
│   ├── 📁 errorPages/            # ✅ Error handling
│   ├── 📁 getloghistory/         # ✅ Log management
│   ├── 📁 getlogs/               # ✅ System logs
│   ├── 📁 sample/                # ✅ Sample components
│   └── 📄 routesConfig.tsx      # ✅ Routing configuration
├── 📁 pages/                      # Next.js pages and API routes
│   ├── 📁 api/                   # Backend API endpoints
│   │   ├── 📁 auth/              # ✅ Authentication APIs
│   │   ├── 📁 userAccount/       # ✅ User account APIs
│   │   ├── 📁 systemusers/       # ✅ System user APIs
│   │   ├── 📁 mactechrecruit/    # 🔒 PROTECTED - Core APIs
│   │   └── 📄 test/              # ✅ Test endpoints
│   ├── 📁 e-recruit/             # 🔒 PROTECTED - Frontend pages
│   ├── 📄 _app.tsx               # ✅ App wrapper
│   ├── 📄 _document.tsx          # ✅ Document wrapper
│   ├── 📄 index.tsx              # ✅ Home page
│   ├── 📄 signin.tsx             # ✅ Login page
│   ├── 📄 signup.tsx             # ✅ Registration page
│   ├── 📄 my-account.tsx         # ✅ Account page
│   ├── 📄 systemusers.tsx        # ✅ User management page
│   └── 📄 notifications.tsx     # ✅ Notifications page
├── 📁 redux/                      # State management
│   ├── 📁 actions/               # Redux actions
│   │   ├── 📄 Common.action.ts   # ✅ Common actions
│   │   ├── 📄 Settings.action.ts # ✅ Settings actions
│   │   ├── 📄 Auth.actions.tsx   # ✅ Authentication actions
│   │   └── 📄 MacTechRecruit.ts  # 🔒 PROTECTED - Core actions
│   ├── 📁 reducers/              # Redux reducers
│   │   ├── 📄 Common.ts          # ✅ Common reducer
│   │   ├── 📄 Settings.ts       # ✅ Settings reducer
│   │   ├── 📄 Auth.tsx           # ✅ Authentication reducer
│   │   └── 📄 MacTechRecruit.ts  # 🔒 PROTECTED - Core reducer
│   └── 📄 store/                 # ✅ Redux store configuration
├── 📁 types/                      # TypeScript type definitions
│   ├── 📁 actions/               # Action type definitions
│   │   ├── 📄 Common.action.ts   # ✅ Common action types
│   │   ├── 📄 Settings.action.ts # ✅ Settings action types
│   │   ├── 📄 Auth.actions.tsx   # ✅ Authentication action types
│   │   └── 📄 MacTechRecruit.actions.ts # 🔒 PROTECTED - Core action types
│   ├── 📁 models/                # Data model definitions
│   │   ├── 📁 common/            # ✅ Common models
│   │   ├── 📁 auth/              # ✅ Authentication models
│   │   ├── 📁 user/              # ✅ User models
│   │   └── 📁 mactechrecruit/    # 🔒 PROTECTED - Core models
│   ├── 📄 AppContextPropsType.tsx # ✅ Context prop types
│   └── 📄 index.ts               # ✅ Type exports
├── 📁 shared/                     # ✅ Shared constants and utilities
│   ├── 📁 constants/             # Application constants
│   │   ├── 📄 AppConst.ts        # Main constants
│   │   ├── 📄 AppTheme.ts        # Theme constants
│   │   └── 📄 RouteConfig.ts     # Route constants
│   ├── 📁 localization/          # Internationalization
│   │   ├── 📁 messages/          # Translation files
│   │   └── 📁 providers/         # i18n providers
│   └── 📁 vendors/               # Third-party styles
└── 📁 assets/                     # ✅ Static assets
    ├── 📁 icon/                  # Icon assets
    └── 📁 user/                  # User-related assets
```

## 🔒 **Protected Components (.gitignore)**

The following components are excluded from the public repository:

### **Core MacTech Module**
```
src/modules/macTech/              # Main recruitment module
src/pages/e-recruit/              # Frontend pages
src/pages/api/mactechrecruit/     # Backend APIs
```

### **Core Business Logic**
```
src/@edcarlos/libs/@edcartech/      # Core utilities
src/@edcarlos/services/db/         # Database services
src/@edcarlos/services/auth/       # Authentication services
```

### **State Management**
```
src/redux/actions/MacTechRecruit.ts    # Core Redux actions
src/redux/reducers/MacTechRecruit.ts   # Core Redux reducers
```

### **Type Definitions**
```
src/types/models/mactechrecruit/       # Core data models
```

## ✅ **Available Components**

### **UI Components**
- Material-UI based components
- Custom form components
- Layout and navigation components
- Theme and styling components

### **Authentication System**
- JWT-based authentication
- Login/logout functionality
- Password reset system
- User session management

### **Basic Modules**
- User account management
- System user administration
- Basic notification system
- Error handling pages

### **Development Tools**
- TypeScript configuration
- ESLint and Prettier setup
- Build and deployment scripts
- Environment configuration

## 🎯 **What This Structure Demonstrates**

This file structure showcases:

1. **Scalable Architecture**: Modular design with clear separation of concerns
2. **Modern Development Practices**: TypeScript, Redux, Next.js best practices
3. **Component Reusability**: Well-organized UI component library
4. **Security Considerations**: Proper separation of public and private code
5. **Professional Organization**: Clear naming conventions and folder structure

## 📝 **Notes**

- All protected components contain proprietary business logic
- The public components demonstrate architectural patterns and UI design
- Screenshots showcase the full system capabilities
- Documentation provides comprehensive setup instructions
- Commercial licensing available for full system access

---

*This structure represents a professional, enterprise-grade application architecture while protecting valuable intellectual property.*
