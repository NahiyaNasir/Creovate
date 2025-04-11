export const getStartUp = async () => {
    const resp = await fetch('http://localhost:3000/startup/api/get-all');
  
    // if (!resp.ok) {
    //   throw new Error(`Failed to fetch startups: ${resp.statusText}`);
    // }
  
    const posts =  resp.json();
    return posts;
  };
  export  const getStartUpDetails=async(id)=>{
    const resp=  await fetch(`http://localhost:3000/startup/api/${id}`)
    const startup=resp.json()
  
    return startup
  }