


 
const url = "http://localhost:5000/api/recipes/find";

const fetchData = async () => {
    try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    } catch (error) {
    console.log("error", error);
    }
};

 const data = fetchData


export default data