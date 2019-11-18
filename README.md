# Vue-guard-routes-with-Firebase-Authentication
Demonstration on how to guard paths in a Vue project with Vue Router and Firebase Authentication

## Article
I have written a blog with explenation

[gaute.dev](https://gaute.dev/dev-blog/vue-router-firebase-auth)
[Medium](https://medium.com/@gaute.meek/vue-guard-routes-with-firebase-authentication-7a139bb8b4f6)
[dev.to](https://dev.to/gautemeekolsen/vue-guard-routes-with-firebase-authentication-f4l)
## Demo
Hosted at [vue-routes-authentication.web.app](https://vue-routes-authentication.web.app)

## Summary
```
firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};
```
```
const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('signin');
  }else{
    next();
  }
});
```

## Dev

### Serve
`npm run serve`

### Deploy to Firebase hosting
`npm run deploy`