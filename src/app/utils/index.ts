import { FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
    apiKey: "AIzaSyC_C52H56TgJBvF0tC4n1SOITPeuOsqAkE",
    authDomain: "bholeshankarproject.firebaseapp.com",
    projectId: "bholeshankarproject",
    storageBucket: "bholeshankarproject.appspot.com",
    messagingSenderId: "589335576286",
    appId: "1:589335576286:web:0ec4e65797fac98225cc4f",
    measurementId: "G-YR1NNTJJ4X"
  };

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}
