import Link from "next/link";
const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  await new Promise((resolve)=>setInterval(resolve,1000));

  const res = await fetch(url);
  const data = res.json();
  //  console.log(data);
  return data;
};

const About = async() => {
  // JS
  const data = await fetchTodos();
  console.log(data);

  return <div>
    About
    {
      data.map((item,index)=>{
        return <li key={index}>{item.title}</li>

      })

    }


  </div>;
};
export default About;
