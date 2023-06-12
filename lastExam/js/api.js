import { getData } from "./dom.js";
const API = 'https://6264fc9e94374a2c506bde51.mockapi.io/users'

async function get(){
    try {
        let {data} = await axios.get(API)
        getData(data)
    } catch (error) {
        console.error(error);
    }
}

async function addUser(user){
    try {
        let {data} = await axios.post(API,user)
        get()
    } catch (error) {
        console.error(error);
    }
}

async function deleteUser(id){
    try {
        let {data} = await axios.delete(`${API}/${id}`)
        get()
    } catch (error) {
        console.error(error);
    }
}

async function editUser(id,obj){
    try {
        let {data} = await axios.put(`${API}/${id}`,obj)
        get()
    } catch (error) {
       console.error(error); 
    }
}

export default get
export {addUser,deleteUser,editUser}