# MERNH_Redux

**What you will need ?**
Install the following in frontend folder:
- redux
- react-redux
- redux-thunk 
- redux-devtools-extension

**Steps**
1. Create store.js
2. Import and Add Provider in index.js
3. Create constants
  > Request, Success, Fail
4. Create reducer 
  > Will contain switch (request, success, fail)
5. Create actions
  > Perform the work 
  > Will contain dispatch ({type, payload, error})
6. Add Reducer to store
7. Bring into components via useSelector & useDispatch 


**Notes**
- Affect Global state (ex: products)
- We use Redux so we can use a "GOD" object to fetch states instead of passing it through props
- Think of state as a cloud hovering over application
  > When we need a info, we get the value from the cloud
- In Components we fire off the  Actions > Reducers > Store ....
- Remember , Reducer takes in Action & State

Implementation
- We have implemenetd 3 ways of fetching products from the backend
1. HardCoded List
2. Using async and axios in FE
3. Using Redux