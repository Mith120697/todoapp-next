import Fetch from "isomorphic-unfetch"

const Index = (props) => {
     return (
        <div className="overflow-hidden">
        <p class="text-center mt-6" >To Do List</p>
      <ul class="p-6 mt-6 mr-8 ml-10 w-70 text-m font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {props.data.map((element) => (
          <li class="flex justify-between  border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            {element.title}
            <input 
              type="checkbox"
              checked={element.completed}  
            
             
            />
          </li>
        ))}
      </ul>
      </div>
       
    );
  };
 

Index.getInitialProps = async function(){
    const res = await Fetch ("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()
    console.log(data)
    return {
       data:data
    }
}


export default Index;