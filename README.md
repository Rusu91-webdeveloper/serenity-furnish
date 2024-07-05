# https://serenity-furnish.vercel.app/


# I create this Project Using React vite

## Technologies used for this project:

- `Axios`(Easier way of fetching the data)

- `Redux Toolkit`(replacing UseReducer and ContextApi)
- `ReactRouterDom`(to create the routes)

- `Toastify,Tailwind CSS, Daisy UI`(For UI)

# Step 1

- Create all the Pages
  configure react router

- setup initial route structure
- `HomeLayout` it will have the path="/" and `Landing` component it has the index=`true` and All the other pages except `login` and `register` will be the children pages of HomeLayout

# Step 2

- I structure the Error page
- I use the hooks provided by react-router-dom(`useRouteError` and `Link`)

# Step 3

## Create an input `FormInput` Component and `SubmitBtn`

- i use daisy UI
- i passed props in order to make the component reusable and dynamic({`type,name,label,defaultValue`})

### Using the `FormInput` and `SubmitBtn` i create the Register and Login Pages

- - Import `Form` from `'react-router-dom'`.
- `Form` element had the method="`post`" and it became the parent of the `FormInput` and `SubmitBtn` components

# Step 4

## Start Creating the Header and the NavBar Components and set the THEME with the help of Daisy UI

### `Header` component will have to Link hook which redirect the user to login and register page

### `NavBar` component will have the `NavLink` component nested inside and this will have the array of links

### in order to change the theme i need to target the HTML document and set the atribute to a theme `document.documentElement.setAttribute("data-theme", theme)`

# `!!!Start building the pages!!!`

## `home,about,products,cart,checkout,orders`

- `home(Landing page)` displaying some text and a carousel(no functionality)
- `about` info about the shop(no functionality)
- create utils file and create a custom hook `customFetch` in order to get the data
- ### Products and SingleProduct component
- fetch the data in the `Products` component and each product will have a `Link` to redirect to the dynamic Route `Product`
- Once the Path in App.jsx for SingleProduct is `/products:id` and in ProductsGrid component i pass as `Link to=/products/${product.id}` than i can acces in the SingleProduct the `params.id`
- in `SingleProduct` component i must use `useLoaderData` hook from react-router-dom in order to use the data
- start creating the `Products` page this will have as main Children the `ProductsContainer` which has the `ProductsList and ProductGrid` component nested
- start creating the filter component which is part of `Products` page
- in order to filter the product i must `match the names of input with the properties of the API which are comming from meta object`
- next step is to create the pagination,here i am using `new hooks comming from react-router-dom (useLocation,useNavigate)`
- `Products page is DONE!!!!!!`

### Cart Page
