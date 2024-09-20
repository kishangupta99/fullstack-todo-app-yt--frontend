import axios from "axios";

const baseUrl = "https://fulltstack-todo-app-yt-backend.onrender.com";
const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data --->", data);
    setToDo(data);
  });
};


// add function in frontend ....working...
const addToDo = (text , setText ,setToDo) => {
  axios
  .post(`${baseUrl}/save`,{text})
  .then((data)=>{
    console.log(data);
    setText("")
    getAllToDo(setToDo)
  })
  .catch((error)=>{
    console.log(error);
  });
};

// update function in frontend ....working...
const updateToDo = (toDoId , text , setToDo, setText, setIsUpdating) => {
  axios
  .post(`${baseUrl}/update`,{_id:toDoId ,text})
  .then((data)=>{
    setText("")
    setIsUpdating(false)
    getAllToDo(setToDo)
  })
  .catch((error)=>{
    console.log(error);
  });
};

// delete function in frontend ....working...
const deleteToDo = (_id ,setToDo) => {
  axios
  .post(`${baseUrl}/delete`,{_id})
  .then((data)=>{
    console.log(data);
    getAllToDo(setToDo)
  })
  .catch((error)=>{
    console.log(error);
  });
};


export { getAllToDo , addToDo , updateToDo , deleteToDo};
